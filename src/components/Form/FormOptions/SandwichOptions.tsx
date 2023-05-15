import React from 'react';
import { Field } from 'redux-form';
import renderField from '../FormMaterials/Field';

const SandwichOptions = () => {
    return (
        <>
            <Field styles="sandwich" name="slices_of_bread" component={renderField} label="Number of bread slices" type="number" value="slices_of_bread" />
        </>
    );
}

export default SandwichOptions;
