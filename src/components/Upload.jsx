import React, { useState } from 'react';
import Leafimage from '../assets/Leaf.png';
function Upload() {

  const leaf = `url(${Leafimage})`;

  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setSelectedImage(URL.createObjectURL(selectedFile));
      // Implement logic to analyze the image and get result
      setResult("Your plant is likely suffering from X disease.");
    } else {
      setSelectedImage(null);
      setResult(null);
    }
  };

  const handleDownloadReport = () => {
    // Implement logic to download a report with the result
    console.log("Downloading report...");
  };

  return (
    <div id='upload' style={{ backgroundColor: '#d3f0e9', borderTop: '2px solid black', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '100vh', padding: '3rem 2rem', backgroundImage: leaf }}>
      {/* Hero Section */}
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#f3f3f3', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>How Does It Work?</h1>
        <p style={{ color: '#f3f3f3', fontSize: '1.2rem', marginBottom: '2rem' }}>Easily diagnose plant diseases with our simple and effective process.</p>
        {/* Image Upload Section */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
          <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
          <label htmlFor="image-upload" style={{ backgroundColor: '#008000', color: '#fff', padding: '1rem 2rem', borderRadius: '5px', fontSize: '1.2rem', cursor: 'pointer' }}>Upload Image</label>
          {selectedImage && <img src={selectedImage} alt="Uploaded plant" style={{ maxWidth: '300px', maxHeight: '200px', marginLeft: '2rem' }} />}
        </div>
        {/* Result Section */}
        {result && (
          <div style={{ borderRadius: '5px', padding: '1rem', marginBottom: '2rem' }}>
            <p style={{ color: '#f3f3f3', fontSize: '1.2rem', marginBottom: '1rem' }}>Result:</p>
            <p style={{color: '#f3f3f3'}}>{result}</p>
            <button style={{ backgroundColor: '#008000', color: '#fff', padding: '1rem 2rem', borderRadius: '5px', cursor: 'pointer' }} onClick={handleDownloadReport}>Download Report</button>
          </div>
        )}
      </div>
      {/* Steps Section */}
      <div style={{ display: 'flex', paddingBottom: "3rem",justifyContent: 'center', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
  {/* Step 1 */}
  <div style={{ flex: '1', maxWidth: '30%', padding: '1rem', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'}}>
    <i className="fa fa-camera" style={{ fontSize: '2rem', color: '#008000' }} />
    <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Upload a Photo</h3>
    <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Capture a clear image of the affected plant area.</p>
  </div>
  {/* Step 2 */}
  <div style={{ flex: '1', maxWidth: '30%', padding: '1rem', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
    <i className="fa fa-search" style={{ fontSize: '2rem', color: '#008000' }} />
    <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Advanced Analysis</h3>
    <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Our AI analyzes the image for disease patterns.</p>
  </div>
  {/* Step 3 */}
  <div style={{ flex: '1', maxWidth: '30%', padding: '1rem ', margin: '1rem', textAlign: 'center', borderRadius: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
    <i className="fa fa-leaf" style={{ fontSize: '2rem', color: '#008000' }} />
    <h3 style={{ color: '#f3f3f3', fontSize: '1.5rem', margin: '1rem 0' }}>Get Results</h3>
    <p style={{ color: '#f3f3f3', fontSize: '1rem' }}>Receive a diagnosis and personalized treatment.</p>
  </div>
</div>



      {/* Benefits Section */}
      <div id='why' style={{ textAlign: 'center', padding: '3rem', borderTop: '2px solid black', margin: '2rem auto' }}>
      <h2 style={{ color: '#f3f3f3', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'bold' }}>Why Choose Us?</h2>
      <ul style={{ listStyle: 'none', padding: '0', margin: '1rem 0', fontSize: '1.2rem', lineHeight: '1.6' }}>
        <li>
          <i className="fa fa-check-circle" style={{ color: '#f3f3f3' }} />
          <span style={{ marginLeft: '1rem',color: '#f3f3f3' }}>Fast and accurate diagnoses: Identify plant diseases quickly and confidently.</span>
        </li>
        {/* Add more benefits here if needed */}
        <li>
          <i className="fa fa-check-circle" style={{ color: '#008000' }} />
          <span style={{ marginLeft: '1rem',color: '#f3f3f3' }}>Easy-to-use interface: No expert knowledge needed, just upload a photo and get results.</span>
        </li>
        <li>
          <i className="fa fa-check-circle" style={{ color: '#008000' }} />
          <span style={{ marginLeft: '1rem' ,color: '#f3f3f3'}}>Personalized treatment recommendations: Get specific solutions to save your plants.</span>
        </li>
        <li>
          <i className="fa fa-check-circle" style={{ color: '#008000' }} />
          <span style={{ marginLeft: '1rem',color: '#f3f3f3' }}>Science-backed technology: Powered by advanced AI and plant disease expertise.</span>
        </li>
        <li>
          <i className="fa fa-check-circle" style={{ color: '#008000' }} />
          <span style={{ marginLeft: '1rem',color: '#f3f3f3' }}>Affordable and accessible: Protect your plants without breaking the bank.</span>
        </li>
      </ul>
    </div>
    </div>
  );
}

export default Upload;
