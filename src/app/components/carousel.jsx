"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./carouselImage.jsx";

export default function CarouselHomePage() {
  return (
    <Carousel fade>
      <Carousel.Item interval={4000}>
        <ExampleCarouselImage src="/CGWWgroup1.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <ExampleCarouselImage src="/CGWWgroup1.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <ExampleCarouselImage src="/CGWWgroup1.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
