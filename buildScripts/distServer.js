import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
   res.json([
      {'id': 1, 'firstName': 'Bob', 'lastName': 'Smith', 'email': 'bob@gmail.com'},
      {'id': 3, 'firstName': 'Bob1', 'lastName': 'Smith1', 'email': 'bob1@gmail.com'},
      {'id': 2, 'firstName': 'Bob2', 'lastName': 'Smith2', 'email': 'bob2@gmail.com'}
   ]);
});

app.listen(port, function(err) {
   if (err) {
      console.log(err);
   } else {
      open('http://localhost:' + port);
   }
});
