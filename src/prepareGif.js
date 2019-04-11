import extracter from './utility/extracter';
import converter from './utility/converter';
import getLogger from './utility/logger';

const [file] = process.argv.slice(2);

async function prepare(fileName) {
  const logger = getLogger('prepare');

  try {
    logger.info('start extract gif frames..');
    await extracter(fileName);

    logger.info('start conver gif frames..');
    await converter(fileName);

    logger.info('done');
  } catch (error) {
    logger.error(error);
  }
}

prepare(file);
