
import { runApp, IAppConfig,APP_MODE,config } from 'ice';
console.log('---- 当前环境为：'+APP_MODE+'，ServiceIP为：'+config.ServiceIP+'-------')
import './utils/axios';
const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
