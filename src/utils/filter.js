/**************  所以公共的Filter 定义处 duweiwei ***********************/
import {
    CheckCircleTwoTone,
    CloseCircleTwoTone,
    MinusCircleOutlined,
    WarningTwoTone,
    MinusCircleTwoTone
} from '@ant-design/icons';


const deviceStatusFormat = value => {
    /*switch (value) {
        case 0: var type = (
            <div>
                <WarningTwoTone  twoToneColor="red"/>
                <span style={{paddingLeft:'3px'}}>未注册</span>
            </div>); break;
        case 1: var type = (
            <div>
                <WarningTwoTone  twoToneColor="red"/>
                <span style={{paddingLeft:'3px'}}>未注册</span>
            </div>); break;
        case 2: var type = (
            <div>
                <CheckCircleTwoTone  twoToneColor="green"/>
                <span style={{paddingLeft:'3px'}}>在线</span>
            </div>); break;
        case 3: var type = (
            <div>
                <MinusCircleTwoTone twoToneColor="red"/>
                <span style={{paddingLeft:'3px'}}>离线</span>
            </div>); break;
        case 4: var type = (
            <div>
                <CloseCircleTwoTone  twoToneColor="red"/>
                <span style={{paddingLeft:'3px'}}>异常</span>
            </div>); break;
        default: var type = "--";
    };*/
    switch (value) {
        case 0: var type = (
            <div>
                <span className={"device-status-red"}>未注册</span>
            </div>); break;
        case 1: var type = (
            <div>
                <span  className={"device-status-red"}>未注册</span>
            </div>); break;
        case 2: var type = (
            <div>
                <span  className={"device-status-green"}>在线</span>
            </div>); break;
        case 3: var type = (
            <div>
                <span className={"device-status-grey"}>离线</span>
            </div>); break;
        case 4: var type = (
            <div>
                <span className={"device-status-red"}>异常</span>
            </div>); break;
        default: var type = "--";
    };

    return type;
};

const deviceTypeFormat = value => {
    switch (value) {
        case 1: var type = "国标摄像头"; break;
        case 2: var type = "RTMP摄像头"; break;
        case 4: var type = "NVR设备"; break;
        default: var type = "--";
    };
    return type;
};
const detailNameFormat = value => {
    switch (value) {
        case "baseInfo": var name = "基本信息"; break;
        case "channel": var name = "通道列表"; break;
        case "preview": var name = "实时预览"; break;
        case "videoReply": var name = "设备回放"; break;
        default: var type = "--";
    };
    return name;
};



//时间戳转换成标准时间格式 :1629794728000
const dateTimeFormat = value => {
    if (value) {
        var oDate = new Date();
        oDate.setTime(value);
        var Y = oDate.getFullYear();
        var M = oDate.getMonth() + 1 < 10 ? ('0' + (oDate.getMonth() + 1)) : oDate.getMonth() + 1;
        var D = oDate.getDate() < 10 ? ('0' + oDate.getDate()) : oDate.getDate();
        var h = oDate.getHours() < 10 ? ('0' + oDate.getHours()) : oDate.getHours();
        var m = oDate.getMinutes() < 10 ? ('0' + oDate.getMinutes()) : oDate.getMinutes();
        var s = oDate.getSeconds() < 10 ? ('0' + oDate.getSeconds()) : oDate.getSeconds();
        return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
    }else{
        return '--';
    }
};
//时间戳转换成标准日期格式 :1629794728000
const dateFormat = value => {
    if (value) {
        var oDate = new Date();
        oDate.setTime(value);
        var Y = oDate.getFullYear();
        var M = oDate.getMonth() + 1 < 10 ? ('0' + (oDate.getMonth() + 1)) : oDate.getMonth() + 1;
        var D = oDate.getDate() < 10 ? ('0' + oDate.getDate()) : oDate.getDate();
        return Y + "-" + M + "-" + D;
    }else{
        return '--';
    }
};

//时间搓过滤器 类型："2020-03-02T12:23:41.000+0000"
const timeDataFormatT = value => {
    if (value) {
        var dateee = new Date(value).toJSON();
        var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
    } else {
        var date = '--';
    }
    return date;
};
const textIsNull = (value) =>{
    if (value == '' || value == null || value == undefined) {
        var text = '--';
    } else {
       var text = value;
    }
    return text;
};


export default {
    textIsNull,//文本是否为空
    deviceStatusFormat,//设备状态
    deviceTypeFormat,//设备类型
    detailNameFormat,
    dateTimeFormat,
    dateFormat,
    timeDataFormatT,

}

