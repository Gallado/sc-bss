import { runApp, IAppConfig,APP_MODE,config } from 'ice';

import Axios from 'axios'
import {Component} from 'react'
import axios from "axios/index";
axios.defaults.headers.post['Content-Type'] = 'text/plain';
Component.prototype.$axios= Axios; //将axios挂载到Component上，以供全局使用
import Store from "@/store/store";
import {message} from 'antd';
//import {prompt} from './T';
const EvnConfig = config; //环境配置




Axios.interceptors.request.use((config) => {
      switch(APP_MODE){
        case 'dev':   //ServiceIP = "http://172.20.25.38"  iam port = 20219, api port = 20211
          switch(config.url.split('/')[1]){
              case 'api':config.url=EvnConfig.ServiceIP+':30003'+config.url.substring(4);break;//开发环境+api
        }
        case 'pre':   //ServiceIP = "http://172.20.25.39"    iam port = 20219, api port = 20211
            switch(config.url.split('/')[1]){
                case 'api':config.url=EvnConfig.ServiceIP+':30003'+config.url.substring(4);break;//开发环境+api
        }
      }
      //config.headers.token = Store.getState().loginInfo.token;
      return config;
}, (err) => {
      message.error('获取请求失败！');
      return Promise.reject(err)
})

Axios.interceptors.response.use((response) => {
    if(response.status == '200'){//token失效，跳转登录页
        if(response.data.code == '1002'){
            prompt.setLogout();
        }
    }
    return response;
}, (err) => {
    message.error('获取请求失败！');
    return Promise.reject(err);
})

