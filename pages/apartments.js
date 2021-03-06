import React from "react";
import Carousel from "../Components/Carousel";
import Title from "../Components/Title";
import Head from "next/head";
const apartments = () => {
  const stan1 = ["stan1", "stan1b", "stan1c"];
  const stan2 = ["stan2", "stan2b",];
  const conference = ['con1', 'con1b', 'con1c', 'con1d']
  const suites = ['demure', 'demure1']
  const luxury = ['luxury', 'luxury1']
  const home = ['home', 'home1', 'home2']
  const penthouse = ['penthouse', 'penthouseb', 'penthousec', 'penthoused', 'penthousee', 'penthousef']
  return (
    <div className="container mx-auto md:px-12">
      <Head>
        <title>Alphamsa Service apartments</title>
        <meta name="description" content="Alphamsa service apartments official website" />
        <link rel="icon" href="/assets/Alphamsa Logo.png" />
      </Head>
      <div className="pt-28 pb-10 px-4" id="rooms">
        <Title text="Rooms" />
        <div className="flex items-center justify-between">
          <p>
            Our <strong>Room</strong> Apartments contain AC, TV & Fridge powered
            with uninterrupted power supply.
          </p>
          <a href="https://api.whatsapp.com/send?phone=%2B2348037181261&text&app_absent=0">
          <button className="bg-black px-6 py-2 text-white ml-4 flex-shrink-0 whitespace-nowrap">
            Book Now
          </button>
          </a>
        </div>
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 justify-center py-12">
          <div className="md:col-span-6 col-span-12">
            <Carousel images={stan1} text="Standard Room 001 - &#8358;35,000" />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Carousel images={stan2} text="Standard Room 002 - &#8358;35,000" />
          </div>
          <div className="md:col-span-6 md:col-start-4 col-span-12">
            <Carousel images={conference} text="Conference room 004 - &#8358;35,000" />
          </div>
        </div>
      </div>
      <div className="pt-6 pb-10 px-4" id="suite">
        <Title text="Suites" />
        <div className="flex items-center justify-between">
          <p>
            Our <strong>Suite</strong> Apartments come exclusive with their own
            living room and standard facilities like AC, TV & Fridge
          </p>
          <a href="https://api.whatsapp.com/send?phone=%2B2348037181261&text&app_absent=0">
          <button className="bg-black px-6 py-2 text-white ml-4 flex-shrink-0 whitespace-nowrap">
            Book Now
          </button>
          </a>
        </div>
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 justify-center py-12">
          <div className="md:col-span-6 col-span-12">
            <Carousel images={home} text="Luxury Suite 005 - &#8358;48,000" />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Carousel images={luxury} text="Luxury Suite 005 - &#8358;48,000" />
          </div>
          <div className="md:col-span-6 md:col-start-4 col-span-12">
            <Carousel images={suites} text="Suite De muire - &#8358;45,000" />
          </div>
        </div>
      </div>
      <div className="pt-6 pb-10 px-4" id="penthouse">
        <Title text="Penthouse" />
        <div className="flex items-center justify-between">
          <p>
            Our Penthouse Apartments is luxury at it highest floor, equipped
            with a living room, standard AC, TV & Fridge
          </p>
          <a href="https://api.whatsapp.com/send?phone=%2B2348037181261&text&app_absent=0">
          <a href="https://api.whatsapp.com/send?phone=%2B2348037181261&text&app_absent=0">
          <button className="bg-black px-6 py-2 text-white ml-4 flex-shrink-0 whitespace-nowrap">
            Book Now
          </button>
          </a>
          </a>
        </div>
        <div className="min-h-[34rem] mt-10">
          <Carousel images={penthouse} isPenthouse text="Penthouse - &#8358;45,000" />
        </div>
      </div>
    </div>
  );
};

export default apartments;
