import { Readable } from 'stream';

export default (req, res) => {
  const stream = new Readable();
  stream.pipe(res);
  stream._read = () => { };

  // close stream
  req.on('close', () => {
    stream.destroy();
  });

  return stream;
};
