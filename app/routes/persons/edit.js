import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersonsEditRoute extends Route {
  @service store;
  async model(params) {
    const form = null; // TODO this can't be right? there must be some way of getting the form?
    return {
      id: params.person_id,
      form,
    };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    // TODO why would you want to specify this? Are there any secrets here?
  }
}
