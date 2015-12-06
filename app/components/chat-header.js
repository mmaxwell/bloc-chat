import Ember from "ember";

export default Ember.Component.extend({
  isLoggedIn: Ember.computed("session.isLoggedIn", function() {
    return this.get("session.isLoggedIn");
  })
});
