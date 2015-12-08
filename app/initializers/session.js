import Ember from "ember";

export function initialize(application) {
  let jQuery = Ember.$,
    Session;

  Session = Ember.Object.extend({
    init() {
      let userInformation;

      this._super(...arguments);

      userInformation = jQuery.cookie("user");
      if (userInformation !== undefined) {
        this.setProperties(JSON.parse(userInformation));
      }
    },

    isLoggedIn: Ember.computed("token", "userName", function () {
      return this.get("token") !== undefined && this.get("userName") !== undefined;
    }),

    updateCookies: Ember.observer("token", "userName", function () {
      let userName = this.get("userName"),
        token = this.get("token");

      jQuery.cookie("user", JSON.stringify({ userName, token }));
    }),

    logout() {
      jQuery.removeCookie("user");
      this.setProperties({
        userName: undefined,
        token: undefined
      });
    }
  });

  application.register("session:main", Session);
  application.injection("route", "session", "session:main");
  application.injection("component", "session", "session:main");
}

export default {
  name: "session",
  initialize
};
