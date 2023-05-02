import { create } from "zustand";

const defaultAdjust = {
  Brightness: {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  Contrast: {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  Saturation: {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  Grayscale: {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  Sepia: {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  "Hue Rotate": {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  Blur: {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
};

export const zustandstore = create((set, get) => ({
  selectedSideNavOption: "Adjust",
  selectedBottomOption: "Brightness",
  adjust: defaultAdjust,
  changedValues: [{Brightness: 100}, {Contrast:100}, {Saturation: 100}, {Grayscale:0}, {Sepia:0}, {"Hue Rotate": 0}, {Blur: 0} ],
  hasChangedStyles: false,


      setSelectedSideNavOption(option) {
        set({ selectedSideNavOption: option });
      },
      resetStyles(option) {
        set({ adjust: defaultAdjust, hasChangedStyles:false });
     
      },
    
      setSelectedBottomOption(option) {
        set({ selectedBottomOption: option });
      },
    
      setSliderValue(value) {
        set({
          adjust: {
            ...get().adjust,
            [get().selectedBottomOption]: {
              ...get().adjust[get().selectedBottomOption],
              value,
            },
          },
          hasChangedStyles: true
        });
      },
  
}));


export const useSideNavOption = () => zustandstore(state => state.selectedSideNavOption)
export const selectedBottomOption = () => zustandstore(state => state.selectedBottomOption)
export const adjust = () => zustandstore(state => state.adjust)
export const setSliderValue = () => zustandstore(state => state.setSliderValue)
export const changedValues = () => zustandstore(state => state.changedValues)

export const useActions = () => zustandstore(state => state.actions)