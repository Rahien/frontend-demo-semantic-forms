import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PersonsIndexRoute extends Route {
  @service store;
  @service session;

  queryParams = {
    page: { refreshModel: true },
    size: { refreshModel: true },
    sort: { refreshModel: true },
  };
  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
  model(params) {
    let queryParams = {
      sort: params.sort,
      page: {
        number: params.page,
        size: params.size,
      },
      include: ['geslacht', 'identificator', 'geboorte'].join(','),
    };

    return this.store.query('persoon', queryParams);
  }
}
