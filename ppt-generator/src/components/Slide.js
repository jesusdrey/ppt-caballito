import React from 'react';
import himnos from '../himnos.json';

function Slide(props) {
  const section = himnos[props.section];
  const slide = section && section[props.slide];

  if (!section || !slide) {
    return null;
  }

  return (
    <div>
      <h2>Section {props.section}, Slide {props.slide}</h2>
      <p>{slide}</p>
    </div>
  );
}

export default Slide;
