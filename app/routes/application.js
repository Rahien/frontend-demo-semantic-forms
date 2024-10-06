import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;
  beforeModel() {
    // TODO what do they want us to do here? Something setupy?
  }

  afterModel() {
    if (this.router.location.location.pathname.length < 2) {
      this.router.transitionTo('persons');
    }
  }
}
