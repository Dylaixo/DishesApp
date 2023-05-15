import { TextField } from '@mui/material';
import React, { FC } from 'react';
import { RenderFieldProps } from '../interfaces';
import FormStyles from '../../../modules/Form.module.scss';
import { useContentStyles } from './MaterialStyles';

const Field: FC<RenderFieldProps> = ({ sticky, checked, input, type, step, pattern, meta: { touched, error }, label, min, max }) => {

  //Custom classes for Material UI
  const classes = useContentStyles();

  //Defining diffrent class name for components
  let inputProps = {};
  if (type === 'radio') {
    inputProps = {
      className: FormStyles.dot,
    };
  } else if (sticky) {
    inputProps = {
      className: FormStyles.prep,
    };
  }

  return (
    <div>
      {sticky ? (
        <TextField
          label={label}
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          type={type}
          step={step}
          pattern={pattern}
          checked={checked}
          min={min}
          max={max}
          InputLabelProps={{
            shrink: true,
            children: label,
          }}
          inputProps={inputProps}
        />
      ) : (
        <TextField
          className={classes.field}
          label={label}
          floatingLabelText={label}
          errorText={touched && error}
          {...input}
          type={type}
          step={step}
          pattern={pattern}
          checked={checked}
          min={min}
          max={max}
          inputProps={inputProps}
        />
      )}
      {touched && error ? <p className={FormStyles.error}>{error}</p> : null}
    </div>
  );
};

export default Field;
