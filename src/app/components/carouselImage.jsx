"use client";
import React from "react";
import Image from "next/image";
import useMediaQuery from "./useMediaQuery";

const CarouselImage = ({ src }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const height = isMobile ? "300px" : "100vh";

  return (
    <div style={{ position: "relative", width: "100%", height: height }}>
      <Image src={src} alt="Carousel Image" layout="fill" objectFit="cover" />
    </div>
  );
};

export default CarouselImage;
