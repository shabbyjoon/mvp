import React from 'react';
import Square from './Square.jsx';
import Message from './Message.jsx';

class Board extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      boardname: '',
      datecreated: '',
      message: '',
      imageUrl1: '',
    };
    this.renderSquareTwo = this.renderSquareTwo.bind (this);
    this.handleChange = this.handleChange.bind (this);
    this.submitForm = this.submitForm.bind (this);
    this.saveUrl = this.saveUrl.bind (this);
  }

  handleImageClick (event) {
    this.setState ({
      squareId: event.target.id,
    });
  }
  saveUrl () {
    if (this.props.imageClicked) {
      this.setState ({
        imageUrl: this.props.imageUrl,
      });
    }
  }
  renderSquareTwo (i) {
    return (
      <Square
        height="200"
        width="300"
        id={i}
        imageClicked={this.props.imageClicked}
        imageUrl={this.props.imageUrl}
      />
    );
  }

  saveImageUrls () {
    if (this.props.imageClickCount === 1) {
      this.setState ({
        imageUrl1: this.props.imageUrl,
      });
    }
  }

  handleChange (event) {
    event.preventDefault ();
    this.saveUrl ();
    this.setState ({
      [event.target.id]: event.target.value,
    });
  }

  submitForm (event) {
    event.preventDefault ();
    this.saveUrl ();
    this.props.submitCard (this.state);
    alert ('Vision Card Created! Navigate to the Your Cards panel to view :)');
  }

  render () {
    return (
      <div className="form-container">
        {this.renderSquareTwo (1)}
        <div className="boardForm">
          <form>
            <label>PostCard Title:</label>
            <input type="text" id="boardname" onChange={this.handleChange} />
            <label> Date Created: </label>
            <input type="date" id="datecreated" onChange={this.handleChange} />
            <textarea
              name="paragraph_text"
              id="message"
              cols="50"
              rows="10"
              onChange={this.handleChange}
            />
            <button type="button" onClick={this.submitForm}>
              {' '}Save Vision Card
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Board;
