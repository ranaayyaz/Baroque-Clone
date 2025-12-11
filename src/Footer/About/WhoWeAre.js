import React from "react";

function WhoWeAre() {
  return (
    <div className="mt-[8rem] flex items-center justify-center p-2 mb-[4rem]">
      <div className="max-w-3xl w-full">
        {/* Heading - Center */}
        <h1 className="text-xl md:text-5xl  text-center mb-8">
          WHO WE ARE
        </h1>

        {/* Description - Left aligned, all lines start from same point */}
        <div className="text-gray-700  leading-relaxed text-justify">
          <p className="mb-6">
            Baroque ( Bilal Textile) is a renowned fashion clothing brand with
            over 30 years of experience in the textile sector, producing fabric
            that is rich in quality and craftwork, Baroque has successfully
            ventured into the retail sector by establishing itself as a
            high-end, fast fashion women's wear brand.
          </p>

          <p className="mb-6">
            Staying true to the name of the brand, Baroque focuses on producing
            apparel that is fashionable, stylish and timeless – by introducing
            outfits that have trendy silhouettes and are majorly made of
            embroidered and traditionally crafted fabric. Catering to a wide set
            of audience, by launching various ranges throughout the year,
            Baroque manages to design clothes that are unique, effortless and
            perfect for every event.
          </p>

          <p className="mb-6">
            Fusing eastern, cultural artwork with contemporary style of art, the
            brand fashions clothes that are meant to be worn by modern women of
            every age and kind. Keeping this in mind, while accepting and
            promoting the beauty and individuality of each woman, their age,
            size and aesthetics, Baroque offers customized tailoring with
            consumers having a choice to get their ensembles stitched to
            perfection. In this case, we go by the motto: Stitched to your
            perfect fit
          </p>

          <p>
            Baroque is a High End Luxury Fabric Brand, and and specializes in
            chiffon formals and also cater seasons essentials including Swiss,
            Khaddar, Lawn and Velvet.So for every season, for every occasion, we
            have got you covered!
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
