import Ember from "ember";

export default Ember.Route.extend({
  model() {
    if (this.get("session.isLoggedIn")) {
      return {
        rooms: this.store.findAll("room"),
        isLoggedIn: true
      };
    } else {
      {
        isLoggedIn: false
      }
    }
  },
  actions: {
    userAuthenticated(information) {
      this.get("session").setProperties(information);
      this.refresh();
    }
  }
});
