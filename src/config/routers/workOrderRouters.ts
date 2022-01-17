import React from 'react'

const Order = React.lazy(() => import('@/pages/WorkOrderManage/Order'));
const ProductReleaseOrder  = React.lazy(() => import( '@/pages/WorkOrderManage/ProductReleaseOrder'));
const TechSupportOrder  = React.lazy(() => import( '@/pages/WorkOrderManage/TechSupportOrder'));

export default [
  {path:'/order',exact: true, component:Order},
  {path:'/productReleaseOrder',exact: true, component:ProductReleaseOrder},
  {path:'/techSupportOrder',exact: true, component:TechSupportOrder}
];
