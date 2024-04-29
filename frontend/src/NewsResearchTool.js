import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import video from './stock.mp4';

function NewsResearchTool() {
  const [jsonData, setJsonData] = useState(null);

  const fetchData = () => {
    fetch('your-backend-api-url')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data to the state
        setJsonData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const fetchSummary = () => {
    // Fetch summary from the backend URL
    fetch('http://localhost:5000/summary')
      .then(response => response.text())
      .then(summary => {
        // Set the fetched summary to the state
        setJsonData({ answer: summary });
      })
      .catch(error => {
        console.error('Error fetching summary:', error);
      });
  };


  return (
    <div style={{ display: 'flex' }}>
    {/* Left half with image */}
    <div className="left-half" style={{ flex: 0.8, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'30px' }}>
    <video controls loop style={{ width: '100%', height: '100%' }}>
  <source src={video} type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </div>
    <div className="article-urls" sx={{ flex: 1 }}>
      <h1 style={{ fontFamily: 'Playfair Display', display: 'inline-block' }}>News Article URLs</h1>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft:'40px' }}>
        <h2 style={{ fontFamily: 'Playfair Display', display: 'inline-block', marginRight: '10px' }}>URL 1</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/6565/6565893.png" style={{ width: '30px' }} alt="icon" />
      </div>
      <TextField id="url1" label="" variant="outlined" fullWidth required  style={{ paddingLeft:'40px'}} />
      <div style={{ display: 'flex', alignItems: 'center',  paddingLeft:'40px' }}>
        <h2 style={{ fontFamily: 'Playfair Display', display: 'inline-block', marginRight: '10px' }}>URL 2</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/6565/6565893.png" style={{ width: '30px'}} alt="icon" />
      </div>
      <TextField id="url1" label="" variant="outlined" fullWidth required style={{ paddingLeft:'40px'}} />
      <div style={{ display: 'flex', alignItems: 'center',  paddingLeft:'40px' }}>
        <h2 style={{ fontFamily: 'Playfair Display', display: 'inline-block', marginRight: '10px' }}>URL 3</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/6565/6565893.png" style={{ width: '30px' }} alt="icon" />
      </div>
      <TextField id="url3" label="" variant="outlined" fullWidth required style={{ paddingLeft:'40px'}}  />
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft:'40px' }}>
        <h2 style={{ fontFamily: 'Playfair Display', display: 'inline-block' }}>Question</h2>
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/question-mark-3790632-3164115.png?f=webp&w=256" style={{ width: '30px' }} alt="icon" />
      </div>
      <TextField id="question" label="" variant="outlined" fullWidth required style={{ paddingLeft:'40px'}} />
      

      <div>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        onClick={() => fetchData()}
        style={{ marginTop: '20px' }}
      >
        Redirect
      </Button>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        onClick={() => fetchSummary()}
        style={{ marginTop: '20px' }}
      >
        Get Summary
      </Button>
      <div className="answer" style={{ marginTop: '20px' }}>
        <h2 style={{ fontFamily: 'Playfair Display' }}>Answer:</h2>
        {jsonData ? (
          <p>{jsonData.answer}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>



    </div>
  </div>
  );
}

export default NewsResearchTool;