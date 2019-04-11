import log4js from 'log4js';

export default (channel) => {
  log4js.configure({
    appenders: {
      out: { type: 'stdout', layout: { type: 'coloured' } },
    },
    categories: {
      default: { appenders: ['out'], level: 'all' },
    },
  });
  return log4js.getLogger(channel);
};
