import React, { Component } from 'react';
import './Avatar.css';

//Nathan: Make this a service to pull avatar images, and images in general
const avatars = require.context('../../public/images/avatars', true);


class Avatar extends Component {

  render() {
    const image = avatars('./' + this.props.imageName);
    const className = this.props.className;

    return (  
      <img src={image} alt="Avatar Image" className={className} onClick={this.props.onClick}/>
    );
  }
}

export default Avatar;