"use client";
import React, { useState } from "react";
import "@/styles/accordion.css";

const AccordionItem = ({
  index,
  item,
  isActive,
  totalItems,
  onClick,
}: {
  index: number;
  item: { title: string; heading: string; content: string };
  isActive: boolean;
  totalItems: number;
  onClick: () => void;
}) => (
  <div
    className={`accordion-item ${isActive ? "active" : ""} ${
      index === 0 ? "first-item" : ""
    } ${index === totalItems - 1 ? "last-item" : ""}`}
    onClick={onClick}
  >
    <div className="accordion-title">{item.title}</div>
    <div className="accordion-content">
      <div className="content-heading">{item.heading}</div>
      <div className="content-description">{item.content}</div>
    </div>
  </div>
);

const AiProcessAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "01",
      heading: "First meeting",
      content:
        "In our first meeting, we’ll dive into your ideas, get a clear understanding of your goals, and start shaping the vision for your AI project. This helps us get on the same page and figure out what really matters to you. By the end, we’ll have a strong sense of where we’re headed and what needs our focus moving forward.",
    },
    {
      title: "02",
      heading: "Discovery",
      content:
        "During the Discovery phase, we take a deep dive into your project’s requirements, analyzing any challenges you might face and spotting potential opportunities. This is where we really dig into the details to make sure we understand your needs from every angle. By thoroughly exploring all aspects of your project, we can ensure that nothing is missed and that we have a clear path forward.",
    },
    {
      title: "03",
      heading: "Solutions",
      content:
        "In the Solutions phase, we brainstorm and design AI strategies that are customized to fit your unique goals. This is where creativity meets precision, as we come up with innovative approaches that are not only effective but also efficient. Our goal is to offer you clear, actionable solutions that set you up for success.",
    },
    {
      title: "04",
      heading: "Proposal",
      content:
        "In the Proposal phase, we present a detailed plan that covers everything—the selected AI solution, timeline, resources, and costs. This is where we make sure you have a clear understanding of how everything will come together. Our goal is to ensure full transparency and alignment, so you feel confident in the plan before we move forward.",
    },
    {
      title: "05",
      heading: "Kick-off",
      content:
        "In the Kick-off phase, we officially launch the project, getting our team and resources in sync to start executing the plan. We set clear goals, establish timelines, and make sure communication channels are open and ready. This is where everything starts coming to life, and we work together to bring the vision into reality.",
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          item={item}
          totalItems={items.length}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default AiProcessAccordion;
