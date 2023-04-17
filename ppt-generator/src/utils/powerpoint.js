import PptxGenJS from 'pptxgenjs';

function generatePowerpoint(title, slides) {
  // create a new instance of PptxGenJS
  const pptx = new PptxGenJS();

  // set the title of the presentation
  pptx.title = title;

  slides.forEach((slide) => {
    const content = slide.props.content;
    const formattedContent = content.toString().replace(/\./g, ',\n');
    const section = slide.props.section.name;
    const pptxSlide = pptx.addSlide();
    pptxSlide.background = { color: "#5053a3" };
    pptxSlide.addText(section, { x: 0.5, y: 0.5, align: 'center' ,fontSize: 35, color: "F1F1F1"  });
    pptxSlide.addText(formattedContent, { x: 0.5, y: 2.5, align: 'center', fontSize: 30, color: "F1F1F1" });
  });

  return pptx.write('blob');
}

export default generatePowerpoint
