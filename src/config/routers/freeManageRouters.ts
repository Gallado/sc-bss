import React from 'react';
const FreeSummary = React.lazy(() => import('@/pages/FreeManage/FreeSummary'));
const IaasOrder = React.lazy(() => import('@/pages/FreeManage/OrderManage/IaaS'));
const IaasDetail = React.lazy(() => import('@/pages/FreeManage/OrderManage/IaaS/component/IaasDetail'));
const PaasOrder = React.lazy(() => import('@/pages/FreeManage/OrderManage/PaaS'));
const SaasOrder = React.lazy(() => import('@/pages/FreeManage/OrderManage/SaaS'));
const ServiceOrder = React.lazy(() => import('@/pages/FreeManage/OrderManage/ServiceOrder'));
const EquipmentOrder = React.lazy(() => import('@/pages/FreeManage/OrderManage/EquipmentOrder'));
const BookKeeping = React.lazy(() => import('@/pages/FreeManage/BookKeeping'));


export default [
  {path:'/freeSummary',exact: true, component:FreeSummary},
  {path:'/iaasOrder',exact: true, component:IaasOrder},
  {path:'/IaasDetail',exact: true, component:IaasDetail},
  {path:'/paasOrder',exact: true, component:PaasOrder},
  {path:'/saasOrder',exact: true, component:SaasOrder},
  {path:'serviceOrder',exact: true, component:ServiceOrder},
  {path:'equipmentOrder',exact: true, component:EquipmentOrder},
  {path:'/bookKeeping',exact: true, component:BookKeeping},
];
