import React, { Component } from 'react';

class LikeButton extends Component {
  /* state */
  state = {
    numnerOfLikes: 0,
  };
  /* render */
  render() {
    return <button>
      {this.state.numberOfLikes}
    </button>;
  }
}