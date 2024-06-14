import React from "react";
import Image from "next/image";

const ExampleCarouselImage = ({ src }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "450px" }}>
      <Image src={src} alt="Carousel Image" layout="fill" objectFit="cover" />
    </div>
  );
};

export default ExampleCarouselImage;
