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
    DeviceEventEmitter,
    Dimensions,
    PixelRatio,
    ToastAndroid,
    BackHandler,
    Alert,

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
    container3: {
        marginTop:scaleSize(20),
        height:scaleSize(200),

        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    container2: {
        marginTop:scaleSize(21),
        height:scaleSize(200),

        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container2item: {
        flex:1,
        flexDirection: 'row',

        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container2imagview: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-end',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    container2text: {
        color:'#333333',
        flex:1,
        fontSize:px2dp(17),
        marginLeft:scaleSize(42),


    },
    container2text1: {
        color:'#333333',
        flex:1,
        textAlign:'center',
        fontSize:px2dp(17),
        marginRight:scaleSize(41),


    },
    container2image: {
        height:scaleSize(21),
        width:scaleSize(11),
        //fontSize:px2dp(17),
        marginRight:scaleSize(41),


    },

    imagitem:{
        height:scaleSize(416),
        width:deviceWidth,
        justifyContent:'center',
        alignItems:'center',


    },

    circleimge:{
        width:scaleSize(155),
        height:scaleSize(155),
        borderRadius:40,
        borderWidth:2,
        borderColor:'white',
        alignSelf:'center',
        justifyContent: 'center',
    },
    textitem:{
        flexDirection: 'row',
        marginTop:scaleSize(57),

    },
    textview:{
        backgroundColor:'#4285F4',
        justifyContent:'center',
        alignItems:'center',
    },
    text1:{
        fontSize:px2dp(11),
        color:'#FFFEFE',
        alignSelf:'center',
        justifyContent: 'center',
        textAlign:'center',
        backgroundColor:'transparent',

    },
    text2:{
        fontSize: px2dp(17),
        color:'#FFFEFE',
        marginLeft:scaleSize(7),
        backgroundColor:'transparent',
    },
    line1:{
        backgroundColor:'#BDBDBD',
        height:0.5,
        marginLeft:px2dp(10),
        marginRight:px2dp(10),



    },
    buttonitem:{
        height:scaleSize(88),
        backgroundColor:'#FF3F3F',
        width:scaleSize(670),
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',

    },
    buttontext:{
        fontSize:px2dp(17),
        color:'#FFFFFF',
        textAlign:'center',
        justifyContent: 'center',

    },
    container4: {
        alignItems:'center',
        justifyContent: 'center',
        height:scaleSize(240),
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },


}
class UserInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }
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







    fetchData() {
        //const { params } = this.props.navigation.state;

        let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
        console.log(auth_token)
        fetch("http://crm.bomboo.cn/store/user/info"+"?"+auth_token)
            .then((response) => response.text() )
            .then((responseData)=>{

                console.log('responseData',responseData);
                //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                //let res = responseData;
                let res = JSON.parse(responseData);
                let {ret,msg,data} = res;
                console.log(data)
                let {account_total_num,account_use_num,account_unuse_num,orders_total_num,orders_confirm_num,orders_unconfirm_num,account} = data;
                if(ret==0) {
                    this.setState({
                        account_total_num:account_total_num,
                        account_use_num:account_use_num,
                        account_unuse_num:account_unuse_num,
                        orders_total_num:orders_total_num,
                        orders_confirm_num:orders_confirm_num,
                        orders_unconfirm_num:orders_unconfirm_num,
                        account:account,
                    });
                }else{
                    Alert.alert(
                        '提示',
                        msg,
                            [
                            {text: '确定', onPress: ()=> console.log('点击确定')}
                            ]);
                }


            })
            .catch((error)=>{console.error('error',error)});



    }



    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle:'个人中心',
            //顶部标题栏的样式
            headerStyle: styles.headerStyle,
            //顶部标题栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            headerBackTitle:'返回',
            // //返回按钮的颜色
            headerTintColor: '#333333',
            alignSelf:'center',
            headerRight: <View/>

        }

    );


    clickLoginBtn() {
        //console.log('test');
        //this.fetchData();
        storage.remove({
            key: 'token'
        });
        this.props.navigation.navigate('Main')

    }

    clickpsd() {
        this.props.navigation.navigate('ModifyPassword', {auth_token:this.props.navigation.state.params.auth_token,
        })

    }
    clickabout(){
        this.props.navigation.navigate('About', {uri:"http://crm.bomboo.cn//store/user/about",title:"关于我们",
        })
    }

    clickNotice(){
        this.props.navigation.navigate('About', {uri:"http://crm.bomboo.cn//store/user/notice",title:"系统公告",
        })
    }




    render() {

        return (
            <View style={styles.container}>

                <View style={styles.container1}>

                    <Image style={styles.imagitem} source={require('./imgs/userinfoitem.png')}>

                        <Image style={styles.circleimge} source={require('./imgs/ictouxiang.png')}>

                        </Image>
                        <View style={styles.textitem}>

                                <Text style={styles.text1}>账号</Text>


                            <Text style={styles.text2}>{this.props.navigation.state.params.account}</Text>
                        </View>


                    </Image>

                </View>

                <View style={styles.container2}>

                    <View style={styles.container2item}>
                        <Text style={styles.container2text}>账号</Text>
                        <Text style={styles.container2text1}>{this.props.navigation.state.params.account}</Text>
                    </View>
                    <View style={styles.line1}></View>
                    <TouchableOpacity style={styles.container2item} activeOpacity={0.5} onPress={() => this.clickpsd()}>
                        <Text style={styles.container2text} >修改密码</Text>
                        <View style={styles.container2imagview}>
                        <Image style={styles.container2image} source={require('./imgs/back.png')}/>
                        </View>
                    </TouchableOpacity>


                </View>


                <View style={styles.container3}>



                    <TouchableOpacity style={styles.container2item} activeOpacity={0.5} onPress={() => this.clickabout()}>
                        <Text style={styles.container2text}>关于我们</Text>
                        <View style={styles.container2imagview}>
                            <Image style={styles.container2image} source={require('./imgs/back.png')}/>
                        </View>
                    </TouchableOpacity>
                    {/*<View style={styles.line1}></View>*/}
                    {/*<View style={styles.container2item} >*/}
                        {/*<Text style={styles.container2text}>意见反馈</Text>*/}
                        {/*<View style={styles.container2imagview}>*/}
                            {/*<Image style={styles.container2image} source={require('./imgs/back.png')}/>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    <View style={styles.line1}></View>
                    <TouchableOpacity style={styles.container2item} activeOpacity={0.5} onPress={() => this.clickNotice()}>
                        <Text style={styles.container2text}>系统公告</Text>
                        <View style={styles.container2imagview}>
                            <Image style={styles.container2image} source={require('./imgs/back.png')}/>
                        </View>
                    </TouchableOpacity>



                </View>
                <View style={styles.container4}>
                <TouchableOpacity style={styles.buttonitem} activeOpacity={0.5} onPress={() => this.clickLoginBtn()}
                >
                    <Text style={styles.buttontext}>退出登录</Text>
                </TouchableOpacity>

                </View>

            </View>



        )


    }



}





module.exports = UserInfo;