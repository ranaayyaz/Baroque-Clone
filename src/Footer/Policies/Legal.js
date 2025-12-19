import React from 'react'

function Legal() {
  return (
 <>
      <div className="mt-[4.5rem] border-t border-gray-300"></div>
      <div className="mt-[4rem] flex items-center justify-center p-2 mb-[4rem]">
        <div className="max-w-3xl w-full">
          {/* Heading - Center */}
          <h1 className="text-xl md:text-4xl letterSpacing text-center mb-12">
            LEGAL
          </h1>

          {/* Description - Left aligned, all lines start from same point */}
          <div className=" ">
            <pre className="mb-12">
              For any legal queries write to us at: <span className='underline'>legal@baroque.com.pk </span>or 
            <span className='underline'>legal@baroque.pk</span><br/><br/>

Company Address: Bilal Textile, Tariq Ismail Road, Raiwind Road, Lahore
            </pre>
          </div>
        </div>
      </div>
    </>
  )
}

export default Legal