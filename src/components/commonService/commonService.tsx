/**
 * @Title：commonService
 * @Description: 公共服务类
 * @auther: duweiwei
 * @date: 2020/03/11 23:45:00
 * @return:
 */
import axios from 'axios';
import Store from '@/store' //添加redux
import routes from '@/config/routes';
export default{


  /**
   * @name：deepClone
   * @Description:  用于数组对象深拷贝
   * @parmas: time
   * @auther: duweiwei
   * @date:  2020/03/11 23:45:00
   * @return: arr obj
   */

  deepClone: function (obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          //判断ojb子元素是否为对象，如果是，递归复制
          if (obj[key] && typeof obj[key] === "object") {
            objClone[key] = this.deepClone(obj[key]);
          } else {
            //如果不是，简单复制
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
  },





  /**
   * @name：获取系统时间
   * @Description:  获取系统时间给导出文件加时间后缀
   * @parmas: null
   * @auther: duweiwei
   * @date:  2020/04/01 10:45:00
   * @return:
   */
  getSysDateTime:function () {
    var date = new Date();//实例一个时间对象；
    var Y = date.getFullYear();
    var M = date.getMonth() + 1 < 10 ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
    var D = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate();
    var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours();
    var m = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes();
    var s = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds();
    return Y + "年" + M + "月" + D + "日" + h + "_" + m + "_" + s;
  },

  /**
   * @name：监控获取系统时间
   * @Description:  获取实时监控时间
   * @parmas: null
   * @auther: duweiwei
   * @date:  2020/06/01 10:45:00
   * @return:
   */
  getSysMonitorDateTime:function () {
    var date = new Date();//实例一个时间对象；
    var Y = date.getFullYear();
    var M = date.getMonth() + 1 < 10 ? ('0' + (date.getMonth() + 1)) : date.getMonth() + 1;
    var D = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate();
    var h = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours();
    var m = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes();
    var s = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds();
    return Y + "年" + M + "月" + D + "日" + h + ":" + m + ":" + s;
  },








  /**
   * @name：getHighRiskAuthority
   * @Description:  获取高危操作按钮权限是否开放
   * @parmas: [options]
   * @auther: duweiwei
   * @date:  2020/04/17 10:45:00
   * @return:
   */
  getHighRiskAuthority:function(options,callback){
    let authorityFlag = "false";
    let params =  {
      baseInfo:{},
      properties:{
        dataDictionaryCode:"highRiskAuthority",
      }
    };
    axios.post('/api/v1/yc/cmp-resource/queryDictionaryItem',params, {emulateJSON: true})
      .then(function (response) {
        if(response.data.code == 200){
          for(var i =0;i<response.data.retObj.list.length;i++){
            if(response.data.retObj.list[i].dataDictionaryItemName === options){
              authorityFlag = response.data.retObj.list[i].dataDictionaryItemValue;
            }
          }
          callback(authorityFlag);
        }else{
          callback(authorityFlag);
        }
      }).catch(function (error) {
      callback(authorityFlag);
      console.log(error);
    });
  },

  /**
   * @name：参数是否有效
   * @Description:  函数参数是否为undefined
   * @parmas: [options]
   * @auther: duweiwei
   * @date:  2020/08/17 10:45:00
   * @return:
   */
  paramsError:function(options,that){
    let params = {};

    for(var i =0;i<options.split('.').length;i++){
      if(options.split('.')[i] != 'this' && options.split('.')[i] != 'that'  && options.split('.')[i] != 'self'){
        if(params[options.split('.')[i]] == undefined){
          //that[options.split('.')[i]] == {};
          params[options.split('.')[i]] ={};
          params = params[options.split('.')[i]];
        }else{
          params = params[options.split('.')[i]];
        }
      }else{
        params = that;
      }
    }
    return params;
  },

  /**
   * @name：参数是否有效
   * @Description:  函数参数是否为undefined
   * @parmas: [options]
   * @auther: duweiwei
   * @date:  2020/08/17 10:45:00
   * @return:
   */
  ipCheck:function(option){
    var ipText = '';
    if(option == undefined || option == null || option == ""){
      ipText = ' ';
    }else{
      ipText = option;
    }
    return ipText;
  },


  /**
   * @name：参数是否有效
   * @Description:  防抖
   * @parmas: func, wait 延迟时间
   * @auther: liumm308
   * @date:  2020/09/29 10:35:12
   * @return:
   */
  debounce: function(func, wait) {
    let timer;
    return function() {
      let context = this;
      let args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  },

  /**
   * @name：参数是否有效
   * @Description:  节流
   * @parmas: func, wait 延迟时间
   * @auther: liumm308
   * @date:  2020/09/29 11:11:32
   * @return:
   */
  throttle: function(func, wait) {
    let previous = 0;
    return function() {
      let now = Date.now();
      let context = this;
      let args = arguments;
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    }
  },


  findMenuHRef: function (RouteName,menuRoutes) {
    let returnRoute = {};
    menuRoutes.forEach(function (item) {
      if(RouteName == item.path)
        returnRoute = item;
    }
    return returnRoute;
  }

}

