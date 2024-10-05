import { registerFormFields } from '@lblod/ember-submission-form-fields';
import RdfInputFieldsConceptSchemeSelectorComponent from '../components/rdf-input-fields/concept-scheme-selector';
import RdfRijksRegisterInput from '../components/rdf-input-fields/rijksregister-input';

export const registerCustomFormFields = () => {
  registerFormFields([
    {
      displayType:
        'http://lblod.data.gift/display-types/conceptSchemeSelectorWithoutMeta',
      edit: RdfInputFieldsConceptSchemeSelectorComponent,
    },
    {
      displayType: 'http://lblod.data.gift/display-types/rijksregisterInput',
      edit: RdfRijksRegisterInput,
    },
  ]);
};
