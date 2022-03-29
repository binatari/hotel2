import React from "react";
import Video from "./Video";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
     <div className="flex items-center cursor-pointer" onClick={()=>setShowModal(true)}>
     <img src={require('../public/assets/play.png').default.src} alt="" className="max-h-[2rem]"/>
            <p className="hidden md:block text-xl ml-2">Watch video</p>
    </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
               <button className={`w-10 h-12 py-1 absolute text-3xl top-10 right-6 opened`} onClick={()=>setShowModal(false)}>
      <svg className='w-full h-full' viewBox="0 0 100 100">
        <path class="stroke line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="stroke line2" d="M 20,50 H 80" />
        <path class="stroke line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
      </button>
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <Video/>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black">
             
          </div>
        </>
      ) : null}
    </>
  );
}