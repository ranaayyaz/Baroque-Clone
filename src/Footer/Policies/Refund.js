import React from "react";

function Refund() {
  return (
    <>
      <div className="mt-[4.5rem] border-t border-gray-300"></div>

      <div className="mt-[4rem] flex items-center justify-center p-2 mb-[4rem]">
        <div className="max-w-3xl w-full">
          {/* Heading - Center */}
          <h1 className="text-xl md:text-3xl letterSpacing text-center mb-12">
            REFUND POLICY
          </h1>

          {/* Description - Left aligned, all lines start from same point */}
          <div className=" leading-relaxed letterSpacing">
            <p className="mb-6  text-xl font-bold ">REFUND POLICY</p>

            <p className="mb-6">
              We do not provide refunds only <span className="font-bold">store credit</span> is provided.However,
              refunds may be allowed in exceptional casesif there is any fault
              at our end.
              <br />
              <br /> Changes in order for instance; size change, article change,
              addition/removal of article etc can be made within <span className="font-bold">48 hours (2 day)</span> from the day the order is placed.
            </p>

            <p className="mb-6  text-xl font-bold">Cancellation</p>

            <p className="mb-6">
              In order to cancel the order, please fill out the cancellation
              form here: <span className="font-bold underline">(Click
              here)</span>
              <br />
              <br /> Order can be cancelled within <span className="font-bold">48 hours (2 day)</span> of the order
              placement. Cancelling order after <span className="font-bold">48 hours (2 day)</span> will result in
              cancellation fees of <span className="font-bold">3%</span>of the paid amount, with the amount
              refunded to the original mode of payment. The amount will be
              processed in <span className="font-bold">14-18 working days</span>. Store credit will be provided to
              the orders cancelled with no genuine reason. (i.e., change of
              mind, don’t require order anymore, changes in order)
            </p>

            <p className="mb-6  text-xl font-bold">Return</p>

            <p className="mb-6">
              To initiate a return request, you have to fill the form at <span className="font-bold underline">(Click
              here)</span>. Please note that returns will need to be sent to the
              address you are provided when your return is accepted.
              <br />
              <br /> We will notify you once we’ve received and inspected your
              return, and let you know if the refund was approved or not. If
              approved, you’ll be automatically refunded on your original
              payment or credit voucher within <span className="font-bold">14 business days</span>. Please remember
              it can take some time for your bank or credit card company to
              process and post the refund too. <br />
              <br />
              Items/Articles ordered in our sale and discount sections will not
              be entertained for refund or exchange. <br />
              <br />
              To be eligible for a return, your item must be in the same
              condition that you received it, unworn or unused, with tags, and
              in its original packaging. You’ll also need the receipt or proof
              of purchase.
              <br />
              <br /> In order to return the package, our team willl provide you
              with the instructions on how and where to send your package. Items
              sent back to us without first requesting a return will not be
              accepted.
              <br />
              <br />
              Baroque has a right to reject a return request found misusing of
              our generous return policy or a product received with missing tags
              and other components
            </p>
            <p className="mb-6  text-xl font-bold"> Damages and issues</p>

            <p className="mb-6">
              In case of any damaged or incorrect item, the concern must be
              raised within <span className="font-bold">48 hours</span> to our customer care team for further
              assistance or else the complain cannot be accepted.
            </p>

            <p className="mb-6  text-xl font-bold">
              {" "}
              Exceptions / non-returnable items
            </p>

            <p className="mb-6">
              Certain types of items cannot be returned, like customized
              articles(custom sizearticles), and service charges (such as
              priority stitching).<br/><br/> Please get in touch if you have questions or
              concerns about your specific item. Unfortunately, we cannot accept
              returns on sale items or gift cards.<br/><br/> *Baroque reserves the right
              to reject return request found misusing of our return policy or a
              product received with missing tags and other components.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Refund;
