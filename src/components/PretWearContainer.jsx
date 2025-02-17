import React from "react";
import { Fade } from "react-awesome-reveal";

const PretWearContainer = () => {
  return (
    <>
    
      <div className="flex flex-col items-start justify-between gap-4 px-5 pb-8 md:flex-row md:items-center md:px-10 lg:px-20 pret-wear-card-container md:gap-0">
      <Fade direction="left" duration={1000} triggerOnce>
        <div className="pret-wear-text">
          <p className="font-bold heading">Pret Wear</p>
        </div>
        </Fade>

        <Fade direction="right" duration={1000} triggerOnce>
        <div className="overflow-hidden rounded-md pret-wear-img">
          <img
            src="./pret-wear-container-img.jpg"
            className="object-cover w-[400px] h-28"
            alt="Pret Wear"
          />
        </div>
        </Fade>
      </div>
      
    </>
  );
};

export default PretWearContainer;
