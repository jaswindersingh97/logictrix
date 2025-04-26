import React ,{useState, useRef} from 'react'
import RichTextEditor from './RichTextEditor';
import MediaInput from './MediaInput';
function InsideModal({closeModal}) {
    const [values, setValues] = useState({
        messageType:"Pre-approved",
        type:null,
        messageText:"",
        media:""
    });
    const editorRef = useRef();

    const messageTypes= [{
        messageType:"Pre-approved",
        text:"Pre-approved template message"
    },
    {
        messageType:"Regular",
        text:"Regular message"
    }
    ];
    const types = ["Text", "Image", "Video", "Document"];
    const saveText = () => {
        const content = editorRef.current.getContent();
        setValues((prev)=>({...prev,messageText:content}));
      };
    const setMedia = (url) =>{
        setValues((prev)=>({...prev, media:url}))
    }

  return (
    <div className='container flex flex-col w-[70vw]  '>
        <div className='header flex justify-between border-b p-4 border-gray-400'>
            <h1 className='text-2xl text-blue-500'>Configure Welcome Message</h1>
            <button className='text-2xl text-blue-500' onClick={closeModal}>&times;</button>
        </div>      
        <div className='body p-4 flex overflow-y-auto h-[80vh]'>
            <div className='left flex flex-col w-[60%]'>
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
                    {values.messageType === "Regular" &&
                    <div> 
                    <div className='data-type '>
                        <p className='text-gray-500 p-2'>Type</p>
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
                    {values.type !== null && types.some((type)=>(type == values.type)) && 
                    <div className='w-[100%] flex flex-col'>
                        <RichTextEditor ref={editorRef} />
                    </div>}
                    {values.type == "Image" && <div><MediaInput setMedia={setMedia} mediaType={"image"}/></div>}
                    {values.type == "Video" && <div><MediaInput setMedia={setMedia} mediaType={"video"}/></div>}
                    {values.type == "Document" && <div><MediaInput setMedia={setMedia} mediaType={"doc"}/></div>}
                    </div>}
                    {values.messageType === "Pre-approved" && <div>hi</div>}
                </form>
            </div>
            <div className='right'>
                
            </div>
        </div>      
        <div className='footer flex justify-end border-t p-2 gap-2 border-gray-400'>
            <button className='py-2 px-8 border border-gray-400'>Cancel</button>
            <button onClick={saveText} className='px-8 bg-blue-500 text-white'>Save</button>

        </div>      
    </div>
  )
}

export default InsideModal
