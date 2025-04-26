import React from 'react';
import image1 from './assets/image1.svg'
import image2 from './assets/image2.svg'
import OptInOutCard from './components/OptInOutCard';
import optin from './assets/opt in.svg';
import optout from './assets/optout.svg';


const App = () => {
  const payload = [
    {
          heading:{
              image:optin,
              h1:"Opt-in",
              p:"A text that explains what opt-in is",
          },
          body:{
              left:{
              h1:"Opt-in Response",
              p:"Setup a response message for opt-in user keywords",
              },
              right:{
                 h1:"Opt-in Keywords",
                 p:"The user will have to type exactly one of these messages on which they should be automatically opted-in"
              }
          },
          ModalState:false
      },
      {
        heading:{
            image:optout,
            h1:"Opt-out",
            p:"A text that explains what opt-out is",
        },
        body:{
            left:{
            h1:"Opt-out Response",
            p:"Setup a response message for opt-out user keywords",
            },
            right:{
               h1:"Opt-out Keywords",
               p:"The user will have to type exactly one of these messages on which they should be automatically opted-out"
            }
        },
        ModalState:false
    }
    ]
  return (
    <div className="container flex  w-full ">
      <div className="left w-[15%] "></div>
      <div className="right flex-1  border border-gray-200  flex flex-col">
        <nav className="bg-white border-gray-200 border-b">
          <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
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
        <div className='heading flex items-center  justify-between px-8'>
        <h1 className='font-bold text-4xl  text-blue-500'>Opt-In Management</h1>
          <div className='flex items-start'>
            <img className='w-[100px]' src={image1}/>
            <img className='w-[200px] h-[150px] object-cover object-top' src={image2}/>
          </div>
        </div>
        <div className='innerbody  border-gray-200 border rounded-xl p-4'>
          {payload.map((item,index)=>(
            <OptInOutCard key={index} payload={item}/>
          ))}
        </div>  
        </div>
      </div>
    </div>
  );
};

export default App;
