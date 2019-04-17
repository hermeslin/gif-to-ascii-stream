import express from 'express';
import stream from './utility/stream';
import gifAnimate from './utility/animate';
import gifFrames from './utility/frames';

const app = express();

app.get('/', (req, res) => {
  res.send('aloha');
});

app.get('/:gifName', async (req, res) => {
  const frames = await gifFrames(req.params.gifName);
  const streaming = stream(req, res);
  await gifAnimate(frames, streaming);
});

app.listen(4321, () => {
  console.log('server running http://localhost:4321');
});
