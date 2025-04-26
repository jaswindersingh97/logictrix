import React from 'react';
import { FaFileAlt } from 'react-icons/fa'; // For doc and video icons

function Preview({payload}) {
//   const payload = {
//     messageType: "Pre-approved",
//     type: "doc", // 'image', 'video', 'doc', or null
//     messageText: "Hi {{1}}, please find details in attached pdf as discussed over call and click on demo link to explore demo. id: demo password: 1289 Thank You {{2}}",
//     media: "https://example.com/sample.pdf" // Replace with correct URL
//   };

  const renderMedia = () => {
    if (!payload.type) return null;

    if (payload.type === 'Image' && payload.media) {
      return (
        <img
          src={payload.media}
          alt="Preview"
          className="w-full h-[200px] object-cover rounded-t-xl"
        />
      );
    }

    if (payload.type === 'Document' && payload.media ) {
      return (
        <a href={payload.media} download target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center h-[200px] bg-gray-100 rounded-t-xl">
          <FaFileAlt className="text-5xl text-blue-500" />
          <p className="text-gray-600 mt-2">Download Document</p>
        </a>
      );
    }

    if (payload.type === 'Video' && payload.media) {
      return (
        <div className="relative w-full h-[200px] bg-black rounded-t-xl overflow-hidden">
          <video
            src={payload.media}
            poster="https://via.placeholder.com/400x200.png?text=Video+Thumbnail" // you can change this or extract a thumbnail
            className="w-full h-full object-cover"
            controls
          />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="container h-fit p-1 flex justify-center">
      <div className="w-full bg-white shadow-2xl shadow-black/30 rounded-xl overflow-hidden">
        {renderMedia()}
        <div className="p-4 text-gray-700 text-sm">
          {/* {payload.messageText} */}
          <div dangerouslySetInnerHTML={{ __html: payload.messageText }} />

        </div>
      </div>
    </div>
  );
}

export default Preview;
