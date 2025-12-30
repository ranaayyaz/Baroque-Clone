import React from "react";

function OurShop() {
  return (
    <>
      <div className="mt-[4.5rem] border-t border-gray-300"></div>

      <div className="mt-[4rem] flex items-center justify-center p-2 mb-[4rem]">
        <div className="max-w-3xl w-full">
          {/* Heading - Center */}
          <h1 className="text-sm letterSpacing text-center mb-8">STORE 1</h1>

          {/* Description - Left aligned, all lines start from same point */}
          <div className="text-gray-700  leading-relaxed  text-justify">
            <h1 className="text-xl md:text-3xl letterSpacing text-center mb-8">
              DOLMEN MALL LHR
            </h1>
            <p className="mb-6 text-center">
              4th Floor, Dolmen Mall, Tariq Road, Karachi.
            </p>

            <h1 className="text-xl md:text-3xl letterSpacing  text-center mb-8">
              REFASHIONED
            </h1>
            <p className="mb-6">
              Step into a world of elegance, where every outfit tells a story.
              From chic casuals to glamorous evening wear, we have it
              all!Experience unmatched quality and personalized service that
              makes shopping a joy. Visit us today and let your wardrobe shine
              with our stunning collection!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurShop;
