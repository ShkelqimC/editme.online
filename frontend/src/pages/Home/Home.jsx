import React, { useState, useEffect } from "react";
import "./home.css";
import { DragDropImage } from "../../components/DragDropImage";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Home = () => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <>
      <div className="homeContainer m-auto text-center py-10">
        <div className="hero p-8">
          <div className="leftHero text-black flex justify-center flex-col">
            <h1 className="text-5xl text-black">
              Free & easy to use online image editor
            </h1>
            <p className="infoText text-xl pt-4">
              Edit your photos, add photo effects, text and more with just a few
              clicks. No popups, no ads.<span>100% free </span>{" "}
            </p>
          </div>
        </div>

        <DragDropImage />
        {/* <div
          className={`images dropZone grid w-full  pl-3 ${
            showDropZone ? "bg-gray-400 rounded-3xl pointer-events-none" : ""
          } opacity-60 w-80 mx-auto`}
          onDragOver={(e) => {
            e.preventDefault();
            // setShowDropZone(true)
            //  console.log("onDragOV'ER")
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            console.log("onENTER");
            setShowDropZone(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            console.log("onLEAVE");
            setShowDropZone(false);
          }}
          onDrop={drop}
          // onClick={handleClick}
        > */}
        {/* {showDropZone ?  <h1 className={`text-3xl `}>Drop here</h1> :  <p className={`text-xl`}>Drag & drop your image here or click to upload</p>} */}
        {/* </div> */}

        <div className="examples bg-blue-300">div3</div>

        {/* <form>
          <p>
          <label htmlFor='image'> Browse images  </label>
          <input
          type="file"
          id='image'
          accept='.png, .jpg, .jpeg'
          onChange={changeHandler}
          />
          </p>
          <p>
          <input type="submit" label="Upload" />
          </p>
          </form>
          {fileDataURL ?
            <p className="img-preview-wrapper">
            {
              <img src={fileDataURL} alt="preview" />
            }
          </p> : null} */}
      </div>
    </>
  );
};

export default Home;
