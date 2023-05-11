import { Dispatch } from "react";
import { SubmissionError } from "redux-form";
import { validateData } from "./validationFunc";
import { DataValues } from "./interfaces";
import axios from "axios";
import moment from 'moment';

//Formating data to send into server
function formatValues(values: any) {
  const timeToSend = moment(values.preparation_time, 'HH:mm').format('HH:mm:ss');
  const scaledSpiceLevel = Math.round(parseInt(values.spiciness_scale) * 0.1);
  return {
    ...values,
    spiciness_scale: scaledSpiceLevel,
    preparation_time: timeToSend
  };
}

//submit handle
let handleSubmit = (values: DataValues) => {
  validateData(values)
  const dataToSend = formatValues(values)
  axios.post('https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/', dataToSend)
    .then(response => {
      console.log('Sukces');
      console.log(response.data);
    })
    .catch(error => {
      console.log('Błąd');
      if (error.response) {
        console.log(error.response.data);
        throw new SubmissionError(error.response.data);
      } else {
        console.log(error);
        throw new SubmissionError({ _error: 'Wystąpił nieznany błąd' });
      }
    });
};


export default handleSubmit;