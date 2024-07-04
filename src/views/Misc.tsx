import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function Misc() {
  return (
    <>
      <Heading headingText="Where it can be used?" showLine={true} />
      <Paragraph content="This package is useful in every project where developers work with environment variables and need to load them from different files based on the project environment." />

      <Heading headingText="Availability" showLine={true} />
      <Paragraph
        content="This package is hoised live on npmjs official web site. You can download it from there as well."
        formatting="mb-3"
      />
    </>
  );
}

export default Misc;
