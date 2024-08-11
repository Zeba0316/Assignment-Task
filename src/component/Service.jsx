import React, { useState, useRef } from "react";
import "./service.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Card from "./Card";

const Service = () => {
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const categoryContainerRef = useRef(null);
  const serviceRefs = useRef([]);

  const categories = [
    "Featured",
    "Haircutting",
    "Styling",
    "Color Services",
    "Natural Hairstyling",
    "Relaxer/Texturizer/Keratin",
    "Extension, Installs and Wig",
    "Treatments",
  ];

  const FeaturedData = {
    title: "Featured",
    data: [
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Deep condition (Standard)",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "This service includes a deep conditioning treatment to revitalize your hair.",
      },
      {
        title: "Blow Dry/Silk Press",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "Includes a thorough wash, blow dry, and styling with a silk press.",
      },
    ],
  };

  const HaircutData = {
    title: "Haircutting",
    data: [
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Deep condition (Standard)",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "This service includes a deep conditioning treatment to revitalize your hair.",
      },
      {
        title: "Blow Dry/Silk Press",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "Includes a thorough wash, blow dry, and styling with a silk press.",
      },
    ],
  };

  const StylingData = {
    title: "Styling",
    data: [
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Deep condition (Standard)",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "This service includes a deep conditioning treatment to revitalize your hair.",
      },
      {
        title: "Blow Dry/Silk Press",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "Includes a thorough wash, blow dry, and styling with a silk press.",
      },
    ],
  };

  const colorServiceData = {
    title: "Color Service",
    data: [
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Haircut",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "We do not have pricing for trims. All haircuts are full services that include a wash and style; either a wash and go or a silk press. Specify with stylist upon arrival.",
      },
      {
        title: "Deep condition (Standard)",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "This service includes a deep conditioning treatment to revitalize your hair.",
      },
      {
        title: "Blow Dry/Silk Press",
        time: "1hr,30 mins -2 hrs",
        amount: "$25",
        description:
          "Includes a thorough wash, blow dry, and styling with a silk press.",
      },
    ],
  };

  const dataArr = [FeaturedData, HaircutData, StylingData, colorServiceData];

  const handleScrollLeft = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (categoryContainerRef.current) {
      categoryContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handleCategoryClick = (category, index) => {
    setSelectedCategory(category);
    if (categoryContainerRef.current) {
      const categoryElement = categoryContainerRef.current.children[index];
      const containerRect = categoryContainerRef.current.getBoundingClientRect();
      const categoryRect = categoryElement.getBoundingClientRect();

      // Calculate the amount to scroll by
      const scrollOffset = categoryRect.left - containerRect.left;
      categoryContainerRef.current.scrollBy({
        left:
          scrollOffset -
          containerRect.width / 2 +
          categoryElement.offsetWidth / 2,
        behavior: "smooth",
      });
    }

    // Scroll to the selected service section
    if (serviceRefs.current[index]) {
      serviceRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="service">
      <div className="service-1">
        <div className="service-1-category" ref={categoryContainerRef}>
          {categories.map((category, index) => (
            <p
              key={index}
              onClick={() => handleCategoryClick(category, index)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </p>
          ))}
        </div>
        <div className="service-1-btn">
          <div className="btn" onClick={handleScrollLeft}>
            <FaAngleLeft size={25} />
          </div>
          <div className="btn" onClick={handleScrollRight}>
            <FaAngleRight size={25} />
          </div>
        </div>
      </div>
      <div className="service-2">
        {dataArr.map((data, index) => (
          <div className="service-2-data" key={index}   ref={(el) => (serviceRefs.current[index] = el)}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                fontFamily: "customFont",
                margin: "1.5rem 0",
              }}
            >
              {data.title}
            </p>
            {data.data.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                time={item.time}
                amount={item.amount}
                description={item.description}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
