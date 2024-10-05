import InputFieldComponent from '@lblod/ember-submission-form-fields/components/rdf-input-fields/input-field';

import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { guidFor } from '@ember/object/internals';

import {
  updateSimpleFormValue,
  triplesForPath,
} from '@lblod/submission-form-helpers';

export default class RDFRijksRegisterInput extends InputFieldComponent {
  inputId = 'rrn-' + guidFor(this);

  @service store;
  @tracked rijksregisternummer;

  constructor() {
    super(...arguments);
    this.loadProvidedValue();
  }

  async loadProvidedValue() {
    const matches = triplesForPath(this.storeOptions);

    if (matches.values.length > 0) {
      this.rijksregisternummer = matches.values[0].value;
    }
  }

  replaceSingleFormValue = (storeOptions, newValue) => {
    // Cleanup old value(s) in the store
    const matches = triplesForPath(storeOptions, true).values;
    matches.forEach((m) => updateSimpleFormValue(storeOptions, undefined, m));

    if (![null, undefined].find((value) => value === newValue)) {
      updateSimpleFormValue(storeOptions, newValue);
    }
  };

  @action
  async updateValue(event) {
    if (event && typeof event.preventDefault === 'function') {
      event.preventDefault();
    }
    const rijksregisternummer = event.target.value.trim();
    this.rijksregisternummer = rijksregisternummer;

    this.replaceSingleFormValue(
      this.storeOptions,
      rijksregisternummer ? rijksregisternummer : null
    );

    this.updateValidations();

    this.hasBeenFocused = true;
  }
}
