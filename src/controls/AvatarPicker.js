import React, { Component } from 'react';
import Avatar from './Avatar.js';
import './AvatarPicker.css';

class AvatarPicker extends Component {
  constructor(props) {
    super(props);
    const avatars = props.avatars;

    this.state = {
      avatars : avatars,
      currentAvatar: avatars[0],
    };
  }

  render() {
  	const currentAvatar = this.state.currentAvatar;
  	const imageName = currentAvatar.src;
  	const avatarId = currentAvatar.id;

    return (
      <div>  
      <Avatar imageName={imageName} className='avatar_image avatar_current' onClick={() => this.selectAvatar()}/>
      <Avatar imageName={imageName} className='avatar_image loading_wheel' onClick={() => this.selectAvatar()}/>
      </div>
    );
  }

  showPopover(){

  }

  selectAvatar(){
  	//Nathan: refactor after popup
  	const currentAvatar = this.state.currentAvatar;
  	const avatarId = currentAvatar.id;
  	const avatars = this.state.avatars;
  	this.setState({currentAvatar:avatars[avatarId % avatars.length]});
  }
}

export default AvatarPicker;