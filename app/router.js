import EmberRouter from '@ember/routing/router';
import config from 'frontend-demo-semantic-forms/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('switch-login');
  this.route('mock-login');

  this.route('auth', { path: '/authorization' }, function () {
    this.route('callback');
    this.route('login');
    this.route('logout');
    this.route('switch');
  });
  this.route('persons', function () {
    this.route('new');
    this.route('edit', { path: '/:person_id/edit' });
  });
});
