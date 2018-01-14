import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      img: ''
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'N3IpbQlrn5MY7Da4Hv2fNItoA7mU92OQ';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ term: '', img: data.data[0].images.fixed_height.url }))
      .catch(e => console.log('error', e));
  }

  render() {
    return (
      <div className="App">
      <h1> Welcome to the Gif Finder! </h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <Button bsStyle="primary" bsSize="large" active>Search</Button>
        </form>
        <img src={this.state.img} className="img-responsive center-block" alt={this.state.term} />
        <h4>...have fun finding a crazy meme! </h4>
      </div>
    );
  }
}

export default App;
