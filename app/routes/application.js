import Route from '@ember/routing/route';
import { registerCustomFormFields } from '../utils/register-form-fields';
import { registerCustomValidations } from '../utils/form-validations/register';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;
  beforeModel() {
    registerCustomFormFields();
    registerCustomValidations();
  }

  afterModel() {
    if (this.router.location.location.pathname.length < 2) {
      this.router.transitionTo('persons');
    }
  }
}
