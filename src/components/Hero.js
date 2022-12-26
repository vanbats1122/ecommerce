import React from 'react';
// import images
import WomanImg from '../img/fashion.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container flex justify-around h-full mx-auto'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='flex items-center font-semibold uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
             Trending Styles
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            FALL SALE STYLISH <br />
            <span className='font-semibold'>OUTERWEAR</span>
          </h1>
          <Link
            to={'/'}
            className='self-start font-semibold uppercase border-b-2 border-primary'>
              Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} 
          className= 'h-auto max-w-xl'
          alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
