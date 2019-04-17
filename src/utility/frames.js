import fs from 'fs';
import fg from 'fast-glob';
import promise from 'bluebird';
import getAssetsPath from './assetsPath';

promise.promisifyAll(fs, { suffix: 'Promise' });

export default async (fileName) => {
  const { extractFolder } = getAssetsPath();
  const extractPath = `${extractFolder}/${fileName}`;
  const asciiFiles = fg.sync(`${extractPath}/ascii-*.txt`);

  const frames = await Promise.all(asciiFiles.map(async asciiFile => ({
    file: asciiFile,
    content: await fs.readFilePromise(asciiFile, 'ascii'),
  })));

  return frames;
};
