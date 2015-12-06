import Ember from "ember";

export default Ember.Component.extend({
  userName: undefined,
  password: undefined,
  authenticationErrorMessage: undefined,
  passwordErrorMessage: undefined,
  userNameErrorMessage: undefined,
  showAuthenticationError: Ember.computed("authenticationErrorMessage", function () {
    return this.get("authenticationErrorMessage") !== undefined;
  }),
  showUserNameError: Ember.computed("userNameErrorMessage", function () {
    return this.get("userNameErrorMessage") !== undefined;
  }),
  showPasswordError: Ember.computed("passwordErrorMessage", function () {
    return this.get("passwordErrorMessage") !== undefined;
  }),
  actions: {
    authenticate() {
      let trim, userName, password, jQuery;

      this.setProperties({
        authenticationErrorMessage: undefined,
        userNameErrorMessage: undefined,
        passwordErrorMessage: undefined
      });

      jQuery = Ember.$;
      trim = jQuery.trim;

      userName = trim(this.get("userName"));
      if (userName === "") {
        this.set("userNameErrorMessage", "Please enter your username.");
        return;
      }

      password = trim(this.get("password"));
      if (password === "") {
        this.set("passwordErrorMessage", "Please enter your password.");
        return;
      }

      jQuery.post("/authenticate", JSON.stringify({ userName, password })).then(() => {
        this.sendAction();
      }, () => {
        this.set("authenticationErrorMessage", "There was an error authenticating your account.");
      });
    }
  }
});
