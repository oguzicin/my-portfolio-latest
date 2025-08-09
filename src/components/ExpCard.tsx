  import React, { useState } from "react";


  type ExpDetail = {
    heading: string;
    text: {
      header: string;
      description: string;
    };
  };


  type ExpCardProps = {
    experience: ExpDetail[]; 
  };

  const ExpCard = ({ experience }: ExpCardProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleClick = (index: number) => {
      setActiveIndex(index);
    };

    return (
      <div className="flex flex-row gap-10">
        {/* Sol kısım: Başlıklar */}
        <div className="flex flex-col w-1/3">
          {experience.map((exp, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`cursor-pointer p-2 mb-4 text-lg font-semibold ${
                activeIndex === index
                  ? "text-[#64ffda] bg-gray-800"
                  : "text-gray-400 hover:text-[#64ffda]"
              }`}
            >
              {exp.heading}
            </div>
          ))}
        </div>

        {/* Sağ kısım: İçerik */}
        <div className="flex flex-col w-2/3">
          <div>

            <h3 className="text-xl font-bold text-gray-100 mb-4 text-left"
              dangerouslySetInnerHTML={{ __html: experience[activeIndex].text.header }}
            />

            <p className="text-gray-300 text-left">{experience[activeIndex].text.description}</p>
          </div>
        </div>
      </div>
    );
  };

  export default ExpCard;
