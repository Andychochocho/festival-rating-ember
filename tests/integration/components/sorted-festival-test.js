import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sorted-festival', 'Integration | Component | sorted festival', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sorted-festival}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sorted-festival}}
      template block text
    {{/sorted-festival}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
