import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 pt-16">
  <div className="text-3xl font-light mt-5 animate-pulse">Loading...</div>
  <div className="flex gap-20 h-full">
    <div className="animate-pulse">
      <div className="relative w-[327px] h-max bg-Background-light rounded-3xl flex flex-col px-7 py-5 gap-4">
        <div className="absolute rounded-full w-8 h-8 bg-Background top-[69%] -left-5"></div>
        <div className="absolute rounded-full w-8 h-8 bg-Background top-[69%] -right-5"></div>
        {/* PNR Section */}
        <div>
          <div className="w-6 h-4 text-xs font-medium leading-[15.60px] text-[#c0c2c5] animate-pulse">Loading...</div>
          <div className="w-[140px] h-[52px] text-[40px] font-medium leading-[52px] text-white animate-pulse">Loading...</div>
        </div>
        {/* Divider */}
        <div className="animate-pulse">
        </div>
        {/* Details Section */}
        <div className="w-full my-2 animate-pulse">
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-10">
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="animate-pulse">
        </div>
        {/* TRAVEL */}
        <div className="flex items-center justify-between w-full animate-pulse">
          <div className="animate-pulse">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
          </div>
          <div className="flex items-center justify-center bg-[#20262E] h-9 px-6 py-2 rounded-[32px] animate-pulse">
          </div>
          <div className="animate-pulse">
            <div className="w-full h-4 bg-gray-300 rounded"></div>
            <div className="w-full h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
        {/* Flight Status */}
        <div className="flex items-baseline gap-2 animate-pulse">
          <div className="w-20 h-4 bg-gray-300 rounded"></div>
          <div className="w-20 h-4 bg-gray-300 rounded"></div>
        </div>
        {/* Divider */}
        <div className="animate-pulse">
        </div>
        {/* More Details */}
        <div className="w-full my-2 animate-pulse">
          <div className="w-full grid grid-cols-2 grid-rows-2 gap-y-6 gap-x-10">
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="animate-pulse">
              <div className="w-full h-4 bg-gray-300 rounded"></div>
              <div className="w-full h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Loading
