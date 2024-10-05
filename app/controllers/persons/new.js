import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class PersonsNewController extends Controller {
  @service router;

  @action
  onCreate() {
    this.router.transitionTo('persons');
  }
  @action
  onCancel() {
    this.router.transitionTo('persons');
  }
}
