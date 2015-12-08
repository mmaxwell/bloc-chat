import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    userAuthenticated(information) {
      this.get("session").setProperties(information);
      this.routeTo("index");
    }
  }
});
