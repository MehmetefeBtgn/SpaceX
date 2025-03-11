"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function page() { 

  /**
 * Next.js router instance for navigation.
 *
 * @constant {Object} router - The Next.js router instance.
 */
  const router = useRouter();

  /**
 * Navigates the user to the "Takvim" (Calendar) page.
 *
 * @function takvim
 */
  const takvim = () => {
    router.push("/takvim");
  };
  
  /**
 * Navigates the user to the "Anasayfa" (Homepage).
 *
 * @function anasayfa
 */
  const anasayfa = () => {
    router.push("/anasayfa");
  };

return( 
<div>
<div>
<aside className="w-30 h-screen bg-radial from-[#264061] from-68% to-[#264061] text-white flex flex-col items-center py-6 fixed left-0 top-0">  
      <div className="flex flex-col items-center mb-8 mt-2 ">
        <Image src="/avatar.png" alt="avatar" width={75} height={75} className="rounded-full mb-2" />
        <p className="text-sm">Efe Bitgen</p>
      </div>
      <nav className="flex flex-col space-y-6 mt-35">
        <button className="p-3 hover:bg-gray-900 rounded-lg" name="anasayfa" type="submit" onClick={anasayfa}><Image src="/home.png" alt="home" width={30} height={30} />
        </button>
        <button className="p-3 hover:bg-gray-900 rounded-lg" ><Image src="/settings.png" alt="settings" width={30} height={30} />
        </button>
        <button className="p-3 hover:bg-gray-900 rounded-lg"><Image src="/live.png" alt="live" width={30} height={30} />
        </button>
        <button className="p-3 hover:bg-gray-900 rounded-lg" name="takvim" type="submit" onClick={takvim}><Image src="/calendar.png" alt="calendar" width={30} height={30} />
        </button>
      </nav>
</aside>
</div>
<header className="bg-gray-900 flex justify-end">
    <div><Image className="m-5 justify-right items-right" src="/spacex.png" alt="space" width={214} height={26} /></div>
</header>
<main className="bg-gray-900 h-screen">
<div className="bg-gray-900 pl-37">
  <h2 className="text-white text-2xl font-bold mb-4">Upcoming Events</h2>
  <div className="flex gap-9 overflow-x-auto">
    <div className="relative w-40 h-50 flex-shrink-0">
      <Image src="/img1.png" width={145} height={174} alt="CRS-22" className="w-full h-full object-cover rounded-lg" />
      <p className="absolute top-2 left-2 text-white font-bold">CRS-22</p>
      <p className="absolute bottom-2 left-2 text-white text-sm">June 12, 23<br />09:10 PM</p>
    </div>
    <div className="relative w-40 h-50 flex-shrink-0">
      <Image src="/img2.png" width={145} height={174} alt="CRS-22" className="w-full h-full object-cover rounded-lg" />
      <p className="absolute top-2 left-2 text-white font-bold">CRS-22</p>
      <p className="absolute bottom-2 left-2 text-white text-sm">June 12, 23<br />09:10 PM</p>
    </div>
    <div className="relative w-40 h-50 flex-shrink-0">
      <Image src="/img3.png" width={145} height={174} alt="CRS-22" className="w-full h-full object-cover rounded-lg" />
      <p className="absolute top-2 left-2 text-white font-bold">CRS-22</p>
      <p className="absolute bottom-2 left-2 text-white text-sm">June 12, 23<br />09:10 PM</p>
    </div>
    <div className="relative w-40 h-50 flex-shrink-0">
      <Image src="/img4.png" width={145} height={174} alt="CRS-22" className="w-full h-full object-cover rounded-lg" />
      <p className="absolute top-2 left-2 text-white font-bold">CRS-22</p>
      <p className="absolute bottom-2 left-2 text-white text-sm">June 12, 23<br />09:10 PM</p>
    </div>
    <div className="relative w-40 h-50 flex-shrink-0">
      <Image src="/img5.png" width={145} height={174} alt="CRS-22" className="w-full h-full object-cover rounded-lg" />
      <p className="absolute top-2 left-2 text-white font-bold">CRS-22</p>
      <p className="absolute bottom-2 left-2 text-white text-sm">June 12, 23<br />09:10 PM</p>
    </div>
    <div className="relative w-40 h-50 flex-shrink-0">
      <Image src="/img6.png" width={145} height={174} alt="CRS-22" className="w-full h-full object-cover rounded-lg" />
      <p className="absolute top-2 left-2 text-white font-bold">CRS-22</p>
      <p className="absolute bottom-2 left-2 text-white text-sm">June 12, 23<br />09:10 PM</p>
    </div>
    <div className="relative w-40 h-50 flex-shrink-0">
      <Image src="/img7.png" width={145} height={174} alt="CRS-22" className="w-full h-full object-cover rounded-lg" />
      <p className="absolute top-2 left-2 text-white font-bold">CRS-22</p>
      <p className="absolute bottom-2 left-2 text-white text-sm">June 12, 23<br />09:10 PM</p>
    </div>
  </div>
</div>
    <h2 className="bg-gray-900 text-2xl font-bold pt-8 ml-37 text-white">Recent Launch</h2>
    <div className="flex bg-gray-900 text-white p-4 rounded-lg ml-32">
      <div className="flex flex-1 bg-[#36445B80] p-4 rounded-l-lg border-r-gray-900 border-t-gray-900 border-b-gray-900 border-l-gray-900 border-r-4">
        <Image src="/ucak.png" width={152} height={146} alt="ucak" className="w-28 h-28 rounded-lg object-cover"/>
        <div className="px-4">
          <h2 className="font-semibold text-lg">SXM-8 First Try</h2>
          <p className="text-sm text-gray-300">
            Embark on an extraordinary journey beyond Earth's bounds with our meticulously crafted spaceflight experience.
            Our state-of-the-art spacecraft ensures a safe and awe-inspiring voyage...
          </p>
        </div>
      </div>
      <div className="bg-[#36445B80] p-4 rounded-r-lg text-gray-400 text-sm w-48 flex flex-col justify-center">
        <p className="font-semibold text-gray-300">Jul 05, 2023</p>
        <p>On Saturday, July 1 at 11:12 a.m. ET, SpaceX launched the ESA Euclid mission.</p>
      </div>
    </div>
    <div className="flex bg-gray-900 text-white p-4 rounded-lg shadow-lg ml-32">
      <div className="flex flex-1 bg-[#36445B80] p-4 rounded-l-lg border border-r-gray-900 border-t-gray-900 border-b-gray-900 border-l-gray-900 border-r-4">
        <Image src="/ucak2.png" width={152} height={146} alt="ucak" className="w-28 h-28 rounded-lg object-cover"/>
        <div className="px-4">
          <h2 className="font-semibold text-lg">SXM-8 First Try</h2>
          <p className="text-sm">
            Embark on an extraordinary journey beyond Earth's bounds with our meticulously crafted spaceflight experience.
            Our state-of-the-art spacecraft ensures a safe and awe-inspiring voyage...
          </p>
        </div>
      </div>
      <div className="bg-[#36445B80] p-4 rounded-r-lg text-gray-400 text-sm w-48 flex flex-col justify-center">
        <p className="font-semibold text-gray-300">Jul 05, 2023</p>
        <p>On Saturday, July 1 at 11:12 a.m. ET, SpaceX launched the ESA Euclid mission.</p>
      </div>
    </div>

</main>




</div>
    );
}
