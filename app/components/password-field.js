import Ember from "ember";

export default Ember.Component.extend({
  isPasswordShowing: true,
  password: undefined,
  inputType: Ember.computed("isPasswordShowing", function () {
    let isPasswordShowing = this.get("isPasswordShowing");

    if (isPasswordShowing) {
      return "text";
    } else {
      return "password";
    }
  }),
  actions: {
    togglePassword() {
      this.toggleProperty("isPasswordShowing");
    }
  }
});
