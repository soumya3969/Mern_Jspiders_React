// src/Demo1.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Demo1 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?count=12&client_id=QLdrjNsdvvU7H70cNt4RyuqFOav8WmvLmgjn2BGesnI`
        );
        setImages(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {images.map(image => (
          <div key={image.id} className="col-lg-2 col-md-3 col-sm-6 mb-4">
            <img
              src={image.urls.regular}
              alt={image.alt_description}
              className="img-fluid"
            />
            <p className="text-2">{image.alt_description}</p>
            <p className="text-2">{image.views}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo1;
