import React from "react";
import TopHeader from "./../../TopHeader";

function Careers() {
  return (
    <>
<div className="mt-[4.5rem] border-t border-gray-300"></div>

    <div className="mt-[3rem] flex items-center justify-center p-2 mb-[4rem]">
      <div className="max-w-3xl w-full">
        {/* Heading - Center */}
        <h1 className="text-xl md:text-5xl letterSpacing  text-center mb-[7rem]">
          Careers
        </h1>

        {/* Description - Left aligned, all lines start from same point */}
        <div className=" leading-relaxed text-justify">
          <h1 className=" md:text-3xl font-bold letterSpacing text-center mb-8 underline text-sm">
            AVAILABLE POSITIONS
          </h1>
          <h1 className="text-xl md:text-2xl letterSpacing  text-center mb-5">
            Fashion Designer
          </h1>
          <h1 className="text-xl md:text-2xl  text-center letterSpacing mb-5">
            Graphic Designer
          </h1>
          <h1 className="text-xl md:text-2xl  text-center mb-5 letterSpacing">
            Textile Designer
          </h1>
          <h1 className="text-xl md:text-2xl  text-center mb-5 letterSpacing">
            Social Media Marketer
          </h1>
          <h1 className="text-xl md:text-2xl  text-center mb-5 letterSpacing">
            Customer Service Representative
          </h1>

          <h1 className="text-xl md:text-2xl  text-center mb-5 letterSpacing">
            Accountants
          </h1>
          <h1 className="text-xl md:text-2xl  text-center mb-5 font-bold letterSpacing">
            Be a part of our team send us your CV's at:
          </h1>
          <h1 className="text-xl md:text-xl  text-center mb-5 letterSpacing    border-b border-gray-300 pt-4 pb-4">
            jobs@baroque.pk
          </h1>
        </div>
      </div>
    </div>



    </>
  );
}

export default Careers;
