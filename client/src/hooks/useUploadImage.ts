import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ImageListType } from "react-images-uploading";
import { fileUpload } from "../utils/fileUpload";
import { postImage } from "../redux/actions/index";
export const useUploadImage = () => {
  const [images, setImages] = useState<ImageListType>([]);
  const [loading, setLoading] = useState(false);
  const [urlImage, setUrlImage] = useState("");
  const dispatch = useDispatch();
  const handleChange = (imageList: ImageListType) => setImages(imageList);

  const onUpload = async () => {
    setLoading(true);
    const url = await fileUpload(images[0].file!);
    setLoading(false);

    if (url) setUrlImage(url);
    else alert("Error, please try again later. ❌");
    dispatch(postImage({ url }));

    setImages([]);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (urlImage) {
      console.log(urlImage);

      timeout = setTimeout(() => {
        setUrlImage("");
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  });

  return {
    loading,
    onUpload,
    handleChange,
    urlImage,
    images,
  };
};
