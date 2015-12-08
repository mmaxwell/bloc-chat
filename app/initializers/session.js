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

    })
  });

  application.register("session:main", Session);
  application.injection("route", "session", "session:main");
  application.injection("component", "session", "session:main");
}

export default {
  name: "session",
  initialize
};
