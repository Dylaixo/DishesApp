import React, { FC } from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import renderField from './FormMaterials/Field'
import { useDispatch, useSelector } from 'react-redux';
import { typeActions } from '../../store/type-slice';
import clearFields from './validationFunc';
import SandwichOptions from './FormOptions/SandwichOptions';
import SoupOptions from './FormOptions/SoupOptions';
import PizzaOptions from './FormOptions/PizzaOptions';
import { FormData } from './interfaces';
import handleSubmit from './SubmitHandler';
import { Button, DialogContent, DialogContentText } from '@mui/material';

const DisplayForm: FC<InjectedFormProps<FormData>> = (props) => {
  const { handleSubmit, error } = props;

  //Redux call
  const isClicked = useSelector((state: any) => state.type.isClicked)
  const type = useSelector((state: any) => state.type.type)
  const dispatch = useDispatch();

  //Changing input type radio
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let clickedItem = event.target.value;
    dispatch(typeActions.change({ type: event.target.value }))
    clearFields(clickedItem, props);
  }

  //Products options switch
  let options;
  switch (type) {
    case 'pizza':
      options = <PizzaOptions />;
      break;
    case 'soup':
      options = <SoupOptions />;
      break;
    case 'sandwich':
      options = <SandwichOptions />;
      break;
    default:
      options = null;
  }

  return (
    <DialogContent>
      <DialogContentText>
        Write your food informations!
      </DialogContentText>
      <form onSubmit={handleSubmit} >
        <Field name="name" error={error} label='Name of the dish' component={renderField} type="text" />
        <Field sticky="true" name="preparation_time" error={error} label='Preparation time' component={renderField} type="time" step="1" />
        <Field name="type" onChange={handleChange} component={renderField} label="Pizza" type="radio" value="pizza" />
        <Field name="type" onChange={handleChange} component={renderField} label="Soup" type="radio" value="soup" />
        <Field name="type" onChange={handleChange} component={renderField} label="Sandwich" type="radio" value="sandwich" />
        {isClicked ? options : null}
        <Button type='submit'>Submit</Button>
      </form>
    </DialogContent>
  )
}

export default reduxForm<FormData, {}>({
  form: 'dishes',
  onSubmit: handleSubmit
})(DisplayForm);
