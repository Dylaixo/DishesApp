import React, { useState } from 'react';
import { Field } from 'redux-form';
import renderField from '../FormMaterials/Field';
import { Slider } from '@material-ui/core';

const SoupOptions = () => {
  const [spiceLevel, setSpiceLevel] = useState('');

  function handleChangeRange(event: React.ChangeEvent<HTMLInputElement>) {
    let spice = parseInt(event.target.value) * 0.1;
    console.log(spice)
    switch (true) {
      case spice >= 0 && spice <= 3:
        console.log('od 0 do 30')
        setSpiceLevel('malo ostre');
        break;
      case spice > 3 && spice <= 7:
        console.log('od 30 do 70')
        setSpiceLevel('Troche ostre');
        break;
      case spice > 7 && spice <= 10:
        console.log('od 70 do 100')
        setSpiceLevel('ALE OSTRE');
        break;
      default:
        console.log('o')
    }
  }

  return (
    <>
      <Field sticky="true" onChange={handleChangeRange} name="spiciness_scale" component={renderField} label="Spiciness scale" type="range" value="spiciness_scale" min="0" max="10" />
      {spiceLevel && <p>{spiceLevel}</p>}
    </>
  );
}

export default SoupOptions;