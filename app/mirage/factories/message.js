import Mirage, { faker } from "ember-cli-mirage";

let past = (new Date()).setMonth((new Date()).getMonth() - 1);
// 1 ms in a second * 60 seconds in a minute * 60 minutes in an hour * 24 hours in a day * 30 days
let timeDifference = 1000 * 60 * 60 * 24 * 30;

export default Mirage.Factory.extend({
  author() {
    return faker.list.random("mmaxwell", "jdurden", "kschmitz", "jphillips")();
  },
  sent() {
    return Math.floor(Math.random() * timeDifference) + past;
  },
  text() {
    return faker.lorem.sentence(Math.floor(Math.random() * 10) + 1);
  },
  room: null
});
