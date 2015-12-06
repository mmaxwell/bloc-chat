import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    userAuthenticated() {
      console.log("User authenticated from login route");
    }
  }
});
