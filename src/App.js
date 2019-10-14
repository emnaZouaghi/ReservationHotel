import React from 'react';
import './App.css';
import { increment } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotelList from './component/listHotel/listHotel';

function App() {
 // const store=createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 const counter = useSelector(state => state.counter);
 const hotels=useSelector(state => state.reducerpannier);

 return (
    <div className="App">
      <header className="App-header">
      <Row>
      <Col sm={1} md={2}></Col>
      <Col sm={8} md={8}>LOGO</Col>
      <Col sm={3} md={2}></Col>
      </Row>
      </header>
      
        <div className="container">
        <Row>
        <Col sm={1} md={1}></Col>
        <Col sm={10} md={10}>
          <HotelList/>
        </Col>
        <Col sm={1} md={1}></Col>
      </Row>
      </div>
     
    </div>

  );
}

export default App;
