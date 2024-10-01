"use client";
import React, { useState } from "react";
import TestimonialSection from "./testimonial-section";
import "@/styles/testimonial-carousel.css";

import mitchGelber from "@/public/images/mitch-gelber.webp";
import mitchGelberFallback from "@/public/images/mitch-gelber.jpg";

import lindyLedohowski from "@/public/images/lindy-ledohowski.webp";
import lindyLedohowskiFallback from "@/public/images/lindy-ledohowski.jpg";

import jayasimhanMasilamani from "@/public/images/jayasimhan-masilamani.webp";
import jayasimhanMasilamaniFallback from "@/public/images/jayasimhan-masilamani.jpg";

import tonyJones from "@/public/images/tony-jones.webp";
import tonyJonesFallback from "@/public/images/tony-jones.jpeg";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import RightArrowSvg from "./svgs/right-arrow-svg";
import LeftArrowSVG from "./svgs/left-arrow-svg";

interface CarouselItem {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: StaticImport;
  imageFallback: StaticImport;
}

const TestimonialCarousel: React.FC = () => {
  const [items, setItems] = useState<CarouselItem[]>([
    {
      id: 1,
      quote:
        "They have very good, experienced developers. Great communications, very organized, very flexible and collaborative. Rebuilt a complex ad delivery engine to maximize performance.  New ad engine was delivered, very fast (10's of ms), functional, extendable, maintainable, and testable.",
      name: "Tony Jones",
      title: "Executive Director Engineering, Martindale-Avvo",
      image: tonyJones,
      imageFallback: tonyJonesFallback,
    },
    {
      id: 2,
      quote:
        "We needed a development team who we could work well with and that could scale up or down as our needs changed over time. Could we rely on Hivekind to be that team? They saw us from beta (2016) through an acquisition (2021), so I would have to say that, yes, they were the team for us!",
      name: "Dr Lindy Ledohowski",
      title: "Co-Founder & CEO, EssayJack",
      image: lindyLedohowski,
      imageFallback: lindyLedohowskiFallback,
    },
    {
      id: 3,
      quote:
        "The team is technically very capable, and has an effective process to undertake research and make recommendations. Their style responded very effectively to our idiosyncratic culture and needs. This was one of the better consulting engagements I've been associated with in many years.",
      name: "Charles Lynam",
      title: "Commercial Director, HosPortal",
      image: lindyLedohowski,
      imageFallback: lindyLedohowskiFallback,
    },
    {
      id: 4,
      quote:
        "They bring an ownership mindset to their projects and take pride in shipping. They follow a very well-defined development process and stick to it. They were good at assessing work, setting and meeting deadlines, and communicating priorities, roadblocks, and risks.",
      name: "Jayasimhan Masilamani",
      title: "VP of Technology, Nolo",
      image: jayasimhanMasilamani,
      imageFallback: jayasimhanMasilamaniFallback,
    },
    {
      id: 5,
      quote:
        "Hivekind's stated objective of establishing ongoing, collaborative relationships with its clients and undertaking an iterative, agile approach to developing products was exemplified beyond all reasonable expectations. They acted not simply as a vendor, but as a true partner in the strategic development and delivery of this project.",
      name: "Mitch Gelber",
      title: "CEO, Malaysia Green Building Council",
      image: mitchGelber,
      imageFallback: mitchGelberFallback,
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-carousel">
      {/* Testimonials */}
      <div className="testimonials">
        {items.map((item, index) => (
          <div
            key={index}
            className={`testimonial-item ${
              index === activeIndex ? "show-item" : "hide-item"
            }`}
          >
            <TestimonialSection
              quote={item.quote}
              name={item.name}
              title={item.title}
              image={item.image}
              imageFallback={item.imageFallback}
            />
          </div>
        ))}
      </div>
      {/* Navigation Controls */}
      <div className="navigation-controls">
        <button onClick={handlePrev} className="testimonials_arrow">
          <div className="testimonials_arrow-icon">
            <LeftArrowSVG />
          </div>
        </button>

        <button onClick={handleNext} className="testimonials_arrow">
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
};

export default TestimonialCarousel;