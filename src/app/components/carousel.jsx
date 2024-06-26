"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./carouselImage.jsx";

export default function CarouselHomePage() {
  return (
    <Carousel fade>
      <Carousel.Item interval={3000}>
        <CarouselImage
          src="/CGWWgroup1.jpg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <CarouselImage
          src="/CGWWgroup2.jpg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <CarouselImage
          src="/CGWWgroup6.jpg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Carousel.Item>
    </Carousel>
  );
}
