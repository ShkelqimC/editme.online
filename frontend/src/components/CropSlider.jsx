export default function CropSlider({
  handleRotateChange,
  handleZoomChange,
  rotateValue,
  zoomValue,
}) {
  return (
    <div className="cropSliderContainer">
      <div className="flex">
        <label className="px-1">Rotate</label>
        <input
          type="range"
          className="cropSlider"
          min={0}
          max={360}
          value={rotateValue}
          onChange={(e, rotation) => handleRotateChange(e, rotation)}
        />
      </div>
      <div className="flex">
        <label className="px-1">Zoom</label>
        <input
          type="range"
          className="cropSlider"
          min={1}
          max={10}
          value={zoomValue}
          step={0.1}
          onChange={(e, zoom) => handleZoomChange(e, zoom)}
        />
      </div>
    </div>
  );
}
