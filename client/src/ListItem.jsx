import React from 'react';
import ImageCard from './ImageCard.jsx';

class ListItem extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      isPopupHidden: true,
    };
    this.togglePopup = this.togglePopup.bind (this);
  }
  togglePopup () {
    this.setState ({
      isPopupHidden: !this.state.isPopupHidden,
    });
  }

  render () {
    return (
      <div className="cardNames" onClick={this.togglePopup}>
        {!this.state.isPopupHidden
          ? <ImageCard data={this.props.data} />
          : `${this.props.data.board_name}`}
      </div>
    );
  }
}

export default ListItem;
