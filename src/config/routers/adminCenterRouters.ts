import React from 'react';
const OrganManage = React.lazy(() => import('@/pages/AdminCenter/OrganManage'));
const UserManage = React.lazy(() => import('@/pages/AdminCenter/UserManage'));
const RoleManage = React.lazy(() => import('@/pages/AdminCenter/RoleManage'));
const PersonCenter = React.lazy(() => import('@/pages/AdminCenter/PersonCenter'));
const ProcessConfig = React.lazy(() => import('@/pages/AdminCenter/ProcessConfig'));

export default [
  {path:'/organManage',exact: true, component:OrganManage},
  {path:'/userManage',exact: true, component:UserManage},
  {path:'/roleManage',exact: true, component:RoleManage},
  {path:'/personCenter',exact: true, component:PersonCenter},
  {path:'/processConfig',exact: true, component:ProcessConfig},
];
