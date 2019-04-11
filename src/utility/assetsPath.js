import '../config/env';
import appRootPath from 'app-root-path';

export default () => {
  const { ASSESTS_GIF_FOLDER, ASSESTS_EXTRACT_FOLDER } = process.env;
  return {
    gifFolder: `${appRootPath}/${ASSESTS_GIF_FOLDER}`,
    extractFolder: `${appRootPath}/${ASSESTS_EXTRACT_FOLDER}`,
  };
};
