import React from 'react'
import Image from 'next/image'
import Listing from '../components/listling'

export default function productpage() {
  return (
    <div>
    
     <Image src={"/productpagei image.png"}alt='prodout image' width={1440} height={209}/>
  
    <Listing/>


    <div className="w-full max-w-[1440px] mx-auto px-4">
      {/* Header Section */}
      <div>
        <h1 className="font-bold text-2xl sm:text-4xl text-left ml-4 mb-8">
          New Ceramics
        </h1>
      </div>

      {/* Image Listing Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Image Items */}
        <div className="flex justify-center">
          <Image
            src="/Product Card.png"
            alt="Ceramic item 1"
            width={305}
            height={462}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/Product Card (1).png"
            alt="Ceramic item 2"
            width={306}
            height={375}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/Product Card (2).png"
            alt="Ceramic item 3"
            width={305}
            height={462}
            className="rounded-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/Product Card (3).png"
            alt="Ceramic item 4"
            width={305}
            height={462}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>

    <Listing/>
    

    </div>


  )
}