import cloudinary from "./cloudinary";

export const imageUpload = async (image: File) => {
  try {
    const file = await image.arrayBuffer();
    const buffer = new Uint8Array(file);

    const { secure_url }: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, data) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(data);
          }
        })
        .end(buffer);
    });
  } catch (error) {
    console.log(error);
  }
};
