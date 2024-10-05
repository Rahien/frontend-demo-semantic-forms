import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class PersonsIndexController extends Controller {
  @tracked page = 0;
  @tracked size = 20;

  queryParams = ['page', 'size'];
}
