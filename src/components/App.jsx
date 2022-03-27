import { Component } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
export class App extends Component {
  state = {
    image: '',
  };
  handleSearchFormSubmit = image => {
    this.setState({
      image,
    });
  };
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <ImageGallery image={this.state.image} />
      </div>
    );
  }
}
