import promise from 'bluebird';
import fs from 'fs';
import extractFrames from 'gif-extract-frames';
import mkdirp from 'async-mkdirp';
import getAssetsPath from './assetsPath';

promise.promisifyAll(fs, { suffix: 'Promise' });

export default async (fileName) => {
  const { gifFolder, extractFolder } = getAssetsPath();
  const targetGif = `${gifFolder}/${fileName}.gif`;
  const extractPath = `${extractFolder}/${fileName}`;

  await fs.openPromise(targetGif, 'r+');
  await mkdirp(extractPath);
  await extractFrames({
    input: targetGif,
    output: `${extractPath}/frame-%d.png`,
  });
};
