import React from 'react';
import Header from '../common/Header';
import useMenu from '../hooks/useMenu';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Menu.css';

const Menu = () => {
  const { menu, loading, error } = useMenu();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!menu) return null;

  return (
    <div>
      <Header />
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
        <Row className="justify-content-center">
          {menu.photos.map((photo, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={photo.image} />
                <Card.Body>
                  <Card.Text className="profile-card-text">
                    {photo.name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Menu;
