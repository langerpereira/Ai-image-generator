import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default_image.svg'
import { useState } from 'react'
import { useRef } from 'react'

const ImageGenerator = () => {

    const [image_url,setImage_url] = useState("/")
    let inputRef = useRef(null)

  return (
    <div className='ai-image-generator'>
        <div className='header'>Ai image <span>generator</span></div>
        <div className="img-loading">
            <div className="image">
                <img src={image_url==="/"?default_image:image_url} alt="" />
            </div>
        </div>
        <div className="search-box">
            <input type="text" className="search-input" placeholder='Describe what You Want to see!'/>
            <div className="generate-btn">Generate</div>
        </div>
    </div>
  )
}

export default ImageGenerator