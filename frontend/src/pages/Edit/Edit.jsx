import { useLocation, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SideNavbarItem from "../../components/SideNavbarItem";
import AdjustItem from "../../components/AdjustItem";
import "./edit.css";
import { Slider } from "../../components/Slider";
import BottomAdjustItem from "../../components/BottomAdjustItem";

const sideNavbar = [
  {
    name: "Adjust",
    path: "#adjust",
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
    name: "Adjust",
    path: "#adjust",
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
const default_Adjust_Values = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

export function Edit(props, { imgUrl }) {
  const [options, setOptions] = useState(sideNavbar);
  const [selectedSideNavOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedSideNavOption = options[selectedSideNavOptionIndex];

  const [adjustDefaultValues, setAdjustDefaultValues] = useState(
    default_Adjust_Values
  );
  const [bottomOption, setBottomOption] = useState();
  const [selectedBottomOptionIndex, setSelectedBottomOptionIndex] = useState(0);
  const selectedBottomOption = adjustDefaultValues[selectedBottomOptionIndex];

  const [bottomSetting, setBottomSetting] = useState(null);
  let { state } = useLocation();
  const [imageUrl, setImageUrl] = useState();
  const [activeSidebarItem, setActiveSidebarItem] = useState();

  useEffect(() => {
    setActiveSidebarItem(options[selectedSideNavOptionIndex]);
  }, selectedSideNavOptionIndex);

  function handleSliderChange({ target }) {
    setAdjustDefaultValues((prevAdjustDefaultValues) => {
      return prevAdjustDefaultValues.map((option, index) => {
        if (index !== selectedBottomOptionIndex) return option;

        return { ...option, value: target.value };
      });
    });
  }

  function getStyle() {
    const filters = adjustDefaultValues.map((value, index) => {
      return `${value.property}(${value.value}${value.unit})`;
    });

    return { filter: filters.join(" ") };
  }
  console.log(getStyle(), "style");
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
                      onClick={setActiveSidebarItem}
                      active={index === selectedSideNavOptionIndex}
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
        {/* //imageContainer flex items-center text-center justify-center mx-auto text-lightblack dark:bg-lightgray w-screen min-h-fit */}
        <div className="imageContainer">
          {state?.data?.url && (
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
            {activeSidebarItem?.name === "Adjust" &&
              default_Adjust_Values.map((item, index) => {
                return (
                  <li
                    className={`edit-item ${
                      index === selectedBottomOptionIndex ? "active" : ""
                    }`}
                  >
                    <BottomAdjustItem
                      key={index}
                      name={item.name}
                      active={index === selectedBottomOptionIndex}
                      handleClick={() => setSelectedBottomOptionIndex(index)}
                    />
                  </li>
                );
              })}
            {/* {activeSiedbarItem?.default_values !== undefined &&
              activeSiedbarItem?.default_values.map((item, index) => {
                return (
                  <li
                    className={`edit-item ${
                      index === selectedBottomOptionIndex ? "active" : ""
                    }`}
                  >
                    <button
                      className={``}
                      key={index}
                      name={item.name}
                      active={index === selectedBottomOptionIndex}
                      onClick={() => setSelectedBottomOptionIndex(index)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })} */}

            {/* <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                x
              </a>
            </li> */}

            {/*<li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Link
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-lightblue dark:border-lightblue"
              >
                Link
              </a>
            </li> */}
          </ul>
          <Slider
            min={selectedBottomOption?.range?.min}
            max={selectedBottomOption?.range?.max}
            value={selectedBottomOption?.value}
            name={selectedBottomOption?.name}
            handleChange={handleSliderChange}
          />
        </div>
      </nav>
    </>
  );
}
