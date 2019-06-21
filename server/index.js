const express = require('express')
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });
  

app.listen(port, () => {
    console.log('app listening on port ', port)
})