import {
    StackNavigator,
} from 'react-navigation';

import React from 'react';
const splashView=require('./splashView');
const Main = require('./Main');
const Detail = require('./Details');
const Ordermanagement = require('./Ordermanagement');
const Account = require('./Account');
const AddUser = require('./AddUser');
const Orderment=require('./Orderment');
const Orderinfo = require('./Orderinfo');
const UserInfo = require('./UserInfo');
const ModifyPassword = require('./ModifyPassword');
const About =require('./About');
const feedback=require('./feedback');

/*
 * 初始化StackNavigator
 */
export default App = StackNavigator({

    //默认加载第一个页面，这里用来注册需要跳转的页面 相当于Manifest.xml文件
    splashView:{
        screen:splashView,

    },
    Main: {
        screen: Main,
    },
    Detail: {
        screen: Detail,
    },
    Ordermanagement: {
        screen: Ordermanagement,
    },
    Orderment: {
        screen: Orderment,
    },
    Account: {
        screen: Account,
    },
    AddUser: {
        screen: AddUser,
    },
    Orderinfo: {
        screen: Orderinfo,
    },
    UserInfo:{
        screen:UserInfo,
    },
    ModifyPassword:{
        screen:ModifyPassword,
    },
    About:{
        screen:About,
    },
    feedback:{
        screen:feedback,
    },
});
