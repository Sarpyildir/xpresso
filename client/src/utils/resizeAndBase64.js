import Resizer from "react-image-file-resizer";

// Resize and convert to base64
const resizeAndBase64 = (file) => {
  return new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      300,
      300,
      "PNG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
};

export default resizeAndBase64;
