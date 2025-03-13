import React from "react";
import './footer.css';
import ImageCard from "../ImageCard/ImageCard";

function Footer() {
  return (
    <footer className="footer">
      <div className="image-card left-card">
      <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
      </div>
      <div className="image-card right-card">
      <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
      </div>
    </footer>
  );
}

export default Footer;
