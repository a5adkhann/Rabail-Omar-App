import React from "react";
import { Fade } from "react-awesome-reveal";

const Choice = () => {
  return (
    <>
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="why-choose text-center py-8 w-[60vw] container mx-auto">
          <h6 className="py-3 text-2xl font-bold heading">
            Why Choose Rabail Omar?
          </h6>
          <p>
            Shopping for Eastern Wear Online in Pakistan has never been more
            convenient. At Rabail Omar, we understand the importance of quality,
            comfort, and style. That’s why we ensure every piece in our
            collection meets the highest standards. From the luxurious fabrics
            to the intricate embellishments, our dresses are made to not only
            look stunning but also to feel comfortable throughout the day.
          </p>
        </div>
      </Fade>

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="elevate-style text-center py-8 w-[60vw] container mx-auto">
          <h6 className="py-3 text-2xl font-bold heading">
            Elevate Your Style with Women's Eastern Dresses
          </h6>
          <p>
            Experience the elegance of Women's Eastern Dresses with Rabail Omar.
            Our collections are designed to provide you with a versatile
            wardrobe that suits every occasion. Whether it’s the timeless allure
            of our Formals, the modern sophistication of our Luxury Prets, or
            the special connection highlighted by our Mommy and Me Dresses,
            there’s something unique for everyone. Explore our collections and
            shop with ease, knowing that you’re investing in quality, style, and
            tradition.
          </p>
        </div>
      </Fade>
    </>
  );
};

export default Choice;
