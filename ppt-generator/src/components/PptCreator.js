import React from "react";
import HimnoSelector from "./HimnoSelector"; 
import DownloadButton from "./DownloadButton";
import Slide from "./Slide";

function PptCreator () {

const [selectedOption, setSelectedOption] = React.useState(null);

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

const generateSlides = () => {
  const slides = [];

  console.log("selectedValue:", selectedOption);
  
  selectedOption.forEach((himno) => {
    const hymnSlides = Object.entries(himno.content);
    
    hymnSlides.forEach(([slideNumber, slideContent]) => {
      slides.push(
        <Slide
          key={`${himno.name}-${slideNumber}`}
          section={himno}
          number={slideNumber}
          content={slideContent}
          title={himno.name}
        />
      );
    });
  });

console.log("slides:", slides);
  
  return slides;

};

  return (
    <div className="Ppt-creator">
      <h1>Creador de Powerpoint</h1>
      <HimnoSelector onHimnoSelection={handleOptionSelect} />
      {selectedOption && (
        <DownloadButton option={selectedOption} generateSlides={() => generateSlides()} />
      )}
    </div>
  );
}

export default PptCreator;