/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */

const PAGE_BREAK = '\x1B[2J\x1B[H';

const delay = async millisec => new Promise((resolve) => {
  setTimeout(() => resolve(), millisec);
});

export default async (frames, stream) => {
  // push content into stream
  const infinity = true;
  while (infinity) {
    for (const frame of frames) {
      stream.push(PAGE_BREAK);
      stream.push(frame.content);
      await delay(110);
    }
  }
};
