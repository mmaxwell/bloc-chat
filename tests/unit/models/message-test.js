import { moduleForModel, test } from "ember-qunit";

moduleForModel("message", "Unit | Model | message", {
  // Specify the other units that are required for this test.
  needs: ["model:room"]
});

test("it exists", function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
