import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddMember() {
  const navigate = useNavigate();
  
  // 1. State to hold all the text inputs
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aboutYourAim: ''
  });

  // 2. State to hold the uploaded image file
  const [image, setImage] = useState(null);

  // Handle typing in the text boxes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle selecting an image
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // 3. Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stop the page from reloading

    // We MUST use FormData because we are sending a file, not just text
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('rollNumber', formData.rollNumber);
    submitData.append('year', formData.year);
    submitData.append('degree', formData.degree);
    submitData.append('aboutProject', formData.aboutProject);
    submitData.append('hobbies', formData.hobbies);
    submitData.append('certificate', formData.certificate);
    submitData.append('internship', formData.internship);
    submitData.append('aboutYourAim', formData.aboutYourAim);
    
    // Append the image file if the user selected one
    if (image) {
      submitData.append('image', image);
    }

    try {
      // Send the POST request to our Node backend
      await axios.post('http://localhost:5023/members', submitData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      alert('Member added successfully!');
      navigate('/view-members'); // Automatically redirect to the list page
      
    } catch (error) {
      console.error("Error adding member:", error);
      alert("Failed to add member. Make sure your backend is running!");
    }
  };

  // --- Inline Styles for a clean, professional form ---
  const inputStyle = {
    width: '100%', padding: '10px', marginBottom: '15px', 
    borderRadius: '5px', border: '1px solid #ccc',
    boxSizing: 'border-box', fontFamily: 'inherit'
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#333', padding: '40px', borderRadius: '10px', width: '100%', maxWidth: '600px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#1b3280', marginBottom: '30px' }}>Add Team Member</h2>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required onChange={handleChange} style={inputStyle} />
        <input type="text" name="rollNumber" placeholder="Roll Number" required onChange={handleChange} style={inputStyle} />
        <input type="text" name="year" placeholder="Year (e.g., 2024)" required onChange={handleChange} style={inputStyle} />
        <input type="text" name="degree" placeholder="Degree (e.g., B.Tech)" required onChange={handleChange} style={inputStyle} />
        
        <textarea name="aboutProject" placeholder="About Project" rows="3" onChange={handleChange} style={inputStyle} />
        
        <input type="text" name="hobbies" placeholder="Hobbies (comma separated)" onChange={handleChange} style={inputStyle} />
        <input type="text" name="certificate" placeholder="Certificate" onChange={handleChange} style={inputStyle} />
        <input type="text" name="internship" placeholder="Internship" onChange={handleChange} style={inputStyle} />
        
        <textarea name="aboutYourAim" placeholder="About Your Aim" rows="3" onChange={handleChange} style={inputStyle} />
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Profile Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} style={{ width: '100%' }} />
        </div>

        <button type="submit" style={{ width: '100%', backgroundColor: '#1b3280', color: 'white', border: 'none', padding: '15px', borderRadius: '5px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}