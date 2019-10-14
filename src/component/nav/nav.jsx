import React from 'react';
import { connect } from 'react-redux';
//import Modal from 'react-modal';


import LeftNav from './left_nav.jsx';
//import RightNavLoggedIn from './right_nav_logged_in';
//import RightNavLoggedOut from './right_nav_logged_out';
//import { modalStyle } from '../../util/modal_style.js';

class Nav extends React.Component {
  constructor (props) {
    super(props);
    //this.state = { modal: false, formType: "" };

   // Modal.setAppElement('#root');
  }

  




  render () {
    return (
      <section className="nav">
        <ul className="main-nav">
        <LeftNav />
       
     
        </ul>

      
      </section>
    );
  }
}


export default (Nav);
