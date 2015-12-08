import Ember from "ember";

export default Ember.Route.extend({
  beforeModel() {
    if (this.get("session.isLoggedIn")) {
      this.transitionTo("index");
    }
  },
  actions: {
    userAuthenticated(information) {
      this.get("session").setProperties(information);
      this.transitionTo("index");
    }
  }
});
