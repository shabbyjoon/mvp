let mysql = require ('mysql');
let connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'vision_boards',
});

const saveBoard = (boardInfo, saveData) => {
  connection.query(`INSERT INTO vision_board(board_name, date_created, card_message, item_url) VALUES("${boardInfo.boardname}", "${boardInfo.datecreated}", "${boardInfo.message}", "${boardInfo.imageUrl}")`, (err, data) => {
    if (err) {
      saveData(err, null);
    } else {
      saveData(null, data);
    }
  });
}

const getCards = (getCards) => {
  connection.query(`SELECT * from vision_board`, (error, result) => {
    if (error) {
      getCards(error, null);
    } else {
      getCards(null, result);
    }
  })
}

module.exports.saveBoard = saveBoard;
module.exports.getCards = getCards;