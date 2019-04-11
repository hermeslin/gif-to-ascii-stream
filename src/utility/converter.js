import promise from 'bluebird';
import fs from 'fs';
import fg from 'fast-glob';
import imageToAscii from 'image-to-ascii';
import getAssetsPath from './assetsPath';

const imageToAsciiPromise = promise.promisify(imageToAscii);
promise.promisifyAll(fs, { suffix: 'Promise' });

export default async (fileName) => {
  const { extractFolder } = getAssetsPath();
  const extractPath = `${extractFolder}/${fileName}`;

  const frames = fg.sync(`${extractPath}/frame-*.png`);
  frames.forEach(async (frame, index) => {
    const result = await imageToAsciiPromise(frame);
    await fs.writeFilePromise(`${extractPath}/ascii-${index}.txt`, result);
  });
};
