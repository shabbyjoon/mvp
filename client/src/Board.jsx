import React from 'react';
import Square from './Square.jsx';
import Message from './Message.jsx';


class Board extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       boardname: '',
       datecreated: '',
       message: '',
       imageUrl: '',


    }
   this.renderSquareTwo = this.renderSquareTwo.bind(this);
   this.handleChange = this.handleChange.bind(this);
   this.submitForm = this.submitForm.bind(this);
   this.saveUrl = this.saveUrl.bind(this);

  }

handleImageClick(event) {
  console.log('square was clicked!', event.target.id)
  this.setState({
    squareId: event.target.id
  })
}
saveUrl() {
  if(this.props.imageClicked) {
    this.setState({
      imageUrl: this.props.imageUrl
    })
   }
  }


  renderSquareTwo(i) {

    if(this.props.imageClicked){
      console.log('square got url', this.props.imageUrl)
     return <Square 
          id={i} imageClicked={this.props.imageClicked} 
          imageUrl={this.props.imageUrl}  
          />;
    } else{
      return <Square 
          id={i} 
         />
    }
 }
  
  handleChange(event) {
    event.preventDefault();
    this.saveUrl()
    this.setState({
      [event.target.id]: event.target.value,
      
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.saveUrl()
    this.props.submitCard(this.state);
    alert("One V-card coming right up!")
  }

  render(){
    return(
      <div className="form"> 
       <div className="board-row" >
          {this.renderSquareTwo(2)}
        </div>
      <form className="form-no-image">
        <label>PostCard Title:</label>
        <input type="text" id="boardname" onChange={this.handleChange}></input>
        <label> Date Created: </label>
        <input type="date" id="datecreated" onChange={this.handleChange}></input>
        <textarea name="paragraph_text" id="message"cols="50" rows="10" onChange={this.handleChange}></textarea>
        <button type="button" onClick={this.submitForm}> Save Vision Card</button>
      </form>

        </div>
    )
  }
}

export default Board;

