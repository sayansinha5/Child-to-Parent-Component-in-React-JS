import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  // handle input change event
  onInputChange(e) {
    this.setState({ inputVal: e.target.value });
    // this.props.handleInput(this.state.inputVal);
    this.props.handleInput(e.target.value);
  }

  render() {
    return (
      <div style={{ margin: '50px 0 50px 50px' }}>
        <h3>Child Component</h3>
        <hr />
        Input:
        <input value={this.state.inputVal} onChange={(e) => this.onInputChange(e)} />
      </div>
    );
  }
}

export default Child;