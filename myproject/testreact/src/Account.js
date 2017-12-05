import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    Platform,
    BackHandler,
} from 'react-native';
const styles = {
    headerStyle: {
        backgroundColor: '#4398ff',
    },
    headerTitleStyle: {
        color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',
    },
    container: {
        backgroundColor:'white',
    },
    textview:{
        backgroundColor:'gray',
        marginLeft:10,
        marginTop:20,
        marginRight:10,

    },
    textviewone:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:15,
        marginBottom:20,
    },
    textviewtwo:{
        flex:1,
        flexDirection:'row',
        marginBottom:20,
    },



}

class Account extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle: navigation.state.params.key,
            //设置滑动返回的距离
            gestureResponseDistance: {horizontal: 300},

            //是否开启手势滑动返回，android 默认关闭 ios打开
            // gesturesEnabled: true,

            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            headerBackTitle: null,
            //导航栏的样式
            headerStyle: styles.headerStyle,
            //导航栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //返回按钮的颜色
            headerTintColor: 'white',

            //隐藏顶部导航栏
            // header: null,

            //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
            headerRight: (<View/>),

            //设置导航栏左边的视图
            // headerLeft: (<View/>),
            alignSelf:'center',

        }



    );

    componentDidMount(){

        if (Platform.OS === 'android') {
            this.listener = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            this.listener.remove('hardwareBackPress');
        }
    }

    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            //BackHandler.exitApp();
            return false;
        }
        this.props.navigation.goBack();
        return true;
    };

    render() {

        return (

                <View style={styles.container}>

                </View>




        )
    }

}

module.exports = Account;