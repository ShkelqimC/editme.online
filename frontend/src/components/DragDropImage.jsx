import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Edit } from "../pages/Edit/Edit";
import { v4 as uuidv4 } from "uuid";

export function DragDropImage() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageData, setImageData] = useState({});
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (imageUrl !== null) {
      debugger;
      navigate(`/Edit/${imageData.id}`, {
        state: {
          data: imageData,
        },
      });
    }
  }, imageUrl);

  const handleUpload = (event) => {
    const uploadedImage = event.target.files[0];
    const imgUrl = URL.createObjectURL(event.target.files[0]);
    debugger;
    setImage(uploadedImage);
    setImageUrl(imgUrl);
    setImageData((prevImageData) => {
      return {
        ...prevImageData,
        id: uuidv4(),
        url: imgUrl,
        img: uploadedImage,
      };
    });
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleUpload(event);
  };
  return (
    <>
      {!imageUrl && (
        <div
          className="images dropzone text-xl border-dashed border-2 border-black w-80 flex flex-col items-center justify-center mx-auto rounded-lg cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => inputRef.current.click()}
        >
          <h1>Drag and Drop image to upload</h1>
          <h1>or</h1>
          <input
            type="file"
            onChange={(event) => {
              handleUpload(event);
            }}
            hidden
            ref={inputRef}
          />
          <h1>
            <span className="font-bold">Click</span> to Select image
          </h1>
        </div>
      )}
    </>
  );
}
