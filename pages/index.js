import Head from "next/head";
import Image from "next/image";
import Feature from "../Components/Feature";
import Title from "../Components/Title";
import Link from 'next/link'
import Autocomplete from "../Components/Autocomplete";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Alphamsa Service apartments</title>
        <meta name="description" content="Alphamsa service apartments official website" />
        <link rel="icon" href="/assets/Alphamsa Logo.png" />
      </Head>
      <main className="min-h-screen bg-[url(../public/assets/home.jpeg)] bg-cover bg-no-repeat bg-bottom flex items-center justify-center">
        <div className="flex flex-col justify-center items-center text-white w-4/5">
          <h1 className="text-4xl  md:text-5xl pb-2 text-center">
            Find the Perfect Shortlet Today!
          </h1>
          <span className="text-center mx-auto">
            We offer a wide range of comfortable and beautiful apartments at
            affordable Prices
          </span>
          <div className="flex w-full justify-center mt-10">
            <div className="bg-white flex w-3/5 mr-4">
              <Autocomplete/>
            </div>
            <button className="bg-black px-6 py-2 text-white">Search</button>
          </div>
        </div>
      </main>
      <div className="container mx-auto md:px-12">
        <section className="py-10">
          <Title text={"Our Apartments"} />
          <div className="grid md:grid-cols-2 grid-rows-2 gap-6 px-4 text-white">
            <Link href={'/apartments#rooms'}>
            <div className="bg-[url(../public/assets/room3.jpeg)] row-span-2 min-h-[20rem] relative bg-cover bg-bottom before:absolute before:w-full before:h-full before:bg-black before:opacity-40 flex items-end cursor-pointer">
              <div className="flex justify-between px-8 py-8 text-2xl text-bold">
                <span className="z-10">Rooms (3)</span>
                <img src="" alt="" />
              </div>
            </div>
            </Link>
            <Link href={'/apartments#penthouse'}>
            <div className="bg-[url(../public/assets/penthouse.jpeg)]  min-h-[20rem] bg-cover bg-bottom relative before:absolute before:w-full before:h-full before:bg-black before:opacity-40 flex items-end cursor-pointer">
              <div className="flex justify-between px-8 py-8 text-2xl text-bold">
                <span className="z-10">Penthouse (1)</span>
                <img src="" alt="" />
              </div>
            </div>
            </Link>
            <Link href={'/apartments#suite'}>
            <div className="bg-[url(../public/assets/home.jpeg)]  min-h-[20rem] bg-cover bg-bottom relative before:absolute before:w-full before:h-full before:bg-black before:opacity-40 flex items-end cursor-pointer">
              <div className="flex justify-between px-8 py-8 text-2xl text-bold">
                <span className="z-10">Suite (3)</span>
                <img src="" alt="" />
              </div>
            </div>
            </Link>
          </div>
        </section>
        <section className="px-10 py-10">
          <Title text={"Why Choose Us"} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Feature
              header={"Affordable Prices"}
              src="blue-icon.png"
              text={"Our prices are 100% affordable & budget friendly"}
            />
            <Feature
              header={"Uninterrupted power supply"}
              src="yellow-icon.png"
              text={
                "We provided 24/7 power supply at all our apartments. This ensures all electrical appliances such as Air-conditioner, TV, Fridge, etc, are functioning well."
              }
            />
            <Feature
              header={"Secured & Comfortable"}
              src="green-icon.png"
              text={
                "Alphamsa apartments are suited in a secured location with comfortable ambience. Do rest assured to have a pleasant stay."
              }
            />
            <Feature
              header={"Excellent Customer Service"}
              src="black.png"
              text={
                "At Aphlamsa apartments our customer is our pride, and we ensure that they have a delightful stay with on demand customer services to cateer to their needs."
              }
            />
          </div>
          <div className="flex items-center justify-center py-6">
            <a href="https://wa.me/08037181261" className="bg-black flex px-16 py-2 justify-center items-center">
              <button className="bg-black  text-white mr-2">
                Book Now
              </button>
              <img src={require('../public/icons/ArrowRight.png').default.src} alt="" className="max-h-[1rem]" />
            </a>

          </div>
        </section>
      </div>
    </div>
  );
}
