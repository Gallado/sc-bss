
import React ,{Component} from 'react'
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import Store from '@/store/store' //添加redux

import { asideMenuConfig } from './menuConfig';
import HeaderLayout from '@/components/Header';
import NavMenu from '@/components/NavMenu';

import {store,persistor} from '@/store/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {history} from "ice";



export default class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNav:'',
    };
  }

  componentDidMount(){

    this.props.history.listen((route)=>{
      if(route.pathname == '/summary'){
        Store.dispatch({
          type: 'ACTIVED_NAVMENU',
          activedNavMenu:{
            'nav':'summary',
            'menu':undefined

          },
        });
        setTimeout(()=>{
          this.setState({currentNav:'summary'});
        },200)

      }
    });

    console.log('--- BasicLayout activedNav is:');
    console.log(JSON.parse(JSON.parse(localStorage['persist:root']).activedNavMenu));
    if(JSON.parse(JSON.parse(localStorage['persist:root']).activedNavMenu)?.nav){
      this.setState({currentNav:JSON.parse(JSON.parse(localStorage['persist:root']).activedNavMenu)?.nav});

    }else{
      Store.dispatch({
        type: 'ACTIVED_NAVMENU',
        activedNavMenu:{
          'nav':'summary',
          'menu':'summary'

        },
      });
      this.setState({currentNav:'summary'});
    }
  }
  navChangeFn = (item) =>{
   /* Store.dispatch({
      type: 'ACTIVED_NAVMENU',
      activedNavMenu:{
        'nav':item.key,
        'menu':undefined
      },
    });*/
    this.setState({currentNav:item.key});
  };

  render() {
    return (
      <ConfigProvider store={store} locale={zh_CN} autoInsertSpaceInButton={false}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="bss-root-app">
            <HeaderLayout navChangeFn={this.navChangeFn} currentNav={this.state.currentNav}></HeaderLayout>
            <div className='bss-root-layout'>
                <NavMenu currentNav={this.state.currentNav}></NavMenu>
                <div className="layout-container">{this.props.children}</div>
            </div>
          </div>
        </PersistGate>

      </ConfigProvider>
    );
  }
}
