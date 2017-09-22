import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    }
  }

  toggleMood = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({
      mood: newMood
    })
  }

  render() {
    return (
      <div onClick={this.toggleMood}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}