import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import SideNavbarItem from "../../components/SideNavbarItem";
import AdjustItem from "../../components/AdjustItem";
import "./edit.css";
import { Slider } from "../../components/Slider";
import BottomAdjustItem from "../../components/BottomAdjustItem";
import Cropper from "react-easy-crop";

import {
  zustandstore,
  selectedBottomOption,
  selectedSideNavOption,
  useActions,
  hasChangedStyles,
  adjust,
} from "../../app/store";

const sideNavbar = [
  {
    name: "Adjust",
    path: "#adjust",
    icon: "",
  },
  {
    name: "Crop",
    path: "",
    icon: "",
  },
  {
    name: "Resolation",
    path: "#resolation",
    icon: "",
  },
  {
    name: "Text",
    path: "#text",
    icon: "",
  },
  {
    name: "Shape",
    path: "#shape",
    icon: "",
  },
  {
    name: "Collage",
    path: "#collage",
    icon: "",
  },
  {
    name: "Convert",
    path: "#convert",
    icon: "",
  },
];

export function Edit() {
  const bottomOption = zustandstore((state) => state.adjust);

  const [
    selectedBottomOption,
    setSelectedBottomOption,
    setSliderValue,
    selectedSideNavOption,
    setSelectedSideNavOption,
    resetStyles,
    hasChangedStyles,
  ] = zustandstore((state) => [
    state.selectedBottomOption,
    state.setSelectedBottomOption,
    state.setSliderValue,
    state.selectedSideNavOption,
    state.setSelectedSideNavOption,
    state.resetStyles,
    state.hasChangedStyles,
  ]);

  const actions = useActions();

  // const [
  //   setSelectedBottomOption,
  //   setSliderValue,
  //   selectedSideNavOption,
  //   resetStyles,
  //   hasChangedStyles,
  //   setSelectedSideNavOption,
  // ] = [
  //   selectedBottomOption(),
  //   actions.setSliderValue(),
  //   actions.setSelectedSideNavOption(),
  //   actions.resetStyles(),
  //   actions.setSelectedSideNavOption(),
  // ];
  let { state } = useLocation();

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {},
  []);

  function handleSliderChange({ target }) {
    setSliderValue(target.value);
  }

  function getStyle() {
    var filters = Object.values(bottomOption).map(
      (value, index) => `${value.property}(${value.value}${value.unit})`
    );

    return { filter: filters.join(" ") };
  }
  function onZoomChange() {}
  return (
    <>
      <section className="flex">
        <aside
          className="w-64 max-h-screen p-6 sm:w-60 bg-blue text-lightgray dark:bg-black dark:text-lightgray"
          // style={{ height: "calc(100vh - 330px)" }}
        >
          <nav className="space-y-8 text-sm">
            <div className="flex flex-row justify-evenly ">
              <Link to="/">
                <div className="flex flex-col  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span>Save</span>
                </div>
              </Link>
              <Link to="/">
                <div className="flex flex-col  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                  <span>Undo</span>
                </div>
              </Link>
              <Link to="/">
                <div className="flex flex-col  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                    />
                  </svg>
                  <span>Redo</span>
                </div>
              </Link>
              <Link to="/">
                <div className="flex flex-col  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                    />
                  </svg>
                  <span>Reset</span>
                </div>
              </Link>
            </div>

            <div className="space-y-2 ">
              <div className="flex flex-col space-y-5 px-10 text-start">
                {sideNavbar.map((item, index) => {
                  return (
                    <SideNavbarItem
                      item={item}
                      index={index}
                      onClick={() => setSelectedSideNavOption(item.name)}
                      active={selectedSideNavOption === item.name}
                      options={item.default_values}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex">
              <Link to="/">
                <div className="flex items-center justify-evenly ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>

                  <span className="ml-3">Add More Image</span>
                </div>
              </Link>
            </div>

            <div className="flex flex-row justify-evenly ">
              <Link to="/">
                <div className="flex flex-col  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </div>
              </Link>
              <Link to="/">
                <div className="flex flex-col  items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="flex flex-col text-start">
              <table>
                <tr>
                  <td className="text-start" colSpan={2}>
                    You have added those filters:
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Sephia</td>
                  <td className="text-center">x</td>
                </tr>
                <tr>
                  <td className="text-start">Text</td>
                  <td className="text-center">x</td>
                </tr>
                <tr>
                  <td className="text-start">Shape</td>
                  <td className="text-center">x</td>
                </tr>
                <tr>
                  <td className="text-start">Adjust</td>
                  <td className="text-center">x</td>
                </tr>
              </table>
            </div>
          </nav>
        </aside>

        <div className="imageContainer">
          {selectedSideNavOption === "Crop" && (
            <Cropper
              image={state.data?.url}
              style={{ mediaStyle: getStyle() }}
              crop={crop}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              // disableAutomaticStylesInjection={true}
              mediaProps={<img />}
            />
          )}
          {selectedSideNavOption === "Adjust" && (
            <img
              src={state.data.url}
              className="editImage"
              style={getStyle()}
            />
          )}
        </div>
      </section>
      <nav className="p-4 bg-gray text-lightgray dark:bg-black dark:text-lightgray">
        <div className="container flex justify-between h-16 mx-auto md:justify-center flex-col items-center w-88">
          <ul className="items-stretch space-x-3 md:flex">
            {selectedSideNavOption === "Adjust" &&
              Object.keys(bottomOption).map((item, index) => {
                return (
                  <li
                    className={`edit-item ${
                      item === selectedBottomOption ? "active" : ""
                    }`}
                  >
                    <BottomAdjustItem
                      key={index}
                      name={item}
                      active={item === selectedBottomOption}
                      handleClick={() => setSelectedBottomOption(item)}
                    />
                  </li>
                );
              })}
          </ul>
          <Slider
            min={bottomOption[selectedBottomOption]?.range?.min}
            max={bottomOption[selectedBottomOption]?.range?.max}
            value={bottomOption[selectedBottomOption]?.value}
            name={selectedBottomOption}
            handleChange={handleSliderChange}
          />
          {hasChangedStyles && <button onClick={resetStyles}>reset</button>}
        </div>
      </nav>
    </>
  );
}
