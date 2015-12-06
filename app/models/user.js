import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  emailAddress: DS.attr(),
  password: DS.attr(),
  userName: DS.attr()
});
