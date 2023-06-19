import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiPlayFill } from 'react-icons/ri';

const Card = () => {
  return (
    <Link href="/" className='bg-spotify-lightgray p-4 hover:bg-gray-800 transition-all group'>
      <div className='mb-4 relative'>
        <Image className='rounded shadow-xl mx-auto' src="https://upload.wikimedia.org/wikipedia/en/c/c9/Linkin_Park_-_Living_Things.jpg" width={150} height={250} alt='album' />
        <button className='p-3 text-2xl bg-spotify-green rounded-full text-spotify-black absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 ease-out'>
          <RiPlayFill />
        </button>
      </div>
      <div>
        <h5 className='font-medium text-gray-100 mb-2'>Today Top Hit</h5>
        <p className='text-gray-400 text-sm w-[18ch]'>SZA in on top of the Hottest 50!</p>
      </div>
    </Link>
  )
}

export default Card;