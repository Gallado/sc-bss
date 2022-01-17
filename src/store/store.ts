import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist';
import SessionStorage from 'redux-persist/lib/storage/session';//将Store 持久化到 SessionStorage
import LocalStorage from 'redux-persist/lib/storage';//将Store 持久化到 LocalStorage



const storageConfig = {
  key: 'root', // 必须有的
  storage: LocalStorage, // 缓存机制
  blacklist: [] // reducer 里不持久化的数据,除此外均为持久化数据
};

const defaultState = {
  menuRoutes: [],//菜单
  currentCloudRegion:{},//当前云区域信息
  loginInfo:{},//登录用户信息
  scCompany:{},//企业应用的状态缓存信息
  consoleInfo:{},//当前应用信息
  activedNavMenu:{},//当前导航

};
const store = createStore(persistReducer(storageConfig,(state = defaultState, action) => {
  switch (action.type) {
    //创建登录信息
    case 'MENU_ROUTES': {
      return {
        ...state,
        menuRoutes: {...action.menuRoutes}
      }
    }
    case 'CURRENT_CLOUDREGION': {
      return {
        ...state,
        currentCloudRegion: {...action.currentCloudRegion}
      }
    }
    case 'LOGIN_INFO': {
      return {
        ...state,
        loginInfo: {...action.loginInfo}
      }
    }
    case 'CONSOLE_INFO': {
      return {
        ...state,
        consoleInfo: {...action.consoleInfo}
      }
    }
    case 'ACTIVED_NAVMENU': {
      return {
        ...state,
        activedNavMenu: {...action.activedNavMenu}
      }
    }
    default:
      break
  }
  return state
})
);
export const persistor = persistStore(store);

export default store;
