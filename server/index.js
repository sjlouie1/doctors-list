const express = require('express')
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const api_key = '1540b0816889c1455a1ddb998fe7801f'; 
const resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../dist'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });
  
  app.get('/', function (req, res) {
    res.send('GET request to the homepage')
  })

app.listen(3000, () => {
    console.log('app listening on port 3000')
})