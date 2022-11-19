// Documemtation about of how to upload Images in cloudinary
// https://cloudinary.com/documentation/image_upload_api_reference
import { useDispatch } from "react-redux";

const cloud_name = "deauhmx0e";
const preset = "propertiesyou";

export const fileUpload = async (file: File): Promise<string | null> => {
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

    arr.push(data.secure_url);

    console.log(arr);

    return data.secure_url;
  } catch (error) {
    return null;
  }
};
