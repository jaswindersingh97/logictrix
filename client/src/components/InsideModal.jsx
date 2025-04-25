import React ,{useState} from 'react'

function InsideModal({closeModal}) {
    const [values, setValues] = useState({
        messageType:"Pre-approved",
        type:"Text",
    });
    const messageTypes= [{
        messageType:"Pre-approved",
        text:"Pre-approved template message"
    },
    {
        messageType:"Regular",
        text:"Regular message"
    }
    ];
    const types = ["Text", "Image", "Video", "Document"]
  return (
    <div className='container flex flex-col w-[70vw]  '>
        <div className='header flex justify-between border-b p-4 border-gray-400'>
            <h1 className='text-2xl text-blue-500'>Configure Welcome Message</h1>
            <button className='text-2xl' onClick={closeModal}>&times;</button>
        </div>      
        <div className='body p-4 flex'>
            <div className='left'>
                <form className='gap-4 flex flex-col'>
                    <div className='message-type'>
                        {
                            messageTypes.map((item,index)=>(
                                <label key={index} className="flex items-center space-x-2">
                                    <input
                                      type="radio"
                                      value={item.messageType}
                                      checked={values.messageType === item.messageType}
                                      onChange={(e) => setValues((prev)=>({...prev, messageType:item.messageType}))}
                                    />
                                    <span>{item.text}</span>
                                </label>
                            ))
                        }
                    </div>
                    <div className='data-type '>
                        <p className='text-gray-500'>Type</p>
                        {
                            types.map((item,index)=>(
                                <label key={index} className="flex items-center space-x-2">
                                            <input
                                              type="radio"
                                              value={item}
                                              checked={values.type === item}
                                              onChange={(e) => setValues((prev)=>({...prev, type:item}))}
                                            />
                                            <span>{item}</span>
                                        </label>
                            ))
                        }
                    </div>
                </form>
            </div>
            <div className='right'>
                
            </div>
        </div>      
        <div className='footer flex justify-end border-t p-2 gap-2 border-gray-400'>
            <button className='py-2 px-8 border border-gray-400'>Cancel</button>
            <button className='px-8 bg-blue-500 text-white'>Save</button>

        </div>      
    </div>
  )
}

export default InsideModal
