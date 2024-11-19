"use client";
import React, { useEffect, useState, useCallback } from "react";
import TestimonialSection from "./testimonial-section";
import "@/styles/testimonial-carousel.css";

import RightArrowSvg from "./svgs/right-arrow-svg";
import LeftArrowSVG from "./svgs/left-arrow-svg";

export type TestimonialCarouselProps = {
  bgColorClass?: string;
  items: [
    {
      id?: string;
      quote: string;
      name: string;
      title: string;
      image: string;
    }
  ];
};

export default function TestimonialCarousel({
  items,
  bgColorClass = "",
}: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  // Memoize the updateCarousel function
  const updateCarousel = useCallback(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        activeIndex * 100
      }%)`;
    }
  }, [activeIndex]);

  useEffect(() => {
    updateCarousel();
  }, [updateCarousel]);

  useEffect(() => {
    const element = carouselRef.current;
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      endX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      const diffX = startX - endX;
      const diffY = startY - endY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    if (element) {
      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchmove", handleTouchMove);
      element.addEventListener("touchend", handleTouchEnd);

      return () => {
        element.removeEventListener("touchstart", handleTouchStart);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [handleNext, handlePrev]);

  return (
    <div className={`testimonial-carousel ${bgColorClass}`}>
      {/* Testimonials */}
      <div className="testimonials" ref={carouselRef}>
        {items.map((item, index) => (
          <div key={index} className="testimonial-item">
            <TestimonialSection
              quote={item.quote}
              name={item.name}
              title={item.title}
              image={item.image}
              bgColorClass={bgColorClass}
              isCarousel={true}
            />
          </div>
        ))}
      </div>
      {/* Navigation Controls */}
      <div className="navigation-controls">
        <button
          onClick={handlePrev}
          className={`testimonials_arrow ${bgColorClass}`}
        >
          <div className="testimonials_arrow-icon">
            <LeftArrowSVG />
          </div>
        </button>

        <button
          onClick={handleNext}
          className={`testimonials_arrow ${bgColorClass}`}
        >
          <div className="testimonials_arrow-icon">
            <RightArrowSvg />
          </div>
        </button>
      </div>
      {/* Carousel Buttons */}
      <div className="carousel-buttons">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={index === activeIndex ? "active-button" : ""}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
