const form = document.querySelector('form');
const fileInput = form.querySelector('input[type="file"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData();

  for (const file of fileInput.files) {
    formData.append('files', file);
  }

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Files uploaded successfully');
    } else {
      console.error('Files upload failed');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});