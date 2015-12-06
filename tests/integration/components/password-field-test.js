import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('password-field', 'Integration | Component | password field', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{password-field}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#password-field}}
      template block text
    {{/password-field}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
