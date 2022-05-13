import React, { Component } from 'react';
import Searchbar from './Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { GlobalStyled } from './GlobalStyle/GlobalStyled';
import { ToastContainer, toast } from 'react-toastify';

export class App extends Component {
  state = {
    image: '',
  };

  handleSearchFormSubmit = image => {
    if (image === '') {
      return toast.error('Введите запрос');
    }
    this.setState({
      image,
    });
  };

  render() {
    const { image } = this.state;

    return (
      <div>
        <GlobalStyled />
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery image={image} />
      </div>
    );
  }
}

export default App;
