import React from 'react';
import { Button } from 'primereact/button';
import { saveAs } from 'file-saver';
import generatePowerpoint from '../utils/powerpoint';

function DownloadButton(props) {
  const handleDownload = async () => {
    const slides = props.generateSlides();
    const blob = await generatePowerpoint("Himnos", slides);
    saveAs(blob, `"Himnos".pptx`);
  };

  return (
    <Button
      label="Descargar"
      className="card flex justify-content-center"
      onClick={handleDownload}
      disabled={!props.option || props.option.length === 0}
    />
  );
}


export default DownloadButton;
