import React from 'react';


class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageUrl: '',
      squareId: '',
      squareClicked: false
    }
    //this.renderImages = this.renderImages.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.togglePopup = this.togglePopup.bind (this);
  }
  togglePopup () {
    this.setState ({
      squareClicked: !this.state.squareClicked
    });
  }

  handleImageClick(event) {
    console.log('square was clicked!', event.target.id)
    this.setState({
      squareId: event.target.id
    })
  }


  render() {
    return (
      <div 
        className="square"
         onClick={this.togglePopup} >
         {this.state.squareClicked
           ? <img src={this.props.imageUrl}/>
           : <div>select an image</div>
        }
      </div>

    );
  }
}

export default Square;


  // renderImages(){
  //   this.handleImageClick()
  //   if (this.props.imageClicked) {
  //     console.log('square gets the url', this.props.imageUrl)
  //     return (
  //       <div className="square" >
  //         <img src={this.props.imageUrl}/>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <button id={this.props.id} className="square">
  //     </button>
  //     )
  //   }
  // }