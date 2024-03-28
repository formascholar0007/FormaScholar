import React from "react";
import WhychooseUs from "../assets/whychooseus.svg";

const WhyChooseUsSection = () => {
  return (
    <section className="container mx-auto px-4 lg:py-12 font-Alice">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/ h-[300px] md:h-full lg:mb-0">
          <img
            src={WhychooseUs}
            alt="Why Choose Us"
            className="w-full lg:h-[440px] h-[300px]"
          />
        </div>
        <div className="lg:w-1/2 lg:px-8 px-2">
          <div className="text-start">
            <h2 className="text-3xl font-bold text-[#009c86] mb-4 lg:mb-6">
              Why FormaScholar? Here's Why!
            </h2>
            <p className="text-lg text-gray-700 mb-16 lg:mb-6">
              We offer a carefully curated sequence of chapters, enabling
              you to effortlessly find and dive into any topic. Each chapter is
              meticulously explained in a step-by-step format, ensuring an
              immersive and seamless learning experience.
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
