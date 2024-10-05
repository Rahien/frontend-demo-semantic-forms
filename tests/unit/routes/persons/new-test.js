import { module, test } from 'qunit';
import { setupTest } from 'frontend-demo-semantic-forms/tests/helpers';

module('Unit | Route | persons/new', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:persons/new');
    assert.ok(route);
  });
});
