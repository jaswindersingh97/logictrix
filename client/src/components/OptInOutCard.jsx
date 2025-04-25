import React from 'react'
import optin from './../assets/opt in.svg';
import configure from './../assets/configure.svg'
import whatsapp from './../assets/whatsapp.svg'
function OptInOutCard() {
    const payload = {
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
        }
    }
  return (
    <div className='container flex flex-col'>
      <div className='heading flex gap-4'>
        <img src={payload.heading.image} />
        <div className='heading-right'>
            <h1 className='text-2xl text-blue-500 font-bold'>{payload.heading.h1}</h1>
            <p>{payload.heading.p}</p>
        </div>
      </div>
      <div className='body flex  p-4 gap-4 box-border'>
        <div className='leftbody gap-2 flex flex-col flex-1 gap-1 bg-[#F7F8FA] justify-between  rounded-xl p-4'>
        <div className='top flex flex-1 gap-1 justify-between'>
        <div className='left left  flex flex-col gap-1'>
            <h1 className='text-xl  font-bold'>{payload.body.left.h1}</h1>
            <p>{payload.body.left.p}</p>
          </div>
          <div className='right button'>
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"/>
              <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all  peer-checked:bg-blue-600 "></div>
            </label>
          </div>
        </div>
        <div className='flex flex-col'>
          <button className= 'flex gap-1 text-white bg-blue-500 w-fit p-3 '>
          <img src={configure} />
          Configure</button>
        </div>
        <div className="message flex">
          <div className="inner-message relative p-4 shadow-xl/50 rounded-xl">
            some message
            <div className="whatsapp-icon bg-green-400 rounded-2xl p-1 absolute -top-3 -left-3 border">
              <img src={whatsapp}/>
            </div>
          </div>
        </div>

        </div>

        <div className='rightbody flex flex-1 p-4 rounded-xl '>

        </div>
      </div>
    </div>
  )
}

export default OptInOutCard
