import { module, test } from 'qunit';
import { setupTest } from 'frontend-demo-semantic-forms/tests/helpers';

module('Unit | Controller | persons/edit', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:persons/edit');
    assert.ok(controller);
  });
});
