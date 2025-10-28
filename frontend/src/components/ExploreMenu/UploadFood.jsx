// import React, { useState } from 'react';
// import './UploadFood.css';

// const UploadFood = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [imageFile, setImageFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name || !price || !imageFile) {
//       setMessage('Name, price and image are required');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('description', description);
//     formData.append('price', price);
//     formData.append('category', category);
//     // IMPORTANT: field name must match multer middleware -> "image"
//     formData.append('image', imageFile);

//     try {
//       const res = await fetch('http://localhost:4000/api/food/add', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await res.json();
//       if (data.success) {
//         setMessage('Upload successful. Saved: ' + (data.food && data.food.image ? data.food.image : 'no image'));
//       } else {
//         setMessage('Upload failed: ' + (data.message || 'unknown'));
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage('Upload error: ' + err.message);
//     }
//   };

//   return (
//     <div className="upload-food">
//       <h3>Upload new menu item (test)</h3>
//       <form onSubmit={handleSubmit} className="upload-form">
//         <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//         <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
//         <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
//         <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />
//         <button type="submit">Upload</button>
//       </form>
//       {message && <p className="upload-message">{message}</p>}
//     </div>
//   );
// };

// export default UploadFood;
