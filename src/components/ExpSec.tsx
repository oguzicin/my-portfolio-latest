import React, { useEffect, useRef, useState } from "react";
import Headers from "./Headers";
import HeaderUnderline from "./HeaderUnderline";
import ExpCard from "./ExpCard";

const ExpSec = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

const experienceData = [

  {
    heading: "Bluesense AI Inc.",
    text: {
      header: "AI Engineer Intern @ <span class='text-[#64ffda]'>Bluesense</span>",
      description: "Conducted research and development on acne detection models using object detection algorithms such as YOLO and Faster R-CNN. Integrated MediaPipe FaceMesh to segment facial regions (forehead, cheeks, chin, etc.) for region-based analysis. Preprocessed COCO-format datasets, applied data augmentation, and evaluated models using metrics. Designed a pipeline for regional interpretation to assist dermatological assessment.",
    },
  },
    {
    heading: "Altınay Robotic Tech.",
    text: {
      header: "Software Developer Intern @ <span class='text-[#64ffda]'>Altınay Robotic</span>",
      description: "Practiced React framework with typescript. I contributed to the design and implementation of a user interface for robotic systems.",
    },
  },
];

  return (
    <section ref={sectionRef}>
      <div
        className={` flex flex-col w-[65vw] p-6 justify-between mb-12 mt-16 transition-all duration-[2s] ease-out custom-sm:w-[90vw] custom-xs:p-0 ${
          isVisible
            ? "opacity-100 filter blur-0 translate-y-0"
            : "opacity-0 filter blur-[2px] translate-y-[35%]"
        }`}
      >
        <div className="">
          <Headers heading={"/ experience"} />
          <HeaderUnderline />
        </div>
        <div>
          {/* Burada deneyim verilerini ExpCard'a geçiyoruz */}
          <ExpCard experience={experienceData} />
        </div>
      </div>
    </section>
  );
};

export default ExpSec;
