import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { cell } from 'ember-resources';
import { service } from '@ember/service';

export default class PersonsEditController extends Controller {
  @tracked initialFormTtl = cell('');
  @tracked restoring = false;
  @service router;

  @action
  onRestore(_historicalInstance) {
    this.initialFormTtl.current = null; // TODO wait... but we get a historical instance from somewhere? maybe do something with it?
    this.restoring = true;
  }

  @action
  onSave() {
    this.restoring = false;
    this.router.transitionTo('persons');
  }
  @action
  onCancel() {
    this.router.transitionTo('persons');
  }
}
