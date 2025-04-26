import React from 'react';

function MediaInput({ mediaType, setMedia }) {
//   const [preview, setPreview] = useState(null);
  const fileTypes = {
    image: {
      accept: 'image/png, image/jpeg',
      help: 'Supported File Types: png or jpeg',
    },
    video: {
      accept: 'video/mp4, video/webm',
      help: 'Supported File Types: mp4 or webm',
    },
    doc: {
      accept: '.pdf, .doc, .docx',
      help: 'Supported File Types: pdf, doc, or docx',
    },
  };

  const { accept, help } = fileTypes[mediaType] || fileTypes.image;

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file){
        const tempUrl = URL.createObjectURL(file);
        // setPreview(tempUrl);
        setMedia(tempUrl);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    if (url.startsWith('http')) {
    //   setPreview(url);
      setMedia(url)
    } else {
    //   setPreview(null);
      setMedia(null);
    }
  };

  return (
    <div className="container flex flex-col gap-4 p-4 border rounded max-w-lg">
      <div>
        <h1 className="text-2xl font-semibold">Upload Media File</h1>
        <p className="text-sm text-[#68687B]">{help}</p>
        <p className="text-sm text-[#68687B]">Maximum file size: <span>5 MB</span></p>
      </div>

      <label className="cursor-pointer bg-blue-500 text-white p-2 rounded inline-block w-fit">
        Upload from Computer
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <div className="text-center text-sm text-[#68687B]">or</div>

      <div className="flex flex-col gap-1">
        <label className="text-[#68687B] text-sm">Media URL</label>
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Paste media URL"
          onChange={handleUrlChange}
        />
      </div>

      {/* {preview && (
        <div className="mt-4">
          <p className="text-[#68687B] text-sm mb-1">Preview:</p>
          {mediaType === 'image' && (
            <img src={preview} alt="Preview" className="max-w-full h-auto border rounded" />
          )}
          {mediaType === 'video' && (
            <video src={preview} controls className="w-full border rounded" />
          )}
          {mediaType === 'doc' && (
            <iframe src={preview} className="w-full h-64 border rounded" title="Document Preview" />
          )}
        </div>
      )} */}
    </div>
  );
}

export default MediaInput;
