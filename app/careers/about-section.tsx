"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./about.module.css";

import StaticImage from "@/components/static-image";

import scrumTraining from "@/public/images/scrum-training.webp";
import scrumTrainingFallback from "@/public/images/scrum-training.jpg";

import hiveklimb from "@/public/images/hiveklimb.webp";
import hiveklimbFallback from "@/public/images/hiveklimb.jpg";

import remoteTeam from "@/public/images/remote-team.webp";
import remoteTeamFallback from "@/public/images/remote-team.jpg";

interface ImageItemProps {
  img: React.ReactNode;
  index: number;
  myRef: React.RefObject<HTMLDivElement>;
}

interface ItemProps {
  title: string;
  description: string;
  index: number;
}

const AboutSection = () => {
  // initial state when page is loaded, default to the second tab (index starts from 0)
  const [activeTab, setActiveTab] = useState<number>(1);
  const [prevTab, setPrevTab] = useState<number>(1);

  // initialize imgRefs using useRef to ensure it persists across renders
  const imgRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
    React.createRef<HTMLDivElement>(),
  ]);

  useEffect(() => {
    const prevImgRef = imgRefs.current[prevTab].current;
    const activeImgRef = imgRefs.current[activeTab].current;

    // initial state when page is loaded, activeTab = prevTab = 1, simply display the second image
    if (activeImgRef != null && prevImgRef === activeImgRef) {
      activeImgRef.style.position = "relative";
      activeImgRef.style.visibility = "visible";
      activeImgRef.style.opacity = "1";
      return;
    }

    if (prevImgRef) {
      // start fading out the previous image
      prevImgRef.style.position = "relative";
      prevImgRef.style.visibility = "visible";
      prevImgRef.style.opacity = "1";

      requestAnimationFrame(() => {
        if (prevImgRef) {
          prevImgRef.style.opacity = "0";
        }
      });

      setTimeout(() => {
        // hide the previous image after the fading out animation is done
        if (prevImgRef) {
          prevImgRef.style.position = "absolute";
          prevImgRef.style.visibility = "hidden";
        }

        requestAnimationFrame(() => {
          // start fading in the active image
          if (activeImgRef) {
            activeImgRef.style.opacity = "1";
            activeImgRef.style.position = "relative";
            activeImgRef.style.visibility = "visible";
          }
        });
      }, 400); // match with CSS time: transition: opacity 400ms ease, visibility 400ms ease;
    }
  }, [activeTab, prevTab]);

  const handleTabClick = (index: number) => {
    if (index === activeTab) return;

    setPrevTab(activeTab);
    setActiveTab(index);
  };

  const Item = ({ title, description, index }: ItemProps) => {
    const style = activeTab === index ? { borderLeftColor: "#000" } : {};

    return (
      <a
        key={index}
        className={styles.about_tab_link}
        style={style}
        onClick={() => handleTabClick(index)}
      >
        <div className="margin-bottom margin-xsmall">
          <h2 className="heading-style-h4">{title}</h2>
        </div>
        <p>{description}</p>
      </a>
    );
  };

  const ImageItem = ({ img, index, myRef }: ImageItemProps) => {
    return (
      <div key={index} ref={myRef} className={styles.w_tab_pane}>
        <div>{img}</div>
      </div>
    );
  };

  return (
    <section className="about-section">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className={`about_component ${styles.w_tabs}`}>
              <div className={`about_tabs-menu ${styles.w_tab_menu}`}>
                <Item
                  title="Improve and grow with us."
                  description="In our constantly evolving industry, it's crucial to continually develop our skills and knowledge."
                  index={0}
                />
                <Item
                  title="We get things done."
                  description="We have a propensity to ship and are continually focused on delivering results for our clients."
                  index={1}
                />
                <Item
                  title="Be part of a remote culture."
                  description="We're a remote-first team who work with clients spread across the globe."
                  index={2}
                />
              </div>

              <div className={styles.w_tab_content}>
                <ImageItem
                  index={0}
                  myRef={imgRefs.current[0]}
                  img={
                    <StaticImage
                      src={scrumTraining}
                      srcfallback={scrumTrainingFallback}
                      sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                      alt="Scrum training"
                      className={styles.tab_image}
                    />
                  }
                />
                <ImageItem
                  index={1}
                  myRef={imgRefs.current[1]}
                  img={
                    <StaticImage
                      src={hiveklimb}
                      srcfallback={hiveklimbFallback}
                      sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                      alt="A Hivekind employee wall climbing"
                      className={styles.tab_image}
                    />
                  }
                />
                <ImageItem
                  index={2}
                  myRef={imgRefs.current[2]}
                  img={
                    <StaticImage
                      src={remoteTeam}
                      srcfallback={remoteTeamFallback}
                      sizes="(max-width: 767px) 90vw, (max-width: 991px) 43vw, 42vw"
                      alt="Remote team"
                      className={styles.tab_image}
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
