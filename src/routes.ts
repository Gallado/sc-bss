import { IRouterConfig } from 'ice';
import Layout from '@/Layouts/BasicLayout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Summary from '@/pages/Summary';


import Tenant from '@/pages/TenantManage/Tenant';

import Connect from '@/pages/ProductManage/SCPlan/Connect';
import Computer from '@/pages/ProductManage/SCPlan/Computer';
import DataBase from '@/pages/ProductManage/SCPlan/DataBase';
import FeaturedScenarios from '@/pages/ProductManage/FeaturedScenarios';
import ServiceProviderManage from '@/pages/ProductManage/ServiceProviderManage';



import workOrderRouters from "@/config/routers/workOrderRouters"
import adminCenterRouters from "@/config/routers/adminCenterRouters";
import freeManageRouters from "@/config/routers/freeManageRouters";

import NotFoundRoute from '@/components/NotFound';
import InnerMessage from "@/pages/MessageManage/InnerMessage";

const routerConfig: IRouterConfig[] = [
  {
    path:'/login',
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    children: [ {
      path: '/',
      exact: true,
      redirect: '/login',
      component: Login,
    },{
      path: '/home',
      component: Home,
    },{
      path: '/summary',
      component: Summary,
    },{
      path: '/tenant',
      component: Tenant,
    },{
      path: '/connect',
      component: Connect,
    },{
      path: 'computer',
      component: Computer,
    },{
      path: 'dataBase',
      component: DataBase,
    },{
      path: '/featuredScenarios',
      component: FeaturedScenarios,
    },{
      path: '/serviceProviderManage',
      component: ServiceProviderManage,
    },{
      path: '/tenant',
      component: Tenant,
    },{
      path: '/innerMessage',
      component: InnerMessage,
    },
      ...freeManageRouters,
      ...workOrderRouters,
      ...adminCenterRouters,
      {
        path: '*',
        component: NotFoundRoute,
      },
    ],

  },
  {
    path: '*',
    component: NotFoundRoute,
  },
];

export default routerConfig;
