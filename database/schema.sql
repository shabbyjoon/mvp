CREATE DATABASE vision_boards;
USE vision_boards;

CREATE TABLE IF NOT EXISTS vision_board (
  board_id INT AUTO_INCREMENT PRIMARY KEY,
  board_name VARCHAR(40) NOT NULL,
  date_created VARCHAR(20) NOT NULL,
  card_message VARCHAR(400) NOT NULL,
  item_url VARCHAR(400) NOT NULL
)

CREATE TABLE IF NOT EXISTS board_items (
  board_id INT,
  xcoord INT
  ycoord INT,
  item_url VARCHAR(80) NOT NULL,
  FOREIGN KEY (board_id) REFERENCES vision_board(boardID)

)