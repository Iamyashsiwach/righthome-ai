'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  // Mock property data
  const property = {
    price: "1.5Cr",
    name: "Palm Harbor",
    location: "2699 Green Valley, Highland Lake, FL",
    beds: 3,
    baths: 2,
    area: "5×7 m²"
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f9f6f2] font-sans overflow-x-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 py-3 sticky top-0 bg-[#f9f6f2] z-20 backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center">
          {/* Logo */}
          <div className="w-7 h-7 md:w-8 md:h-8 mr-2">
            <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="30" x="0" y="10" fill="#FF6B35" />
              <rect width="10" height="20" x="25" y="20" fill="#FF6B35" />
            </svg>
          </div>
          <span className="text-lg md:text-xl font-bold text-black">righthome<span className="text-xs align-top">®</span></span>
        </div>
        
        <button className="bg-white rounded-full px-3 py-1 md:px-4 md:py-1.5 shadow-sm flex items-center font-medium text-sm md:text-base text-black">
          Sign in <div className="w-4 h-4 md:w-5 md:h-5 bg-black rounded-full ml-2 text-white flex items-center justify-center text-xs">👤</div>
        </button>
      </header>

      {/* First Frame: Let AI Guide You (Full Screen) */}
      <section className="min-h-[calc(100vh-56px)] flex flex-col justify-center w-full mx-auto max-w-5xl px-4 md:px-6 py-4 md:py-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {/* Grid pattern as inline SVG instead of external file */}
            <svg width="100%" height="100%" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.2" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-8 md:mb-10 mt-2 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold text-black">Let AI guide you home.</h1>
        </div>

        {/* Bento Grid - Layout */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Main Feature Card - AI Works */}
          <div className="col-span-12 md:col-span-6 bg-[#3a3a3a] text-white rounded-2xl overflow-hidden shadow-sm">
            <div className="p-5 md:p-6 flex flex-col h-full">
              <div className="flex-1 flex flex-col items-center justify-center mb-4">
                {/* Audio visualization and house icon */}
                <div className="relative flex items-center justify-center my-4">
                  <div className="flex items-center space-x-1 absolute left-[10%] md:left-[20%]">
                    <div className="h-8 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                    <div className="h-5 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                    <div className="h-10 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                    <div className="h-5 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                  </div>
                  
                  <div className="rounded-xl bg-[#ffdd59] p-3 w-16 h-16 flex items-center justify-center z-10">
                    <div className="w-10 h-10 relative">
                      {/* House SVG */}
                      <Image src="/images/house.svg" alt="House" width={40} height={40} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 absolute right-[10%] md:right-[20%]">
                    <div className="h-8 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                    <div className="h-5 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                    <div className="h-10 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                    <div className="h-5 w-0.5 bg-gray-400 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-2">
                <h2 className="text-lg md:text-xl font-bold mb-2">See How RightHome AI Works</h2>
                <p className="text-gray-300 mb-4 text-xs md:text-sm">
                  Take a quick tour of how Ayra, our AI-powered agent, transforms your home search experience.
                </p>
                
                <button className="w-full bg-white text-black py-2 px-3 rounded-full font-medium flex items-center justify-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Play now
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stacked Cards */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-1 gap-3 md:gap-4">
            {/* Top Right Card - AI Insights */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-1/2 h-auto min-h-28 bg-orange-100 overflow-hidden relative">
                  {/* City image */}
                  <Image 
                    src="/images/1-2.jpg" 
                    alt="City" 
                    fill={true}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="w-full sm:w-1/2 p-3 md:p-4 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm">AI powered Insights</span>
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-black">DLF's $4 Billion Luxury Project Near Delhi Records Unprecedented Sales</h3>
                </div>
              </div>
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="flex h-full">
                <div className="w-1/3 bg-blue-100 overflow-hidden relative">
                  {/* Person image */}
                  <Image 
                    src="/images/1-1.jpg" 
                    alt="Person" 
                    fill={true}
                    sizes="(max-width: 640px) 33vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="w-2/3 p-3 md:p-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="font-bold text-sm md:text-base text-black">Ram Kishore</h3>
                    <div className="flex">
                      <span className="text-yellow-500 text-xs md:text-sm">★★★★★</span>
                    </div>
                  </div>
                  <div className="text-gray-500 text-xs md:text-sm mb-1">First time buyer</div>
                  <p className="italic text-black text-xs md:text-sm">"Ayra made home searching effortless — it felt like she just got me."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 md:mt-12 flex justify-center animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Second Frame: Explore Trending (Appears on Scroll) */}
      <section className="min-h-screen max-w-5xl mx-auto w-full px-4 md:px-6 py-12 md:py-16 relative">
        {/* Background wave pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full opacity-15">
            {/* Wave pattern as inline SVG instead of external file */}
            <svg width="1440" height="320" className="w-full h-auto" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF6B35" fillOpacity="0.2" 
                d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-black">Explore What's Trending Now</h1>
        </div>

        {/* Bento Grid - Main Properties */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Featured Property Card */}
          <div className="col-span-12 md:col-span-7 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="relative">
              {/* Property Image */}
              <div className="w-full h-48 bg-blue-100 relative overflow-hidden">
                <div className="absolute inset-0">
                  {/* Main property image */}
                  <Image 
                    src="/images/1-5.jpg" 
                    alt="Luxury Villa" 
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute top-2 left-2 bg-gray-600/50 text-white px-2 py-0.5 rounded-full flex items-center text-xs">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    TRENDING
                  </div>
                </div>
                
                {/* Heart Icon */}
                <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              {/* Property Details */}
              <div className="p-3 md:p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-black">{property.price}</h2>
                </div>
                <h3 className="text-base font-bold text-black mt-1">{property.name}</h3>
                <p className="text-gray-500 mb-2 text-sm">{property.location}</p>
                
                {/* Property Features */}
                <div className="flex flex-wrap items-center text-gray-500 gap-3 mt-1 text-sm">
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>{property.area}</span>
                  </div>
                </div>

                {/* Schedule Visit Button */}
                <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full font-medium text-sm w-full hover:bg-orange-600 transition-colors">
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Column - Small Cards */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-3 md:gap-4">
            {/* Explore All Properties Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-24 flex">
              <div className="w-1/3 bg-purple-100 overflow-hidden relative">
                {/* Apartment image */}
                <Image 
                  src="/images/1-3.jpg" 
                  alt="Apartment Building" 
                  fill={true}
                  sizes="(max-width: 768px) 33vw, 17vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="w-2/3 p-3 flex flex-col justify-center">
                <div className="flex items-start mb-1">
                  <div className="bg-black rounded p-0.5 mr-1.5">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-sm text-black">Explore All Properties</h3>
                </div>
                <p className="text-gray-500 text-sm">Discover homes that match your lifestyle</p>
              </div>
            </div>
            
            {/* Explore by Features Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-24">
              <div className="relative h-full">
                <div className="absolute inset-0 overflow-hidden">
                  {/* Office building image */}
                  <Image 
                    src="/images/1-4.jpg" 
                    alt="Office Building" 
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-start mb-1">
                    <div className="bg-white rounded p-0.5 mr-1.5">
                      <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-sm">Explore by Features</h3>
                  </div>
                  <p className="text-sm line-clamp-1">Find homes with the details you care about</p>
                </div>
              </div>
            </div>
            
            {/* Additional empty card for minimalist effect */}
            <div className="bg-orange-50/50 rounded-2xl overflow-hidden shadow-sm h-24 hidden md:block">
              {/* Intentionally left mostly empty */}
              <div className="h-full w-full flex items-center justify-center text-orange-400/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom Search Bar */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-10">
        <div className="bg-white rounded-full shadow-md mx-4 w-full max-w-md flex items-center px-3 py-2">
          <button className="text-black mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <input 
            type="text" 
            placeholder='Need help? Try "Find a 3BHK under ₹1Cr in Delhi"'
            className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-sm"
          />
          <button className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Global styles */}
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
}
