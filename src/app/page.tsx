/**
 * this is for Product List page
 * @author Ilma Dinnia Alghani <ilma.alghani@gmail.com>
 * @returns {React.ReactElement}
 */

import Header from '@/components/commons/header/Header'
import Image from 'next/image'
import Desk from '@assets/images/desk.png';
import Person from '@assets/images/person.png';
import Sidebar from '@/components/commons/Sidebar';

export default function Home() {
  return (
    <>
      <Header />
      <div className='xl:flex'>
        <Sidebar />
        <div className='bg-white font-customFont shadow-md m-auto xl:w-10/12 p-4 rounded-md h-screen xl:my-8 justify-center items-center grid'>
          <div className='text-black font-semibold'> <h2 className='text-black font-customFont font-semibold text-2xl '>Dashboard Online Test Senior Frontend Engineer</h2>
            <div className=' text-2xl'>By : Ilma Dinnia Alghani</div>
          </div>
          <div >
            <div className='relative z-10 right-0'>
              <Image className="absolute bottom-0 right-0" src={Person} alt='' width={200} height={300} />
            </div>
            <div className='relative z-0 '>
              <Image className="absolute bottom-0 right-0" src={Desk} alt='' width={500} height={300} />
            </div>
          </div >
        </div >
      </div>

    </>
  )
}
