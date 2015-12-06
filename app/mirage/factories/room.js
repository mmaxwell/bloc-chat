import Mirage, { faker } from "ember-cli-mirage";

export default Mirage.Factory.extend({
  title() {
    return faker.lorem.words(3).join(" ");
  },
  messages: []
});
