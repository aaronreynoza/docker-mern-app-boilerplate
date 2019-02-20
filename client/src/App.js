import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      values: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ val: e.target.value })
  }

  componentDidMount() {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    axios.get('/api/example', axiosConfig).then(response => {
      const values = response.data;
      if (values.length > 0) {
        const items = values.map(obj => obj.item);
        this.setState({ values: items, val: '' });
      }
    });
  }

  async onSubmit() {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
    console.log(this.state.val);
    await axios.post('/api/example', { item: this.state.val }, axiosConfig);
    axios.get('/api/example', axiosConfig).then(response => {
      const values = response.data;
      const items = values.map(obj => obj.item);
      this.setState({ values: items, val: '' });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>Post something: </p>
            <input type="text" onChange={this.onChange} value={this.state.val}></input>
            <hr />
            <button onClick={this.onSubmit}>Send!</button>
            <div>
              {this.state.values.map(val => <p>{val}</p>)}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
