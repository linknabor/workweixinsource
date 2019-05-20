import Vue from 'vue'
import Router from 'vue-router'

// 公共
import loading from '@/components/loading'    //加载动画

//入口
import index from '@/page/index'  //访客登记  智能开门
import index1 from '@/page/index1'  //业主CRM

//访客管理
import register from '@/page/visitor/register' //访客登记
import record from '@/page/visitor/record' //记录管理
import auditing from '@/page/visitor/auditing' //访客审核

//智能开门
import code from '@/page/open/code'  //扫描二维码

//客户管理
import custom from '@/page/custom/custom'  //小区
import build from '@/page/custom/build'    //楼
import unit from '@/page/custom/unit'      //单元
import room from '@/page/custom/room'      //室号
import detail from '@/page/custom/detail'  //客户详情
import bill from '@/page/custom/bill'      //逾期欠费
import codePay from '@/page/custom/codePay'//二维码收款

//车辆管理
import carInquiry from '@/page/car/inquiry' //车牌号查询
import carNumber from '@/page/car/detail'   //车牌号详情

//物业收费
import wuyePay from '@/page/wuye/pay'       //物业收费

Vue.use(Router)

const router= new Router({
  routes: 
    [
      // 入口
      {path:'/', name:'index', component:index, meta:{ title:'访客管理' }},
      {path:'/index1', name:'index1', component:index1, meta:{title:'业主CRM'}},

      // 访客登记
      {path:'/register',name: 'register',component: register,meta:{title: '登记'}},
      {path: '/record',name: 'record',component: record,meta:{title: '记录管理'}},
      {path: '/auditing',name: 'auditing',component: auditing,meta:{title: '访客审核'}},

      // 智能开门
      {path: '/code',name: 'code',component: code,meta:{title: '二维码'}},

      // 客户
      {path: '/custom',name: 'custom',component: custom,meta:{title: '客户'}},
      {path: '/build',name: 'build',component: build,meta:{title: ''}},
      {path: '/unit',name: 'unit',component: unit,meta:{title: ''}},
      {path: '/room',name: 'room',component: room},
      {path: '/detail',name: 'detail',component: detail},
      {path: '/bill',name: 'bill',component: bill,meta: {title: '逾期欠费'}},
      {path: '/codePay',name: 'codePay',component: codePay,meta:{title: '收款'}},

      // 车辆查询
      {path: '/carInquiry',name:'carInquiry',component:carInquiry,meta:{title:'车牌号查询'}},
      {path: '/carNumber',name:'carNumber',component:carNumber,meta:{title: '车牌号详情'}},
      //物业收费
      {path:'/wuyePay',name:'wuyePay',component:wuyePay,meta:{title:'物业收费'}}
    ]
});
//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
    //动态改变title
    changeTitle(to.meta.title)
    next();
});

//动态改变title
function changeTitle(title) {
    title = title ? title : '奈博科技';
    window.document.title = title;
};

export default router
