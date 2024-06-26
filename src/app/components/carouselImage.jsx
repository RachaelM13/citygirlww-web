import React from "react";
import Image from "next/image";

const CarouselImage = ({ src }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image src={src} alt="Carousel Image" layout="fill" objectFit="cover" />
    </div>
  );
};

export default CarouselImage;
