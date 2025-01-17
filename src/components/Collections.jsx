import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowRightLong } from "react-icons/fa6";

const Collections = () => {
  const collectionsCards = [
    {
      collectionID: 1,
      collectionImg: "./collection1.jpg",
      collectionName: "RHEA - Festive Collection ‘24",
    },

    {
      collectionID: 2,
      collectionImg: "./collection2.jpg",
      collectionName: "Mommy & Me",
    },

    {
      collectionID: 3,
      collectionImg: "./collection3.jpg",
      collectionName: "Pret Wear",
    },

    {
      collectionID: 4,
      collectionImg: "./collection4.jpg",
      collectionName: "Kids Eid Wear",
    },

    {
      collectionID: 5,
      collectionImg: "./collection5.jpg",
      collectionName: "Kids Formal",
    },

    {
      collectionID: 6,
      collectionImg: "./collection6.jpg",
      collectionName: "Formals",
    },

    {
      collectionID: 7,
      collectionImg: "./collection7.jpg",
      collectionName: "Bridals",
    },
  ];

  return (
    <>
      <Fade direction="up" duration={1000} triggerOnce>
        <div className="container py-20 mx-auto text-center collections-header">
          <h6 className="py-3 text-2xl font-bold heading">
            Discover Women's & Kid's Luxury Eastern Wear
          </h6>
          <p>
            Welcome to Rabail Omar, where tradition meets elegance in Women's
            Luxury Eastern Wear. Explore our curated collection of exquisite
            Pakistani dresses, perfect for grand events or elevating your
            wardrobe, blending rich traditions with contemporary trends for
            every occasion.
          </p>
        </div>
      </Fade>

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="px-5 py-10 md:px-10 lg:px-20 collections-header">
          <h2 className="text-lg font-bold md:text-2xl heading">Collections</h2>
        </div>
      </Fade>

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="container px-4 py-10 mx-auto sm:px-6 lg:px-8 collections-section">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {collectionsCards.map((collection) => (
              <div className="collection-card w-80">
                <div className="collection-img relative w-full pt-[100%] overflow-hidden bg-gray-100">
                  <img
                    src={collection.collectionImg}
                    alt=""
                    className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                  />
                </div>
                <div className="mt-2 collection-text">
                  <p className="flex items-center gap-2 heading">
                    {collection.collectionName} <FaArrowRightLong />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Fade>

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="flex justify-center px-8 py-10 leading-8 explore-collections md:px-20 lg:px-40">
          <div>
            <h1 className="py-3 text-xl font-bold text-center md:text-2xl heading">
              Explore Our Collections
            </h1>
            <p className="text-center md:text-left">
              Our extensive range of collections is crafted to suit a variety of
              tastes and occasions:
            </p>
            <ul className="mt-4 space-y-4 md:space-y-2">
              <li className="list-disc">
                <u>Formals:</u> Timeless elegance with intricate designs for
                weddings or any formal occasion.
              </li>
              <li className="list-disc">
                <u>Luxury Prets:</u> Chic, ready-to-wear outfits that blend
                modern trends with traditional craftsmanship.
              </li>
              <li className="list-disc">
                <u>Kids Formals:</u> Beautifully tailored dresses for young
                girls, perfect for formal events like weddings or Eid.
              </li>
              <li className="list-disc">
                <u>Kids Eid Wear:</u> Festive and stylish outfits for young
                girls to celebrate Eid in elegance.
              </li>
              <li className="list-disc">
                <u>Mommy & Me Dresses:</u> Coordinated outfits for mothers and
                daughters, celebrating a special bond.
              </li>
              <li className="list-disc">
                <u>Bridals:</u> Exquisite bridal wear designed to make your
                special day unforgettable.
              </li>
            </ul>
          </div>
        </div>
      </Fade>

      <Fade direction="up" duration={1000} triggerOnce>
        <div className="text-center py-8 w-[60vw] container mx-auto">
          <h1 className="text-2xl font-bold text-center heading">
            All Occasions
          </h1>
          <p>
            Each collection at Rabail Omar is thoughtfully curated to ensure
            that you find something that resonates with your personal style.
            Whether you’re preparing for a wedding, a family gathering, or any
            special occasion, our collections offer a variety of choices to meet
            your needs.
          </p>
        </div>
      </Fade>
    </>
  );
};

export default Collections;
