import React from 'react'

function DispatchTimeline() {
  return (

    <><div className="mt-[4.5rem] border-t border-gray-300"></div>
    
       <div className="mt-[8rem] flex items-center justify-center p-2 mb-[4rem]">
        <div className="max-w-3xl w-full">
          {/* Heading - Center */}
          <h1 className="text-xl md:text-5xl letterSpacing text-center mb-[6rem]">
            DISPATCH TIMELINE
          </h1>

          {/* Description - Left aligned, all lines start from same point */}
          <div className="text-justify text-center  border-t border-b border-gray-300">
            <p className="mb-12 mt-12">
             <span className="font-bold letterSpacing ">LOCAL DISPATCH TIME</span><br/><br/>
FOR UNSTITCHED AND READY TO WEAR: WITHIN 1 WEEK<br/>
FOR STITCHED : WITHIN 3 WEEKS.<br/>
CUSTOMIZE STITCHING : 1 WEEK EXTRA.<br/>
            </p>

           
          </div>
        </div>
      </div>
    
    
    </>
 
  )
}

export default DispatchTimeline