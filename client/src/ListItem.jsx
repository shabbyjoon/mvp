import React from 'react';
import ImageCard from './ImageCard.jsx';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPopupHidden: true

    }
    this.displayName = this.displayName.bind(this);
    this.togglePopup = this.togglePopup.bind (this);
  }
  togglePopup () {
    this.setState ({
      isPopupHidden: !this.state.isPopupHidden,
    });
    this.displayName()
  }
  displayName() {
    console.log('this.props.data', this.props.data)
  }
  


render() {
  return (
    <div className="cardNames"  onClick={this.togglePopup}>
         {!this.state.isPopupHidden
              ?  <ImageCard data={this.props.data} />
              : `${this.props.data.board_name}`
         }
   </div>
  )
}

}

export default ListItem;