/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */

const PAGE_BREAK = '\x1B[2J\x1B[H';

const makeFrame = content => (
  `${PAGE_BREAK}${content}`
);

const delay = async millisec => new Promise((resolve) => {
  setTimeout(() => resolve(), millisec);
});

export default async (frames, stream) => {
  // push content into stream
  while (true) {
    for (const frame of frames) {
      stream.push(makeFrame(frame.content));
      await delay(210);
    }
  }
};
