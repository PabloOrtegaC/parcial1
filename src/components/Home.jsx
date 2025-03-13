import React from 'react';
import Header from './Header/Header';
import Matrix from './Columns/Columns';
import ImageCard from './ImageCard/ImageCard';
import Footer from './Footer/Footer';
import Table from './Table/Table'



const Home = () => {
  return (

    <div>
      <Header />
      <Matrix columns={3} cellWidth={300} cellHeight={150}>
      <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
            <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
            <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
            <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
            <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
            <ImageCard 
        backgroundUrl=  'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
        text="Welcome to Our Website"
      />
        
    </Matrix>
    <Table></Table>
    <Footer></Footer>

      
    </div>
  );
};

export default Home;
