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
    DeviceEventEmitter,
    WebView,
} from 'react-native';
import px2dp from '../src/px2dp';
import '../src/utils/RNAsyncStorage';
import {setSpText,scaleSize,deviceWidth} from '../src/utils/ScreenUtils';
//const account_total_num = require('./imgs/account_total_num@2x.png');
const styles = {
    headerStyle: {
        backgroundColor: '#FFFFFF',
    },
    headerTitleStyle: {
        color: '#333333',
        //设置标题的大小
        fontSize: px2dp(17),
        //居中显示
        alignSelf: 'center',
    },
    container: {

        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },
    container1: {

        height:scaleSize(426),
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },



}
class About extends Component {

    constructor(props) {
        super(props);
        var title = '';
        this.state = {

        };
    }



    componentDidMount(){
        console.log("uri",this.props.navigation.state.params.uri);
        console.log("title",this.props.navigation.state.params.title);

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

    设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle:navigation.state.params.title,
            //顶部标题栏的样式
            headerStyle: styles.headerStyle,
            //顶部标题栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            headerBackTitle:'返回',
            // //返回按钮的颜色
            headerTintColor: '#333333',
            alignSelf:'center',
            headerRight: <View/>,


        }

    );






    render() {

        return (
            <View style={styles.container}>

                <WebView

                    //ref={this.props.navigation.state.params.uri}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.props.navigation.state.params.uri}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={this.state.scalesPageToFit}
                />

            </View>



        )


    }



}






module.exports = About;