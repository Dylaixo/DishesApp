import { DataValues, DataErrors } from "./interfaces";
import { SubmissionError } from "redux-form";

//Function clearing unchecked but filled input fields
const clearFields = (clickedItem: string, props: any) => {
  if (clickedItem !== 'pizza') {
    props.change('no_of_slices', '');
    props.change('diameter', '');
  }
  if (clickedItem !== 'soup') {
    props.change('spiciness_scale', '');
  }
  if (clickedItem !== 'sandwich') {
    props.change('slices_of_bread', '');
  }
};

export const validateData = (data: DataValues) => {
  const errors: DataErrors = {};
  const nameRegex = /^[a-zA-Z]+$/;
  //Name of dish validation
  if (!data.name) {
    errors.name = 'First Name is required';
  } else if (!nameRegex.test(data.name)) {
    errors.name = ' Name must contain only letters'
  } else if (data.name.length < 3) {
    errors.name = 'Name must have at least 3 characters'
  }

  //Name of dish validation
  if (!data.type) {
    errors.type = 'Choose one option';
  }
  if (!data.spiciness_scale && data.type === 'soup') {
    errors.spiciness_scale = 'Spiciness scale field is required';
  }
  if (!data.slices_of_bread && data.type === 'sandwich') {
    errors.slices_of_bread = 'Slices of bread field is required';
  }
  if (data.type === 'pizza' && !data.no_of_slices) {
    errors.no_of_slices = 'Number of slices is required';
  }
  if (!data.type) {
    errors.type = 'Choose one option';
  }
  if (!data.preparation_time) {
    errors.preparation_time = 'Preparation time is required';
  }
  if (data.type === 'pizza' && !data.diameter) {
    errors.diameter = 'Diameter is required';
  }
  if (data.type === 'pizza' && data.diameter && data.diameter.toString().split('.')[1]?.length > 2) {
    errors.diameter = 'Preparation time must have at most 2 decimal places';
  }
  if (Object.keys(errors).length > 0) {
    throw new SubmissionError(errors);
  }
};

export default clearFields;