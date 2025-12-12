import React from "react";

function Shipping() {
  return (
    <>
      <div className="mt-[4.5rem] border-t border-gray-300"></div>
      <div className="mt-[4rem] flex items-center justify-center p-2 mb-[4rem]">
        <div className="max-w-3xl w-full">
          {/* Heading - Center */}
          <h1 className="text-xl md:text-3xl letterSpacing text-center mb-12">
            SHIPPING POLICY
          </h1>

          {/* Description - Left aligned, all lines start from same point */}
          <div className=" leading-relaxed letterSpacing">
            <p className="mb-12">
              Once the order is dispatched, you will be sent a shipping
              confirmation email with your carrier information and tracking
              number, be sure to check Junk/Spam folder as well.
              <br />
              <br />
              We use couriers including but not limited to <span className="font-bold">TCS, PostEx, Leopards, Trax, Swyft</span>.<br/><br/>
              We may switch couriers from time to time to ensure the best possible service and best possible pricing to help our customers.<br/><br/>
              We may switch couriers from time to time to ensure the best possible service and best possible pricing to help our customers.<br/><br/>
              You can check the expected dispatch time on our <span className="font-bold underline">Dispatch Timeline</span>.<br/>






            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipping;
