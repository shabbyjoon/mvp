import React from 'react';

class Image extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isImageHidden: true
    }

    this.onImageClick = this.onImageClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this)
    this.togglePopup = this.togglePopup.bind (this);
  }
  togglePopup () {
    this.setState ({
      isImageHidden: !this.state.isImageHidden,
    });
      
  }
  handleImageClick(url) {
    this.togglePopup();
    if(!this.state.isImageHidden) {
      this.props.selectImage(url)
      console.log('handleImageClick got the url', url)
    }
    this.togglePopup()

  }

  onImageClick(event){
    console.log('i was clicked', event.target.src)
    this.togglePopup()
      this.handleImageClick(event.target.src);
  }

  render() {
    return(
      <div onClick={this.onImageClick}>  
        <img src={this.props.url} height="200" width="300" alt="We're sorry!"/>
    </div>
    )
  }

};
export default Image;
