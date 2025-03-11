"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modal from "../modal/modal";


export default function page() {

 /**
 * Next.js router instance for navigation.
 *
 * @constant {Object} router - The Next.js router instance.
 */
const router = useRouter();

  /**
 * Navigates the user to the "Anasayfa" (Homepage).
 *
 * @function anasayfa
 */
const anasayfa = () => {
router.push("/anasayfa");
};

/**
 * State to manage the visibility of a modal.
 *
 * @constant {boolean} isModalOpen - Determines if the modal is open (true) or closed (false).
 * @constant {Function} setIsModalOpen - Function to update the modal's visibility state.
 */
const [isModalOpen, setIsModalOpen] = useState(false);

return( 
<div>
<div>
<aside className="w-30 h-screen bg-radial from-[#264061] from-68% to-[#264061] text-white flex flex-col items-center py-6 fixed left-0 top-0">  
      <div className="flex flex-col items-center mb-8 mt-2 ">
        <Image src="/avatar.png" alt="avatar" width={75} height={75} className="rounded-full mb-2" />
        <p className="text-sm">Efe Bitgen</p>
      </div>
      <nav className="flex flex-col space-y-6 mt-35">   
        <button className="p-3 hover:bg-gray-900 rounded-lg" name="anasayfa" type="submit" onClick={anasayfa}><Image src="/home1.png" alt="home" width={30} height={30} />
        </button>
        <button className="p-3 hover:bg-gray-900 rounded-lg"><Image src="/settings.png" alt="settings" width={30} height={30} />
        </button>
        <button className="p-3 hover:bg-gray-900 rounded-lg"><Image src="/live.png" alt="live" width={30} height={30} />
        </button>
        <button className="p-3 hover:bg-gray-900 rounded-lg" name="takvim" type="submit" ><Image src="/calendar1.png" alt="calendar" width={30} height={30} />
        </button>
      </nav>
</aside>
</div>
<header className="bg-gray-900 flex justify-end">
    <div><Image className="m-5 justify-right items-right" src="/spacex.png" alt="space" width={214} height={26} /></div>
</header>
  <main className="w-full h-screen pl-30 bg-gray-900">
    <div className="text-3xl text-white font-bold pt-5 pl-5">Schedule</div>
    <div className="h-15 bg-white rounded-lg mt-5 ml-5 mr-5 flex items-center">
    <div className="flex items-center justify-right w-full">
    <button className="p-3 rounded-lg ml-5"><Image src="/sol.png" alt="sol" width={8} height={14} /></button>
    <h2 className="text-[#23344A] text-bold ml-5 mr-5 font-bold">December 2023</h2>
    <button className="p-3 rounded-lg"><Image src="/sag.png" alt="sag" width={8} height={14} /></button>
    </div>
    <div className="flex pr-20 font-bold">
    <h2 className="text-[#23344A] text-bold ml-5 mr-5">Weekly</h2>
    <h2 className="text-[#23344A] text-bold ml-5 mr-5">Monthly</h2>
    </div>
    <button className="flex mr-10"><Image src="/filtre.png" alt="filtre" width={20} height={20} /></button>
    </div>
    <div className="p-5">
      <div className="grid grid-cols-7 gap-1 border-t-10 border-x-1 rounded-none border-white p-2 bg-white text-gray-200">
        {Array.from({ length: 35 }).map((_, index) => (
          <div key={index} className="relative border border-gray-700 p-4 min-h-[100px] bg-gray-900">
          <span className="absolute top-1 left-2 text-xs text-gray-400">{index + 1}</span>
            {index === 0 && (
              <div className="absolute inset-x-0 top-2 flex flex-col items-center text-center">
                <button className="bg-gray-700 text-xs h-5 mt-3 rounded hover:bg-gray-800 w-full" name="etk1" onClick={() => setIsModalOpen(true)}>13:27</button>
                <button className="bg-gray-700 text-xs h-5 rounded mt-1 hover:bg-gray-800 w-full" name="etk2" onClick={() => setIsModalOpen(true)}>13:30</button>
                <button className="bg-gray-700 text-xs h-5 rounded mt-1 hover:bg-gray-800 w-full" name="etk3" onClick={() => setIsModalOpen(true)}>16:30</button>
              </div>
            )}
            {index === 1 && (
              <div className="absolute inset-x-0 top-2 flex justify-center text-center">
                <button className="bg-gray-700 text-xs h-5 mt-15 rounded hover:bg-gray-800 w-full" name="etk4" onClick={() => setIsModalOpen(true)}>16:30</button>
              </div>
            )}
            {index === 7 && (
              <div className="absolute inset-x-0 top-2 flex justify-center text-center">
                <button className="bg-gray-700 text-xs h-5 mt-10 rounded hover:bg-gray-800 w-full" name="etk5"  onClick={() => setIsModalOpen(true)}>13:30</button>
              </div>
            )}
            {index === 8 && (
              <div className="absolute inset-x-0 top-2 flex flex-col items-center text-center">
                <button className="bg-gray-700 text-xs h-5 mt-15 rounded mt-1 hover:bg-gray-800 w-full" name="etk6" onClick={() => setIsModalOpen(true)}>16:30</button>
              </div>
            )}
            {index ===9 && (
              <div className="absolute inset-x-0 top-2 flex flex-col items-center text-center">
                <button className="bg-gray-700 text-xs h-5 mt-10 rounded hover:bg-gray-800 w-full" name="etk7" onClick={() => setIsModalOpen(true)}>13:30</button>
              </div>
            )}
            {index === 14 && (
              <div className="absolute inset-x-0 top-2 flex justify-center text-center">
                <button className="bg-gray-700 text-xs h-5 mt-5 rounded hover:bg-gray-800 w-full" name="etk8" onClick={() => setIsModalOpen(true)}>13:27</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>   
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="justify-between items-center">
        <Image src="/resim.png" width={580} height={336} alt="resim1"/>
        <p className="flex m-2 text-gray-600 text-white font-SF Pro">Embark on an extraordinary journey beyond Earth's bounds with our meticulously crafted spaceflight experience.
          Our state-of-the-art spacecraft ensures a safe and awe-inspiring voyage, offering a unique opportunity to witness the majesty of the cosmos firsthand.
          With expert guidance and cutting-edge technology, our mission guarantees an unforgettable adventure, where the wonders of space become your reality.</p>
        </div>
      </Modal>
  </main>
</div>
    );
}
