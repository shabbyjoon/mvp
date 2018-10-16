const express = require("express");
const bodyParser = require("body-parser");
const db = require('../database/index.js');
const app = express();

app.use(bodyParser())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/cards', (req, res) => {
  let cardName = req.params.boardname;
  db.saveBoard(req.body, (err) => {
   if (err) {
     console.log(req.body)
     console.log(err)

      res.status(500).send(err)
    }
    res.status(201).send()
  })
});

app.get('/cards', (req, res) => {
  db.getCards((err, data) => {
    if (err) {
      console.log('not getting', err)
      res.sendStatus(400);
    } else {
      res.status(200).send(data);

    }
  })
});

const PORT = 5000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}!`)})