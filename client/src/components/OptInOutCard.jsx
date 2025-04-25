import React, { useState } from 'react'
import configure from './../assets/configure.svg'
import whatsapp from './../assets/whatsapp.svg'
import plus from './../assets/plus.svg';
import Modal from './Modal';
import InsideModal from './InsideModal';
function OptInOutCard({payload}) {
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState(["keyword","keyword","keyword","keyword","keyword","keyword","keyword",]);
    const onsubmit = (e) =>{
      e.preventDefault();
      setKeywords((prev)=>([...prev , keyword]));
      setKeyword("");
    }
    const deleteKeyword = (ind) =>{
      setKeywords((prev)=>(prev.filter((item,index)=>(index!==ind))))
    }
    const [modal,setModal] =useState(true);
    const closeModal= () =>{
      setModal(false)
    }
    const openModal = () =>{
      setModal(true)
    }
  return (
    <div className='container flex flex-col'>
    <Modal isOpen={modal} onClose={closeModal}>
      <InsideModal closeModal={closeModal}/>
    </Modal>
      <div className='heading flex gap-4'>
        <img src={payload.heading.image} />
        <div className='heading-right'>
            <h1 className='text-2xl text-blue-500 font-bold'>{payload.heading.h1}</h1>
            <p>{payload.heading.p}</p>
        </div>
      </div>
      <div className='body flex  p-4 gap-4 box-border'>
        <div className='leftbody gap-4 flex flex-col flex-1  bg-[#F7F8FA] justify-between  rounded-xl p-5'>
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
          <button onClick={openModal} className= 'flex gap-1 text-white bg-blue-500 w-fit p-3 '>
          <img src={configure} />
          Configure</button>
        </div>
        <div className="message flex">
          <div className="inner-message border relative p-5 shadow-xl/50 rounded-xl">
            Hi! Thanks for connecting. Someone from our team will get in touch soon.
            <button className="whatsapp-icon bg-green-400 rounded-2xl p-1 absolute -top-3 -left-3 border">
              <img src={whatsapp}/>
            </button>
          </div>
        </div>

        </div>

        <div className='rightbody gap-2 flex flex-1 flex-col p-4 rounded-xl '>
          <div className='group1'>
            <h1 className='text-xl  font-bold'>{payload.body.right.h1}</h1>
            <p>{payload.body.right.p}</p>
          </div>
          <div className='group2 w-full  box-border gap-2 flex flex-col'>
            <form onSubmit={onsubmit} className=' adding keywords flex gap-2 p-4  rounded-xl border-gray-400 border'>
              <img src={plus}/>
              <input type='text' value={keyword} placeholder='# Add keyword' className='w-full outline-none' onChange={(e)=>setKeyword(e.target.value)}/>
            </form>
            <div className='keywords w-full box-border flex-wrap-reverse flex gap-2 wrap-normal'>
              {keywords.map((item,index)=>(
                <div key={index} onClick={()=>deleteKeyword(index)} className='keyword hover:cursor-pointer hover:outline-1  flex gap-1 bg-[#0F62FE12] p-4'>
                  {item}
                  <button>x</button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OptInOutCard
