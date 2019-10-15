import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useSelector, useDispatch } from 'react-redux';


  export default function pannier() {
     const hotels=useSelector(state => state.reducerpannier);
     
            return (
                <Row>
                    
                </Row >
            );
     
    


    }
    
