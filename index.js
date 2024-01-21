import express from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/review', (req, res) => {
  res.render('review.ejs');
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
