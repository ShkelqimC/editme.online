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
          fileReader.setFileDataURL(result);
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
       

        <div className="examples bg-blue-300">div3</div>

     
      </div>
    </>
  );
};

export default Home;
