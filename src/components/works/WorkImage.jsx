import React from "react";
import firstImage from "../../assets/images/workpageImage/firstImage.jpg";
import secondImage from "../../assets/images/workpageImage/secondImage.jpg";
import thirdImage from "../../assets/images/workpageImage/thirdImage.jpg";
import fourthImage from "../../assets/images/workpageImage/fourthImage.jpg";

const images = [firstImage, secondImage, thirdImage, fourthImage];

const WorkImage = () => {
  return (
    <section className=" w-full flex flex-col gap-20">
      {images.map((img, index) => (
        <div key={index} className="">
          <img
            src={img}
            alt={`Work image ${index + 1}`}
            className="w-full aspect-[16/8] object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default WorkImage;
