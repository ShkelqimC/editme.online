import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Edit } from "../pages/Edit/Edit";
import { v4 as uuidv4 } from "uuid";
import { zustandstore } from "../app/store";
import ToastMessage from "./Alert";

export function DragDropImage() {
  const [imageURL, imageData, setImageURL, setImageData] = zustandstore(
    (state) => [
      state.imageURL,
      state.imageData,
      state.setImageURL,
      state.setImageData,
    ]
  );
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  // const [imageData, setImageData] = useState({});
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    // debugger;
    if (imageUrl !== null) {
      navigate(`/Edit/${imageData.id}`, {
        state: {
          data: imageData,
        },
      });
    }
  }, [imageData, imageUrl, navigate]);

  async function handleUpload(e, event) {
    await e.preventDefault();

    const uploadedImage = event.files[0];
    if (!uploadedImage.type.includes("image")) {
      return ToastMessage("error", "Only images can be uploaded.");
      debugger;
    }
    var imgUrl = URL.createObjectURL(event.files[0]);
    setImageData({
      id: uuidv4(),
      url: imgUrl,
      img: uploadedImage,
    });
    setImageURL(imgUrl);
    setImage(uploadedImage);
    setImageUrl(imgUrl);
    // setImageData((prevImageData) => {
    //   return {
    //     ...prevImageData,
    //     id: uuidv4(),
    //     url: imgUrl,
    //     img: uploadedImage,
    //   };
    // });
  }
  // console.log(imageData, "imageData");
  // console.log(imageURL, "imageURL");

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    debugger;
    handleUpload(event);
  };
  return (
    <>
      {!imageUrl && (
        <div
          className="text-xl border-dashed border-4 border-gray bg-blue text-lightgray dark:bg-blue w-full h-64 flex flex-col items-center justify-center mx-auto rounded-lg cursor-pointer select-none"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => handleUpload(e, e?.dataTransfer)}
          // onDrag={""}
          onClick={() => inputRef.current.click()}
        >
          <h1>Drag and Drop image to upload</h1>
          <h1>or</h1>
          <input
            type="file"
            onChange={(event) => {
              handleUpload(event, event.target);
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
