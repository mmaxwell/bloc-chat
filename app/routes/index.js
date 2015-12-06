import Ember from "ember";

export default Ember.Route.extend({
  model() {
    if (this.get("session.isLoggedIn")) {
      return this.store.findAll("room");
    } else {
      this._super(...arguments);
    }
  },
  actions: {
    userAuthenticated() {
      console.log("User authenticated from the index route.");
    }
  }
});
