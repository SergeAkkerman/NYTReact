import React from 'react';
import Modal from 'react-modal';
import Login from './Login.js';
import Signup from './Signup.js';
import {BrowserRouter, Route, Link } from "react-router-dom";

Modal.setAppElement('#root');
class ArticleModal extends React.Component {

state = {
modalIsOpen: true
}
  render() {

    return (

<Modal className='ModalWindow' isOpen={this.state.modalIsOpen}>
<div className='Modal_content'>
<h2>Увійдіть в систему для детального огляду статей</h2>
<button><Link to='/login' style={{color: 'black'}}>Увійти</Link></button>
<button onClick={() => {this.setState({modalIsOpen: false}); this.props.closeModal('/');} }>Закрити вікно </button>
</div>
      <BrowserRouter>
      <Route path ='/login' exact component = {Login} />
      </BrowserRouter>
</Modal>
    );
  }
}

export default ArticleModal;