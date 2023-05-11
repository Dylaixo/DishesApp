import { TextField } from '@mui/material';
import React, { FC } from 'react'
import { WrappedFieldMetaProps } from 'redux-form'

interface RenderFieldProps {
  input: any;
  meta: WrappedFieldMetaProps;
  label: string;
  type: string;
  pattern: string;
  step: number;
  checked: string;
  min: string;
  max: string;
  sticky: boolean;
}

const Field: FC<RenderFieldProps> = ({ sticky, checked, input, type, step, pattern, meta: { touched, error }, label, min, max }) => (
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
          children: label
        }}
      />
    ) : (
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
      />
    )}
    {touched && error ? <p className="error">{error}</p> : null}
  </div>
);

export default Field;
