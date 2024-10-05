import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { cell } from 'ember-resources';

export default class PersonsEditRoute extends Route {
  @service store;
  @service semanticFormRepository;
  async model(params) {
    let form = await this.semanticFormRepository.getFormDefinition('person');
    return {
      id: params.person_id,
      form,
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('restoring', false);
    controller.set('initialFormTtl', cell(''));
  }
}
