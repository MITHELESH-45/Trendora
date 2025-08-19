import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="A person wearing a trendy t-shirt" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Welcome to Trendora, your number one source for the latest trends in fashion. We are dedicated to providing you with the best in clothing, with a focus on quality, uniqueness, and exceptional customer service.
          </p>
          <p>
            Founded in 2025, Trendora has come a long way from its beginnings. We now serve customers all over the world, and we are thrilled to be a part of the eco-friendly wing of the fashion industry. We hope you enjoy our products as much as we enjoy offering them to you.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to empower our customers to express their unique style through our thoughtfully curated collections, offering a seamless and inspiring shopping experience.
          </p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='w-30 text-xl'>Quality Assurance:</b>
          <p className='text-gray-600'>
            We meticulously source our materials and partner with ethical manufacturers to ensure every garment meets our high standards of quality, comfort, and durability.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='w-30 text-xl'>Convenience:</b>
          <p className='text-gray-600'>
            Our user-friendly online store, secure payment options, and fast shipping ensure a hassle-free shopping experience from the comfort of your home.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='w-30 text-xl' >Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Your satisfaction is our top priority. Our dedicated support team is always ready to assist you with any questions or concerns.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;