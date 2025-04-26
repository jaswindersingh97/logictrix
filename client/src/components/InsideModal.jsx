import React ,{useState, useRef, useEffect} from 'react'
import RichTextEditor from './RichTextEditor';
import MediaInput from './MediaInput';
import Preview from './Preview';
function InsideModal({closeModal}) {
    const [values, setValues] = useState({
        messageType:"Pre-approved",
        type:null,
        messageText:null,
        media:null,
    });
    const templates = [
        
        {
            name:"Template1",
            "messageType": "Pre-approved",
            "type": "Image",
            "messageText": "<p>Hi&nbsp;</p><p><br></p><p>hope you are doing well&nbsp;</p><p><br></p><p><strong>thank you&nbsp;</strong></p><p><strong>jaswinder singh<span id=\"jodit-selection_marker_1745666233805_7663788415267873\" data-jodit-temp=\"true\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span><br></strong>﻿</p>",
            "media": "https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_640.png"
        },
        {
            name:"Template2",
            "messageType": "Pre-approved",
            "type": "Image",
            "messageText": "<p>Hi&nbsp;</p><p><br></p><p>hope you are doing well&nbsp;</p><p><br></p><p><strong>thank you&nbsp;</strong></p><p><strong>jaswinder singh<span id=\"jodit-selection_marker_1745666233805_7663788415267873\" data-jodit-temp=\"true\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span><br></strong>﻿</p>",
            "media": "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
        },
        {
            name:"Template3",
            "messageType": "Pre-approved",
            "type": "Image",
            "messageText": "<p>Hi&nbsp;</p><p><br></p><p>hope you are doing well&nbsp;</p><p><br></p><p><strong>thank you&nbsp;</strong></p><p><strong>jaswinder singh<span id=\"jodit-selection_marker_1745666233805_7663788415267873\" data-jodit-temp=\"true\" data-jodit-selection_marker=\"start\" style=\"line-height: 0; display: none;\">﻿</span><br></strong>﻿</p>",
            "media": "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        }


    ]
    const [template,setTemplate] = useState(templates[0])

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
    console.log(values)
    const saveText = () => {
        const content = editorRef.current.getContent();
        setValues((prev)=>({...prev,messageText:content}));
      };
      const handleContentChange = (newContent) => {
        setValues((prev) => ({ ...prev, messageText: newContent }));
      };
      
    const setMedia = (url) =>{
        setValues((prev)=>({...prev, media:url}))
    }
    useEffect(() => {
        if(template){
            setValues((prev) => ({
                ...prev,
                messageType: template.messageType,
                type: template.type,
                messageText: template.messageText,
                media: template.media,
              }));
        }
      }, [template]);
      

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
                                      onChange={(e) => setValues((prev)=>({ messageType:item.messageType}))}
                                    />
                                    <span>{item.text}</span>
                                </label>
                            ))
                        }
                    </div>
                    {values.messageType === "Regular" &&
                    <div className='gap-2 flex flex-col'> 
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

                    </div>}
                    {values.messageType === "Pre-approved" && template && <div className='flex flex-col gap-3 p-4'>
                        <p>Template Name:</p>
                        <select className='bg-blue-500 p-2 w-[400px] rounded-l text-white' value={template?.name} onChange={(e) => {
                          const selectedTemplate = templates.find(item => item.name === e.target.value);
                          setTemplate(selectedTemplate);
                        }}>
                          {templates.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>
                          ))}
                        </select>

                    </div>}

                    {values.type == "Image" && <div><MediaInput setMedia={setMedia} mediaType={"image"}/></div>}
                    {values.type == "Video" && <div><MediaInput setMedia={setMedia} mediaType={"video"}/></div>}
                    {values.type == "Document" && <div><MediaInput setMedia={setMedia} mediaType={"doc"}/></div>}
                    {values.type !== null && types.some((type)=>(type == values.type)) && <div className='w-[100%] flex flex-col'><RichTextEditor ref={editorRef} onChange={handleContentChange}/></div>}
                </form>
            </div>
            <div className='right flex flex-1 '>
                <Preview payload={values} />
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