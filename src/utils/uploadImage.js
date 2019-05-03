export default async (files, handler) => {
  const cloudname = 'dojy8fbrj';
  const uploadPreset = 'mvyefkkh';
  const file = files[0];
  const formData = new FormData();
  formData.append('upload_preset', uploadPreset);
  formData.append('file', file);
  const url = `https://api.cloudinary.com/v1_1/${cloudname}/upload`;
  try {
    const sendFile = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    handler('Successfully uploaded image');
    return sendFile;
  } catch (err) {
    handler(err.message);
  }
};
