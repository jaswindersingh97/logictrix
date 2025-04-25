import React from 'react'
import optin from './../assets/opt in.svg';
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
    <div className='container flex'>
      <div className='heading flex gap-4'>
        <img src={payload.heading.image} />
        <div className='right'>
            <h1 className='text-2xl text-blue-500 font-bold'>{payload.heading.h1}</h1>
            <p>{payload.heading.p}</p>
        </div>
      </div>
    </div>
  )
}

export default OptInOutCard
