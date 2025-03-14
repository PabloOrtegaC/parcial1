import React from 'react';
import Header3 from '../common/Header3';
import useMenu from '../hooks/useMenu';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cart.css';


const Cart = () => {
  const { menu, loading, error } = useMenu();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!menu) return null;

  return (
    <div>
      <Header3 />
      <div>
        <Carousel>
          {menu.photosC.map((photo, index) => (
            <Carousel.Item interval={1500} key={index}>
              <img className="d-block w-100" src={photo} alt="Carousel slide" />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="profile-photos">
        <Row>
          {menu.photos.map((photo, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo.image} />
                <Card.Body>
                  <Card.Text>{photo.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Cart;
