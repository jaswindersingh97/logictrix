import React from 'react';
import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import OptInOutCard from './components/OptInOutCard';

const App = () => {
  return (
    <div className="container flex  w-full h-[100vh]">
      <div className="left w-[15%] "></div>
      <div className="right flex-1  border border-gray-200  flex flex-col">
        <nav className="bg-white border-gray-200 border-b">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                Opt-In Management
              </span>
            </a>
            <div className="hidden md:block">
              <button className="mr-2 px-4 py-2 border rounded border-[#68687B] text-[#68687B]">Cancel</button>
              <button className="px-4 py-2 bg-blue-500 rounded-xl text-white">Save</button>
            </div>
          </div>
        </nav>
        <div className='body flex flex-col p-8 h-full'>
        <div className='heading flex items-start justify-between'>
        <h1 className='font-bold text-4xl text-blue-500'>Opt-In Management</h1>
          <div className='flex'>
            <img className='w-[100px]' src={image1}/>
            <img className='w-[200px]' src={image2}/>
          </div>
        </div>
        <div className='innerbody  border-gray-200 border rounded-xl p-4'>
          <OptInOutCard/>
        </div>  
        </div>
      </div>
    </div>
  );
};

export default App;
