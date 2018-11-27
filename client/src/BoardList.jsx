import React from 'react';
import ListItem from './ListItem.jsx';

let BoardList = props => {
  const cards = props.data.map (card => (
    <ListItem onClick={props.renderCard} data={card} key={card.board_id} />
  ));

  return (
    <div className="card-list">
      <h4>Your Cards</h4>
      {cards}
    </div>
  );
};

export default BoardList;
