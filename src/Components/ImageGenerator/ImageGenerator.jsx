import React, { useState, useRef } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';

const ImageGenerator = () => {
  const [image_url, setImage_url] = useState('/');
  const inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === '') {
      return;
    }

    const response = await fetch(
      'https://api.stability.ai/v2beta/stable-image/generate/ultra',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'User-Agent': 'Chrome',
        },
        body: JSON.stringify({
          prompt: inputRef.current.value,
          n: 1,
          size: '512x512',
        }),
      }
    );

    const data = await response.json();
    let data_array = data.data;
    setImage_url(data_array[0].image_url)
  };

  return (
    <div className='ai-image-generator'>
      <div className='header'>
        AI Image <span>Generator</span>
      </div>
      <div className='img-loading'>
        <div className='image'>
          <img src={image_url === '/' ? default_image : image_url} alt='' />
        </div>
      </div>
      <div className='search-box'>
        <input
          type='text'
          ref={inputRef}
          className='search-input'
          placeholder='Describe what You Want to see!'
        />
        <div className='generate-btn' onClick={imageGenerator}>
          Generate
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
