import React from 'react';

class Square extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      squareClicked: false,
    };
    this.togglePopup = this.togglePopup.bind (this);
  }
  componentDidMount () {
    this.togglePopup;
  }
  togglePopup () {
    this.setState ({
      squareClicked: !this.state.squareClicked,
    });
  }

  render () {
    console.log ('square id in square', this.props.imageUrl);
    return (
      <div className="square" onClick={this.togglePopup}>
        {this.props.imageClicked || !this.props.imageClicked
          ? <img src={this.props.imageUrl} height="200" width="300" />
          : <div>select an image</div>}
      </div>
    );
  }
}

export default Square;
