import React, { useState, useMemo } from "react";
import Cropper from "react-easy-crop";
import { Button, Slider, message, Radio, Select } from "antd";

import getCroppedImg from "./cropImage";

function EasyCrop() {
  const [photoFile, setPhotoFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState([1, 1]);
  const [cropperConfig, setCropperConfig] = useState({
    crop: { x: 0, y: 0 },
    zoom: 1,
    croppedAreaPixels: null,
    isCropping: false,
    shape: "rect",
    showGrid: true,
  });

  const preview = useMemo(() => {
    return photoFile ? URL.createObjectURL(photoFile) : null;
  }, [photoFile]);

  const handleCropChange = (crop) => {
    setCropperConfig({ ...cropperConfig, crop });
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log("croppedArea: ", croppedArea);
    console.log("croppedAreaPixels: ", croppedAreaPixels);

    setCropperConfig({ ...cropperConfig, croppedAreaPixels });
  };

  const handleZoomChange = (zoom) => {
    setCropperConfig({ ...cropperConfig, zoom });
  };

  const showResult = async () => {
    try {
      setCropperConfig({ ...cropperConfig, isCropping: true });

      const croppedImage = await getCroppedImg(
        preview,
        cropperConfig.croppedAreaPixels
      );
      console.log("done", { croppedImage });

      setCroppedImage(croppedImage);
      setCropperConfig({ ...cropperConfig, isCropping: false });
    } catch (e) {
      console.error(e);
      setCropperConfig({ ...cropperConfig, isCropping: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFile = new File([croppedImage], "test.jpeg");

    message.info("File is on dev tools console");

    console.log(newFile);
  };

  return (
    <div className="m-5">
      <h1 className="text-3xl mb-5">Image crop</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="mb-5"
          type="file"
          name="pic"
          id="pic"
          accept="image/*"
          onChange={(e) => setPhotoFile(e.target.files[0])}
        />

        {preview && (
          <div className="bg-indigo-500 p-1 rounded-lg flex justify-evenly items-stretch">
            <div className="text-white w-1/3">
              <label>Zoom</label>
              <Slider
                className="mb-5"
                value={cropperConfig.zoom}
                min={1}
                max={3}
                step={0.1}
                onChange={(value) =>
                  setCropperConfig({ ...cropperConfig, zoom: value })
                }
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Shape</label>
              <Radio.Group
                buttonStyle="solid"
                defaultValue={cropperConfig.shape}
                value={cropperConfig.shape}
                onChange={(e) =>
                  setCropperConfig({ ...cropperConfig, shape: e.target.value })
                }
              >
                <Radio.Button value="rect">Rect</Radio.Button>
                <Radio.Button value="round">Rounded</Radio.Button>
              </Radio.Group>
            </div>

            <div className="flex flex-col">
              <label className="text-white">Show grid?</label>
              <Radio.Group
                buttonStyle="solid"
                defaultValue={cropperConfig.showGrid}
                value={cropperConfig.showGrid}
                onChange={(e) =>
                  setCropperConfig({
                    ...cropperConfig,
                    showGrid: e.target.value,
                  })
                }
              >
                <Radio.Button value={true}>Yes</Radio.Button>
                <Radio.Button value={false}>No</Radio.Button>
              </Radio.Group>
            </div>

            <div className="flex flex-col">
              <label className="text-white">Aspect</label>
              <Select
                buttonStyle="solid"
                defaultValue={`${aspectRatio[0]}:${aspectRatio[1]}`}
                value={`${aspectRatio[0]}:${aspectRatio[1]}`}
                onChange={(value) => setAspectRatio(value)}
                className="w-32"
              >
                <Select.Option value={[1, 1]}>1:1</Select.Option>
                <Select.Option value={[4, 3]}>4:3</Select.Option>
                <Select.Option value={[16, 9]}>16:9</Select.Option>
                <Select.Option value={[1.85, 1]}>1.85:1</Select.Option>
                <Select.Option value={[2.35, 1]}>2.35:1</Select.Option>
              </Select>
            </div>
          </div>
        )}

        <div className="flex items-center">
          {preview && (
            <div
              className="mr-3 my-5 relative"
              style={{ width: 500, height: 400 }}
            >
              <Cropper
                image={preview}
                crop={cropperConfig.crop}
                zoom={cropperConfig.zoom}
                aspect={aspectRatio[0] / aspectRatio[1]}
                onCropChange={handleCropChange}
                onCropComplete={handleCropComplete}
                onZoomChange={handleZoomChange}
                cropShape={cropperConfig.shape}
                showGrid={cropperConfig.showGrid}
              />
            </div>
          )}

          {croppedImage && (
            <img
              src={croppedImage}
              style={{
                width: 400,
                height: "auto",
                borderRadius: cropperConfig.shape === "round" ? "50%" : "unset",
              }}
              alt="cropped"
            />
          )}
        </div>

        <Button htmlType="button" onClick={showResult}>
          Show Result
        </Button>
        <Button className="ml-1" htmlType="submit">
          Save
        </Button>
      </form>
    </div>
  );
}

export default EasyCrop;
