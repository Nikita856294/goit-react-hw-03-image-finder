import react, { Component } from 'react';
import { SearchForm, SubmitButton, InputForm } from './SearchbarStyled';

class Searchbar extends Component {
  state = {
    image: '',
  };
  handleChange = e => {
    this.setState({
      image: e.target.value.toLowerCase(),
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.image);
    this.setState({
      image: '',
    });
  };

  render() {
    return (
      <SearchForm className="form" onSubmit={this.handleSubmit}>
        <SubmitButton type="submit" className="button">
          <span className="button-label">Search</span>
        </SubmitButton>

        <InputForm
          className="input"
          type="text"
          value={this.state.image}
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
      </SearchForm>
    );
  }
}

export default Searchbar;
