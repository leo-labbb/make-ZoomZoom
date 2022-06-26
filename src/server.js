import exp from 'constants';
import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
console.log('hello');

app.set('view engine', 'pug');
app.set('views', __dirname + '/src/views');
app.use('/public', express.static(__dirname + '/src/public'));
app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = () =>
  console.log('💥 Listening on http://localhost:3000 💥');
app.listen(3000, handleListen);
