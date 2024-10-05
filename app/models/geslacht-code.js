import Model, { attr } from '@ember-data/model';

export default class GeslachtCodeModel extends Model {
  @attr uri;
  @attr label;
}
