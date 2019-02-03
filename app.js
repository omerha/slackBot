let express = require('express');
let bodyParser = require('body-parser');
 
let app = express();
let port = process.env.PORT || 1337;
 
// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });
 
app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/hello', function (req, res, next) {
    let userName = req.body.user_name;
    let botPayload = {
      text : 'Hello ' + userName + ', welcome to Omer Slack channel! I\'ll be your guide.'
    };
    // Loop otherwise..
    if (userName !== 'slackbot') {
      return res.status(200).json(botPayload);
    } else {
      return res.status(200).end();
    }
  });
