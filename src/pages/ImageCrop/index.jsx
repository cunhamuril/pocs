import React, { useState, useMemo } from "react";
import { Button, message } from "antd";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function ImageCrop() {
  const [photoFile, setPhotoFile] = useState(null);
  const [crop, setCrop] = useState({
    aspect: 1 / 1,
    width: 228,
  });

  const [imageRef, setImageRef] = useState(null);
  const [croppedImage, setCroppedImage] = useState({});

  const preview = useMemo(() => {
    return photoFile ? URL.createObjectURL(photoFile) : null;
  }, [photoFile]);

  const onCropComplete = async (crop) => {
    if (imageRef && crop.width && crop.height) {
      const croppedImg = await getCroppedImg(imageRef, crop, "file.jpeg");

      const { url, blob } = croppedImg;

      setCroppedImage({ url, blob });
    }
  };

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          blob.name = fileName;

          resolve({ blob: blob, url: URL.createObjectURL(blob) });
        },
        "image/jpeg",
        1
      );
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFile = new File([croppedImage.blob], "test.jpeg");

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

        <div className="flex items-center">
          <div style={{ width: 400 }} className="mr-3">
            <ReactCrop
              src={preview}
              keepSelection
              ruleOfThirds
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onImageLoaded={(image) => setImageRef(image)}
              onComplete={onCropComplete}
            />
          </div>

          {croppedImage.url && <img src={croppedImage.url} alt="cropped" />}
        </div>

        <Button htmlType="submit">Save</Button>
      </form>
    </div>
  );
}

export default ImageCrop;
