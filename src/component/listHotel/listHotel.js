import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector, useDispatch } from 'react-redux';


  export default function HotelList() {
     const hotels=useSelector(state => state.counter);
     const newlistHotels=useSelector(state => state.counter);


        let hotelList = hotels.map((hotel) => {
            return (
                <Row>
                    <Col sm={9} md={9} className="main-layout">
                        <Row className="justify-content-md-center">
                            <Card id="itemHotel">
                                <Row><Col sm={4}>
                                    <Card.Img variant="top" src={hotel.imageUrl} />
                                </Col>
                                <Col sm={8}>
                                        <Card.Body>
                                        <Row><Col sm={8}><Card.Title>{hotel.name}</Card.Title></Col>
                                        <Col sm={4}><Row><Card.Text className="textprice">
                                                {hotel.price}
                                            </Card.Text></Row>
                                            <Row><Card.Text className="pnuit">
                                                prix\nuit
                                            </Card.Text></Row>
                                            </Col>
                                            </Row>
                                            <Card.Text className="decription">
                                                {hotel.description}
                                            </Card.Text>
                                            
                                        </Card.Body>
                                        </Col>
                                        </Row>
                            </Card>
                        </Row>
                    </Col >
                    <Col sm={3} md={3} className="panier">
                    </Col>
                </Row >
            );
        });

        return(<div>{hotelList}</div>); 

    


    }
    
