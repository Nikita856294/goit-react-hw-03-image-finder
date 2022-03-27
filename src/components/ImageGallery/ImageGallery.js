import React, { Component } from 'react';
import api from '../../services/fetchImages';
import ImageGalleryItems from '../ImageGalleryItem';
class ImageGallery extends Component {
  state = {
    image: '',
  };
  componentDidMount(prevProps, prevState) {
    if (prevProps !== this.props.image) {
      return api.fetchImages(this.props.image).then(res => {
        if (res.ok) {
          return res.json().then(image =>
            this.setState({
              image,
            })
          );
        }
        return new Error();
      });
    }
  }
  render() {
    return {};
  }
}

export default ImageGallery;
