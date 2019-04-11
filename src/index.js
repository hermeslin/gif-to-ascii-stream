import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('aloha');
});

app.listen(4321, () => {
  console.log('server running http://localhost:4321');
});
