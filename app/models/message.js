import DS from "ember-data";

export default DS.Model.extend({
  author: DS.attr(),
  sent: DS.attr("date"),
  text: DS.attr(),
  room: DS.belongsTo("room")
});
