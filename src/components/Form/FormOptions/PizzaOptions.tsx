import React from 'react';
import { Field } from 'redux-form';
import renderField from '../FormMaterials/Field';

const PizzaOptions = () => {
    return (
        <>
            <Field name="no_of_slices" component={renderField} label="Number of slices" type="number" value="no_of_slices" />
            <Field name="diameter" component={renderField} label="Diameter" type="number" value="diameter" step="0.01" />
        </>
    );
}

export default PizzaOptions;
