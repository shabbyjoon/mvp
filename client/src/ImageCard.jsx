
import React from 'react';

const ImageCard = (props) => {
  console.log('props.data.board_name', props.data.board_name)

  return (
    <div className="card-display">
        <span className="img-card-name">{props.data.board_name}</span>
        <div> {`\n`}</div>
        <span className="img-card-message">{props.data.card_message}</span>
        <div> {`\n`}</div>
        <span className="img-card-url"> 
          <img src={props.data.item_url} height="200" width="300"/>
        
        </span>
    </div>
  )
}

export default ImageCard;

//get target id on click of list item
//render board that matches that id