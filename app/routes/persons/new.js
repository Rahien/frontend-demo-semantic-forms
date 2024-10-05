import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersonsNewRoute extends Route {
  @service semanticFormRepository;

  async model() {
    const form = await this.semanticFormRepository.getFormDefinition('person');

    return {
      form,
    };
  }
}
