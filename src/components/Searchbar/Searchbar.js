import react, { Component } from 'react';
import api from '../../services/fetchImages';
class Searchbar extends Component {
  state = {
    images: '',
  };
  handleChange = e => {
    this.setState({
      images: e.target.value.toLowerCase(),
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.images);
    this.setState({
      images: '',
    });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            value={this.state.images}
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
