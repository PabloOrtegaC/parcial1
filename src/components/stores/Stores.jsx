import React from 'react';
import Header2 from '../common/Header2';
import useMenu from '../hooks/useMenu';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


const Stores = () => {
  const { menu, loading, error } = useMenu();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!menu) return null;
  

  return (

    <div>
     <Header2></Header2>
     <div>

     <Carousel>

     {menu.photosC.map((photo, index) => (
             
             <Carousel.Item interval={1500}>
               <img
                 className="d-block w-100"
                 src={photo}
                 alt="Image One"
               />
              
             </Carousel.Item>

          
        ))}
         </Carousel>

        </div>


     <div className="profile-photos">
        {menu.photos.map((photo, index) => (

        
        <div>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={photo.image} />
          <Card.Body>
            <Card.Text>
              {photo.name}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        ))}
      </div>
      
    </div>
  );
};

export default Stores;
