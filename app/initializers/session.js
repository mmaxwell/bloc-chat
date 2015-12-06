import Ember from "ember";

export function initialize(application) {
  let jQuery = Ember.$;

  let Session = Ember.Object.extend({
    init() {
      this._super(...arguments);

      let userInformation = jQuery.cookie("user");

      if (userInformation) {
        this.setProperties(JSON.parse(userInformation));
      }
    },

    isLoggedIn: Ember.computed("userToken", function () {
      return this.get("userToken") !== undefined;
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
