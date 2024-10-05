import Model, { attr, belongsTo } from '@ember-data/model';

export default class PersoonModel extends Model {
  @attr achternaam;
  @attr alternatieveNaam;
  @attr gebruikteVoornaam;
  @attr uri;
  @attr('date') modified;

  @belongsTo('geboorte', {
    async: true,
    inverse: null,
  })
  geboorte;

  @belongsTo('identificator', {
    async: true,
    inverse: null,
  })
  identificator;

  @belongsTo('geslacht-code', {
    async: true,
    inverse: null,
  })
  geslacht;

  get naam() {
    return `${this.gebruikteVoornaam} ${this.achternaam}`;
  }
}
