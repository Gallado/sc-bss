import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';
const { SubMenu } = Menu;
import { history } from 'ice';
import styles from './index.module.scss';
import navMenuTree from './navMenu';

import Store from "@/store/store";

//const navMenuLsit = navMenuTree['summary'];

export default class NavMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentNav:this.props.currentNav,
      navMenuList:[],
      selectedKeys:[],
      defaultOpenKeys:[]
    }
  }

  state = {
    collapsed: false,
    curLocation:'',
  };

  getCheckedNodes =  (data) =>{
    return new Promise((resolve, reject)=>{
      if(data.length >0){
        for(var i =0;i<data.length;i++){
          if(data[i].children && data[i].children.length>0){
            for(var x=0;x<data[i].children.length;x++){
              if(data[i].children[x] && data[i].children[x].length>0){

              }else{
                resolve(data[i].children[x]);
              }
            }
          }else{
            resolve(data[i])
          }
        }
      }else{
        if(Store.getState().activedNavMenu?.nav == 'summary'){
          let item = {
            "children": [],
            "id":"1",
            "key":"/summary",
            "menuHref": "summary",
            "menuName": "概览"
          };
          resolve(item);
        }
      }
    })
  };

  getDefaultExpendNodes =  (data,menuKey) =>{
    return new Promise((resolve, reject)=>{
      if(data.length >0){
        for(var i =0;i<data.length;i++){
          if(data[i].key == menuKey){
            resolve([]);
          }else{
            if(data[i].children && data[i].children.length>0){
              for(var x=0;x<data[i].children.length;x++){
                if(data[i].children[x].key == menuKey){
                  resolve(data[i]);
                }
              }
            }
          }
        }
      }else{
        if(Store.getState().activedNavMenu?.nav == 'summary'){
          let item = {
            "children": [],
            "id":"1",
            "key":"/summary",
            "menuHref": "summary",
            "menuName": "概览"
          };
          resolve(item);
        }
      }


    })
  };
  componentDidMount(){
    this.setState({currentNav:this.props.currentNav,navMenuList:navMenuTree[this.props.currentNav]},()=>{
      this.getMenuChecks(this.state.navMenuList);
    });

  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentNav != this.props.currentNav) {
      this.setState({currentNav:nextProps.currentNav,navMenuList:navMenuTree[nextProps.currentNav]},()=>{
        this.getMenuChecks(this.state.navMenuList);
      });
    }
  }
  getMenuChecks = async(data) =>{
    let checkList = [];
    let expandedKeysList= [];
    let checkItem ={};
    let expandedItem = {};
    console.log('----- store activedNavMenu 里面的 menu-------');
    console.log(JSON.parse(JSON.parse(localStorage['persist:root']).activedNavMenu)?.menu);

    if(JSON.parse(JSON.parse(localStorage['persist:root']).activedNavMenu)?.menu){
      checkItem.key = JSON.parse(JSON.parse(localStorage['persist:root']).activedNavMenu)?.menu;
      checkList.push(JSON.parse(JSON.parse(localStorage['persist:root']).activedNavMenu)?.menu);
    }else{
      checkItem = await this.getCheckedNodes(data);
      checkList.push(checkItem.key);
    }

    expandedItem = await this.getDefaultExpendNodes(data,checkItem.key);
    expandedKeysList.push(expandedItem.key);



    this.setState({selectedKeys:checkList,defaultOpenKeys:expandedKeysList},()=>{
      console.log('---菜单默认展开----');
      console.log(this.state.defaultOpenKeys);
      console.log('---菜单默认选中----');
      console.log(this.state.selectedKeys);

      Store.dispatch({
        type: 'ACTIVED_NAVMENU',
        activedNavMenu:{
          'nav':this.state.currentNav,
          'menu':checkItem.key
        },
      });
      history.push({pathname: checkItem.key});

    })
  };


  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onSelectMenu = (item)=>{
    let checkList = [];
    checkList.push(item.key);
    this.setState({selectedKeys:checkList},()=>{
      console.log('---菜单选中----');
      console.log(this.state.selectedKeys);
      Store.dispatch({
        type: 'ACTIVED_NAVMENU',
        activedNavMenu:{
          'nav':this.state.currentNav,
          'menu':item.key
        },
      });
    })
  };
  onOpenChange = (openKeys)=>{
    console.log(openKeys);
    this.setState({defaultOpenKeys:openKeys});

  };
  render() {
    return (
      <>
        {
          this.state.navMenuList.length>0?
            <div className={`${styles['navMenuContent']} navMenu-menu`} style={{width: 184, minWidth: 184}}>
              <Menu selectedKeys={this.state.selectedKeys}
                    onSelect={this.onSelectMenu}
                    onOpenChange={this.onOpenChange}
                    openKeys={this.state.defaultOpenKeys}
                    mode="inline" inlineCollapsed={this.state.collapsed}>
                {
                  this.state.navMenuList.map((first, index) => {
                    return (
                      <>
                        {
                          first.children.length > 0 ?
                            <SubMenu key={first.key} title={first.menuName}>
                              {
                                first.children.map((second, index) => {
                                  return (
                                    <>
                                      {
                                        second.children.length > 0 ?
                                          <SubMenu key={second.key} title={second.menuName}>
                                            {
                                              second.children.map((third, index) => {
                                                return (
                                                  <>
                                                    {
                                                      third.children.length > 0 ?
                                                        <SubMenu key={third.key} title={third.menuName}>
                                                          {
                                                            third.children.map((fourth, index) => {
                                                              return (
                                                                <>
                                                                  <Menu.Item key={fourth.key}>
                                                                    <Link className={styles.routLinkFont}
                                                                          to={fourth.menuHref}>{fourth.menuName}</Link>
                                                                  </Menu.Item>
                                                                </>
                                                              )

                                                            })
                                                          }
                                                        </SubMenu> :
                                                        <Menu.Item key={third.key}>
                                                          <Link className={styles.routLinkFont}
                                                                to={third.menuHref}>{third.menuName}</Link>
                                                        </Menu.Item>
                                                    }
                                                  </>
                                                )

                                              })
                                            }
                                          </SubMenu> :
                                          <Menu.Item key={second.key}>
                                            <Link className={styles.routLinkFont}
                                                  to={second.menuHref}>{second.menuName}</Link>
                                          </Menu.Item>
                                      }
                                    </>
                                  )

                                })
                              }
                            </SubMenu> :
                            <Menu.Item key={first.key}>
                              <Link className={styles.routLinkFont} to={first.menuHref}>{first.menuName}</Link>
                            </Menu.Item>
                        }
                      </>


                    )
                  })
                }


              </Menu>
            </div>:undefined
        }
      </>

    );
  }
}

