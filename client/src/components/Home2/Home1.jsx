import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageListType } from "react-images-uploading";

const cloud_name = "deauhmx0e";
const preset = "propertiesyou";

export default function Home1() {
  const fileUpload = async (file) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", `${preset}`);
    formData.append("file", file);
    let arr = [];
    try {
      const res = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) return null;
      const data = await res.json();
      //arrelgo de urls
      arr.push(data.secure_url);

      console.log(arr);

      return data.secure_url;
    } catch (error) {
      return null;
    }
  };

  return (
    <div>
      Cloudinary
      <div className="wrapper"></div>
    </div>
  );
}
