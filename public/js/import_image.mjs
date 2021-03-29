import {importButton, drawBlob} from './script.mjs';

const importImage = async () => {
  try {
    const [handle] = await window.showOpenFilePicker({
      types: [{
        description: 'Image files',
        accept: {
          'image/*': ['.png', '.jpg', '.jpeg', '.avif', '.webp', '.svg'],
        },
      }],
    });
    return await handle.getFile();
  } catch (err) {
    console.error(err.name, err.message);
  }
};

importButton.addEventListener('click', async () => {
  const file = await importImage();
  if (file) {
    await drawBlob(file);
  }
});
