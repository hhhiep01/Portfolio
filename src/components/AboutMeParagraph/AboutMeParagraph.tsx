import React from "react";

interface ParagraphProps {
  text: string;
}

const AboutMeParagraph: React.FC<ParagraphProps> = ({ text }) => {
  return <p>{text}</p>;
};

export default AboutMeParagraph;
