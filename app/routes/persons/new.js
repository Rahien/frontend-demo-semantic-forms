import Route from '@ember/routing/route';

export default class PersonsNewRoute extends Route {
  async model() {
    const form = null; // TODO this can't be right? there must be some way of getting the form?

    return {
      form,
    };
  }
}
