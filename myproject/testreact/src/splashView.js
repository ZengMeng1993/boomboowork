import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    PixelRatio,
    Dimensions,
} from 'react-native';
import px2dp from '../src/px2dp';
const Account = require('./imgs/test.jpg');

export default class splashView extends Component {
    //构造函数
    constructor(props) {
        super(props);


    }
    设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        //左侧标题
        //headerTitle: '登录',
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //顶部标题栏的样式
        headerStyle: styles.headerStyle,
        //顶部标题栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,

    });




    componentDidMount() {
        this.timer = setTimeout(
            () => {


                //this.props.navigation.navigate('Main', {key: '主页面'});
                storage.load({
                    key: 'token',

                    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                    autoSync: true,

                    // syncInBackground(默认为true)意味着如果数据过期，
                    // 在调用sync方法的同时先返回已经过期的数据。
                    // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
                    syncInBackground: true,

                    // 你还可以给sync方法传递额外的参数
                    syncParams: {
                        extraFetchOptions: {
                            // 各种参数
                        },
                        someFlag: true,
                    },
                }).then(ret => {
                    // 如果找到数据，则在then方法中返回
                    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
                    // 你只能在then这个方法内继续处理ret数据
                    // 而不能在then以外处理
                    // 也没有办法“变成”同步返回
                    // 你也可以使用“看似”同步的async/await语法
                    console.log(ret)
                    if(ret!=null&&ret!=''){
                        this.props.navigation.navigate('Detail', {auth_token: ret});
                    }else {
                        this.props.navigation.navigate('Main', {key: '登录'});
                    }
                }).catch(err => {
                    //如果没有找到数据且没有sync方法，
                    //或者有其他异常，则在catch中返回
                    this.props.navigation.navigate('Main', {key: '登录'});
                    console.warn(err.message);
                    switch (err.name) {
                        case 'NotFoundError':
                            // TODO;
                            break;
                        case 'ExpiredError':
                            // TODO
                            break;
                    }
                })





            },
            1500

        );

    }




    render() {

        return (
            <View style={styles.container}>

                <Image style={styles.backgroundImage}  source={Account}></Image>
            </View>
        );
    }

    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }
}

const styles = StyleSheet.create({

    container: {

        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',

    },

    headerStyle: {
        backgroundColor: '#3B77FF',
        height:0,

    },

        backgroundImage:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            width:null,
            width:null,
            //不加这句，就是按照屏幕高度自适应
            //加上这几，就是按照屏幕自适应
            //resizeMode:Image.resizeMode.contain,
            //祛除内部元素的白色背景
            backgroundColor:'rgba(0,0,0,0)',
        },
});
module.exports = splashView;