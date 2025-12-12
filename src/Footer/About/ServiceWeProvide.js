import React from "react";

function ServiceWeProvide() {
  return (
    <>
    <div className="mt-[4.5rem] border-t border-gray-300"></div>
      {" "}
      <div className="mt-[4rem] flex items-center justify-center p-2 mb-[4rem]">
        <div className="max-w-3xl w-full">
          {/* Heading - Center */}
          <h1 className="text-xl md:text-5xl letterSpacing text-center mb-[6rem]">
            Service We Provide
          </h1>

          {/* Description - Left aligned, all lines start from same point */}
          <div className="text-justify  ">
            <p className="mb-6">
             <span className="font-bold">CUSTOMIZED STITCHING:</span><br/>
Please note that the custom stitch is available for paid orders only and is charged <span className="font-bold"> PKR 5,000</span> each article.
            </p>

            <p className="mb-6">
           * Cancellation of Orders or Changes can be made within <span className="font-bold"> 2-3 Days</span> after Order Placement.<br/>
* Changes made after specified timeline will cause delay in order.<br/>
* Customized stitching orders may require additional <span className="font-bold"> 1 - week</span> for completion.<br/>
* Custom stitched order will not be exchanged or returned as they are stitched on customer’s provided size and requirements.
            </p>

            <p className="mb-6">
              * To get your outfit custom stitched please select the custom
              stitched tab in the stitched option <br/>
               * Select Stitched > Custom
              Size > Choose your nearest size > Fill in the required alterations
              in the allotted boxes > Add note (if any) > add to cart
            </p>

            <p className="mb-6">
              <span className="font-bold "> PSS (PRIORITY STITCHING SERVICE):</span><br/>
               Priority stitching service is
              for all customers. This service allows all our customers to
              receive their stitched orders more quickly and without any hustle.
              This is an express delivery service and all priority stitched
              orders will be charged PKR 10,000 (per order).This option comes on
              the cart page before the checkout page.
            </p>
             <p>
              <span className="font-bold"> DISPATCH TIMELINE: 2 WEEKS

:</span><br/>
               
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceWeProvide;
