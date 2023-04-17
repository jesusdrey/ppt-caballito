import React, { useState } from 'react';
import { MultiSelect } from 'primereact/multiselect';
import himnos from '../himnos.json';

function HimnoSelector(props) {
  const [selectedValue, setSelectedValue] = useState('');

  console.log("props:", props);

  const handleChange = (event) => {
    setSelectedValue(event.value);
    props.onHimnoSelection(event.value);
  };

  return (
    <div className="p-field">
      <MultiSelect
        value={selectedValue}
        onChange={handleChange}
        options={himnos}
        optionLabel="name"
        display="chip"
        placeholder="Selecciona Himnos"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
      />
    </div>
  );
}

export default HimnoSelector;