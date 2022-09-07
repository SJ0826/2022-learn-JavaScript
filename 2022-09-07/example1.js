import React, { Component } from 'react';

class LikeButton extends Component {
  state = {
    numnerOfLikes: 0,
  };
  render() {
    return <button>
      {this.state.numberOfLikes}
    </button>;
  }
}