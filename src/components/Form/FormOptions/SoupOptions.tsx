import React from 'react';
import { Field } from 'redux-form';
import renderField from '../FormMaterials/Field';
import { useDispatch, useSelector } from 'react-redux';
import { spiceActions } from '../../../store/spice-slice';

const SoupOptions = () => {
  //Defining states in component
  const spiceLv = useSelector((state: any) => state.spice.spiceLv);
  const showLv = useSelector((state: any) => state.spice.showLv)
  const dispatch = useDispatch();

  //Showing up the text about spiciness scale
  function handleChangeRange(event: React.ChangeEvent<HTMLInputElement>) {
    let spice = Math.round(parseInt(event.target.value) * 0.1);
    console.log(spice)
    dispatch(spiceActions.spiceLevel(spice))
    dispatch(spiceActions.showSpiceLevel())
  }

  return (
    <>
      <Field sticky="true" onChange={handleChangeRange} name="spiciness_scale" component={renderField} label="Spiciness scale" type="range" value="spiciness_scale" min="0" max="10" />
      {showLv ? <p>Your dish is {spiceLv}/10 spicy!</p> : null}
    </>
  );
}

export default SoupOptions;
