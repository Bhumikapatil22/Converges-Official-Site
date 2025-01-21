"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const data = [
  {
    year: 2023,
    cards: [
      {
        title: 'Detectives Dilemma',
        club: "By Akatsuki Coding Club",
        description:
          'Watch on smart TVs, PlayStations and more.',
        icon: 'tv',
      },
      {
        title: 'Detectives Dilemma',
        club: "GDG on Campus",
        description:
          'Save your favourites easily and always have something to watch.',
        icon: 'download',
      },
      {
        title: 'Detectives Dilemma',
        club: "Akatsuki Coding Club",
        description:
          'Save your favourites easily and always have something to watch.',
        icon: 'download',
      },
      {
        title: 'Detectives Dilemma',
        club: "Akatsuki Coding Club",
        description:
          'Save your favourites easily and always have something to watch.',
        icon: 'download',
      },
      {
        title: 'Detectives Dilemma',
        club: "Akatsuki Coding Club",
        description:
          'Save your favourites easily and always have something to watch.',
        icon: 'download',
      },
      {
        title: 'Detectives Dilemma',
        club: "Akatsuki Coding Club",
        description:
          'Save your favourites easily and always have something to watch.',
        icon: 'download',
      },
      {
        title: 'Detectives Dilemma',
        club: "Akatsuki Coding Club",
        description:
          'Save your favourites easily and always have something to watch.',
        icon: 'download',
      },
    ],
  },
  {
    year: 2024,
    cards: [
      {
        title: 'Watch everywhere',
        club: "Akatsuki Coding Club",
        description:
          'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
        icon: 'watch',
      },
      {
        title: 'Create profiles for kids',
        club: "Akatsuki Coding Club",
        description:
          'Send kids on adventures with their favourite characters in a space made just for them.',
        icon: 'kids',
      },
    ],
  },
];

const Card = ({ title,club }: { title: string; club:string; description: string; icon: string }) => (
  <div className="flex flex-col h-72 items-center align-center bg-gray-950  text-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
   <div > 
      <Image  
      className="h-10 mb-8" 
      src="https://i.pinimg.com/originals/ef/f6/16/eff616bf1a4b4396a602ed54011272ec.png"
      alt='logo'
      width={100}
      height={100}
      ></Image>
  </div>
  
    <h3 className="text-center text-2xl font-bold mb-2">{title}</h3>
    <p className="text-center text-sm text-gray-300  mb-6">{club}</p>
    <div className="flex gap-3">
    <button className="px-5 py-2  text-white font-semibold rounded-full border  border-[rgb(160,30,95)] hover:scale-105 transition-transform">
        Register
      </button>
    <button className="px-5 py-2 text-white font-semibold rounded-full border border-[rgb(160,30,95)] hover:scale-105 transition-transform">
        View Details
      </button>
      </div>
  </div>
);

const NavTab = ({ years, currentYear, setYear }: { years: number[]; currentYear: number; setYear: (year: number) => void }) => (
    
  <div className="flex justify-center space-x-4 mb-6">
    
    {years.map((year) => (
      <button
        key={year}
        onClick={() => setYear(year)}
        className={`px-4 py-2 rounded-full text-white ${
          currentYear === year
            ? 'bg-purple-800'
            : 'bg-gray-700 hover:bg-purple-700'
        }`}
      >
        {year}
      </button>
    ))}
  </div>
);

const CardDisplay = () => {
  const [selectedYear, setSelectedYear] = useState(data[0].year);

  const years = data.map((item) => item.year);
  const currentCards = data.find((item) => item.year === selectedYear)?.cards || [];

  return (
    <div className="p-4">
      <NavTab years={years} currentYear={selectedYear} setYear={setSelectedYear} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {currentCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardDisplay;
