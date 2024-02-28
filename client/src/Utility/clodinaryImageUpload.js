import axios from "axios";
const UploadImage = (img) => {
  return new Promise(async (resolve, reject) => {
    const imageFormData = new FormData();
    imageFormData.append("file", img);
    imageFormData.append("upload_preset", "local_meets");
    imageFormData.append("cloud_name", "dqxuucjcd");
    console.log(img);
    console.log(imageFormData);

    try {
      const cloudRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dqxuucjcd/image/upload",
        imageFormData
      );
      let url = cloudRes.data.url;

      url =
        url.substring(0, url.indexOf("p") + 1) +
        "s" +
        url.substring(url.indexOf("p") + 1);
      console.log(url);
      resolve(url);
    } catch (error) {
      reject(error);
    }
  });
};

export default UploadImage;
