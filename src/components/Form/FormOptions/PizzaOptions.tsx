import React from 'react';
import { Field } from 'redux-form';
import renderField from '../FormMaterials/Field';

const PizzaOptions = () => {
    return (
        <>
            <Field styles="pizza" name="no_of_slices" component={renderField} label="Number of slices" type="number" value="no_of_slices" />
            <Field styles="pizza" name="diameter" component={renderField} label="Diameter" type="number" value="diameter" step="0.01" />
        </>
    );
}

export default PizzaOptions;
