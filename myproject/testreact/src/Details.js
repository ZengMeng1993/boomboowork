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
    ProgressBarAndroid,
    ToastAndroid,
    RefreshControl,
    Alert,


} from 'react-native';
import style from './utils/style';
import px2dp from '../src/px2dp';
import {setSpText,scaleSize,deviceWidth} from '../src/utils/ScreenUtils';
import {deviceHeight} from "./utils/ScreenUtils";
var Spinner = require('react-native-spinkit');
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
    loaddings: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#F6F6F6',
    },

    spinner: {
        marginBottom: 50
    },
    container: {
        height:deviceHeight,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },
    scview: {
        flex:1,
        //justifyContent: 'center',

    },
    containeritem:{
        flex:1,
        //alignItems: 'center',
        //flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        width:scaleSize(710),
        marginLeft:scaleSize(20),
        marginRight:scaleSize(20),
        borderRadius: 5,
        marginTop:scaleSize(30),
    },

    containeritem2:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#F6F6F6',

    },
    useritem:{
        flex:1,
        //flexDirection: 'row',
        backgroundColor:'#3B77FF',
        borderRadius: 5,


    },
    useritem2:{
        flex:1,
        //flexDirection: 'row',
        backgroundColor:'#3B77FF',
        borderRadius: 5,
        marginLeft:scaleSize(40),
        marginRight:scaleSize(40),


    },
    usertextitem:{
        flex:1.5,
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        //justifyContent: 'center',
        alignItems: 'center',
        //borderRadius: 5,
    },
    userthree:{
        flex:3,
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        marginLeft:scaleSize(52),
        marginRight:scaleSize(59),
        marginBottom:scaleSize(44),

    },
    text1:{
        fontSize:scaleSize(59),
        color:'#FFFFFF',
        marginLeft:scaleSize(30),
        marginTop:scaleSize(33),
    },
    text2:{
        fontSize:px2dp(10),
        color:'#DBDBDB',
        marginLeft:scaleSize(30),
        marginTop:scaleSize(14),
    },
    nation:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#F6F6F6',
        marginLeft:scaleSize(40),
        marginRight:scaleSize(40),
        marginBottom:scaleSize(147),
        marginTop:scaleSize(46),
    },
    nationitem:{
        flex:1,
        //flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        borderRadius:5,


    },
    nationitem2:{
        flex:1,
        //flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        borderRadius:5,
        marginLeft:scaleSize(32),
        marginRight:scaleSize(32),


    },
    text3:{
        fontSize:px2dp(12),
        color:'#808DAB',
        textAlign:'center',
        justifyContent: 'center',
    },
    userimag:{
        marginLeft:scaleSize(122),
        marginRight:scaleSize(22),
        marginTop:scaleSize(33),
        marginBottom:scaleSize(16),
        width:scaleSize(29),
        height:scaleSize(27),
    },
    userimag2:{
        marginLeft:scaleSize(122),
        marginRight:scaleSize(22),
        marginTop:scaleSize(33),
        marginBottom:scaleSize(16),
        width:scaleSize(28),
        height:scaleSize(27),
    },
    userimag3:{
        marginLeft:scaleSize(121),
        marginRight:scaleSize(22),
        marginTop:scaleSize(33),
        marginBottom:scaleSize(16),
        width:scaleSize(19),
        height:scaleSize(24),
    },
    userimag4:{
        marginLeft:scaleSize(121),
        marginRight:scaleSize(22),
        marginTop:scaleSize(33),
        marginBottom:scaleSize(16),
        width:scaleSize(20),
        height:scaleSize(26),
    },
    userimag5:{
        marginLeft:scaleSize(121),
        marginRight:scaleSize(22),
        marginTop:scaleSize(33),
        marginBottom:scaleSize(16),
        width:scaleSize(25),
        height:scaleSize(25),
    },
    backview:{
        backgroundColor:'#FF9C28',
        width:scaleSize(9),
        height:scaleSize(28),
        marginTop:scaleSize(35),
        justifyContent: 'center',
        //alignItems: 'center',
    },
    textuser:{
        marginLeft:scaleSize(22),
        marginTop:scaleSize(35),
        fontSize:px2dp(15),
        color:'#333333',

        justifyContent: 'center',
        //alignItems: 'center',
    },
    acico:{
        width:scaleSize(67),
        height:scaleSize(65),
        justifyContent:'center',
        alignItems:'center',
        marginTop:scaleSize(38),
        marginLeft:scaleSize(68),
        marginBottom:scaleSize(22),
    },
    acico2:{
        width:scaleSize(54),
        height:scaleSize(62),
        justifyContent:'center',
        alignItems:'center',
        marginTop:scaleSize(37),
        marginLeft:scaleSize(74),
        marginBottom:scaleSize(24),
    },
    acico3:{
        width:scaleSize(62),
        height:scaleSize(62),
        justifyContent:'center',
        alignItems:'center',
        marginTop:scaleSize(40),
        marginLeft:scaleSize(70),
        marginBottom:scaleSize(23),
    }


}
var firstClick = 0;
class Details extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}});
        this.state = {
            account_total_num:'',
            account_use_num:'',
            account_unuse_num:'',
            orders_total_num:'',
            orders_confirm_num:'',
            orders_unconfirm_num:'',
            account:'',
            header:'',
            hidden : true,
            isRefreshing: false,//下拉刷新状态
        };
        this.handleBack = this.handleBack.bind(this);
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBack)
        DeviceEventEmitter.addListener('show',(dic)=>{
            //接收到详情页发送的通知，刷新首页的数据，改变按钮颜色和文字，刷新UI
            // if(dic=='2'){
                console.log("刷新数据",11111);
                this.fetchData();
            //}

        });
    }




    fetchData() {
            //const { params } = this.props.navigation.state;

            let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
            console.log(auth_token)
            fetch("http://crm.bomboo.cn/store/user/info"+"?"+auth_token)
                .then((response) => response.text() )
                .then((responseData)=>{

                    console.log('responseData',responseData);
                    this.setState({
                        hidden:false,
                    })
                    //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                    //let res = responseData;
                    let res = JSON.parse(responseData);
                    let {ret,msg,data} = res;
                    if(ret==0) {
                        console.log("zzzzz",data);
                        let {account_total_num,account_use_num,account_unuse_num,orders_total_num,orders_confirm_num,orders_unconfirm_num,account,header} = data;
                        this.setState({
                            account_total_num:account_total_num,
                            account_use_num:account_use_num,
                            account_unuse_num:account_unuse_num,
                            orders_total_num:orders_total_num,
                            orders_confirm_num:orders_confirm_num,
                            orders_unconfirm_num:orders_unconfirm_num,
                            account:account,
                            header:header,

                        });
                    }
                    if(ret=='404'){
                        Alert.alert(
                            '提示',
                            '你的账号在别的设备登录过，请重新登录',
                                [
                                {text: '确定', onPress: ()=> console.log('点击确定')}
                                ]);

                        this.props.navigation.navigate('Main')
                    }



                })
                .catch((error)=>{console.error('error',error)});



    }



    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle: '邦客展招',
            headerBackTitle: null,
            //顶部标题栏的样式
            headerStyle: styles.headerStyle,
            //顶部标题栏文字的样式
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft:null,
            //设置滑动返回的距离
            // gestureResponseDistance: {horizontal: 300},
            //
            // //是否开启手势滑动返回，android 默认关闭 ios打开
            // // gesturesEnabled: true,
            //
            // //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            // headerBackTitle: null,
            // //导航栏的样式
            // headerStyle: styles.headerStyle,
            // //导航栏文字的样式
            // headerTitleStyle: styles.headerTitleStyle,
            // //返回按钮的颜色
            //headerTintColor: 'white',

            //隐藏顶部导航栏
            // header: null,

            //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
            //headerRight: (<View/>),

            //设置导航栏左边的视图
            // headerLeft: (<View/>),
            gesturesEnabled:false,
            alignSelf:'center',

        }

    );



    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
    }

    handleBack = () => {
        //if(this.props.navigation.state.routeName=='Details'){
            var timestamp = (new Date()).valueOf();
            if (timestamp - firstClick > 2000) {
                firstClick = timestamp;
                ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
                return true;
            } else {
                BackHandler.exitApp();
                return false;
            }
       // }else {
            //this.props.navigation.goBack();
       //}


    }




    clickLoginBtn() {
        //console.log('test');
        //this.fetchData();
        this.props.navigation.navigate('Ordermanagement', {auth_token:this.props.navigation.state.params.auth_token,account_total_num:this.state.account_total_num
        ,account_use_num:this.state.account_use_num,account_unuse_num:this.state.account_unuse_num
        })

    }

    clickorderBtn() {
        //console.log('test');
        //this.fetchData();
        this.props.navigation.navigate('Orderment', {auth_token:this.props.navigation.state.params.auth_token,orders_total_num:this.state.orders_total_num
            ,orders_confirm_num:this.state.orders_confirm_num,orders_unconfirm_num:this.state.orders_unconfirm_num
        })

    }

    clickuserBtn() {
        //console.log('test');
        //this.fetchData();
        this.props.navigation.navigate('UserInfo', {auth_token:this.props.navigation.state.params.auth_token,header:this.state.header,account:this.state.account,
        })

    }


    render() {

        return (
            <ScrollView style={styles.scview} refreshControl={  //设置下拉刷新组件
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                    tintColor='red'
                    title= {this.state.isRefreshing? '刷新中....':'下拉刷新'}
                />
            }>
            <View style={styles.container}>
                {this.showPage()}
            </View>
            </ScrollView>

        )


    }

    onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.fetchData();
            this.setState({
                isRefreshing: false,

            });
        }, 2000);
    }
    //
    // componentWillMount() {
    //
    //     console.log('test');
    //     this.fetchData();
    // }

    componentWillMount() {
        this.fetchData();
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
            BackHandler.exitApp();
            return false;
        }
        // this.lastBackPressed = Date.now();
        // BackHandler.exitApp();
        return true;
    };




    showPage(){
        //隐藏
        if(this.state.hidden){
            return  (
                <View style={styles.loaddings}>
                    <Spinner style={styles.spinner} isVisible={this.state.hidden} size={100} type={"ThreeBounce"} color={'#3B77FF'}/>
                </View>


            );
        }
        //显示
        return (

            <View style={styles.container}>
                <View style={styles.containeritem}>
                    <View style={styles.usertextitem}>
                        <View style={styles.backview}></View>
                        <Text style={styles.textuser}>账号</Text>


                    </View>
                    <View style={styles.userthree}>
                        <View style={styles.useritem}>
                            <Text style={styles.text1}>{this.state.account_total_num}</Text>
                            <Text style={styles.text2}>账号总数</Text>
                            <Image style={styles.userimag} source={require('./imgs/account_total_num.png')}></Image>

                        </View>
                        <View style={styles.useritem2}>
                            <Text style={styles.text1}>{this.state.account_use_num}</Text>
                            <Text style={styles.text2}>已分配账号</Text>
                            <Image style={styles.userimag2} source={require('./imgs/account_use_num.png')}></Image>

                        </View>
                        <View style={styles.useritem}>
                            <Text style={styles.text1}>{this.state.account_unuse_num}</Text>
                            <Text style={styles.text2}>剩余账号</Text>
                            <Image style={styles.userimag3} source={require('./imgs/account_unuse_num.png')}></Image>
                        </View>
                    </View>

                </View>



                <View style={styles.containeritem}>
                    <View style={styles.usertextitem}>
                        <View style={styles.backview}></View>
                        <Text style={styles.textuser}>订单</Text>


                    </View>
                    <View style={styles.userthree}>
                        <View style={styles.useritem}>
                            <Text style={styles.text1}>{this.state.orders_total_num}</Text>
                            <Text style={styles.text2}>订单总数</Text>
                            <Image style={styles.userimag4} source={require('./imgs/orders_total_num.png')}></Image>
                        </View>
                        <View style={styles.useritem2}>
                            <Text style={styles.text1}>{this.state.orders_unconfirm_num}</Text>
                            <Text style={styles.text2}>待确定订单</Text>
                            <Image style={styles.userimag5} source={require('./imgs/orders_total_num.png')}></Image>
                        </View>
                        <View style={styles.useritem}>
                            <Text style={styles.text1}>{this.state.orders_confirm_num}</Text>
                            <Text style={styles.text2}>已确定订单</Text>
                            <Image style={styles.userimag5} source={require('./imgs/orders_confirm_num.png')}></Image>
                        </View>
                    </View>

                </View>




                <View style={styles.containeritem2} >

                    <View style={styles.nation}>
                        <TouchableOpacity style={styles.nationitem} onPress={() => this.clickLoginBtn()}>
                            <Image style={styles.acico} source={require('./imgs/acico.png')}></Image>
                            <Text style={styles.text3}  >账号管理</Text>
                        </TouchableOpacity>
                        <View style={styles.nationitem2}>
                            <TouchableOpacity style={styles.nationitem} onPress={() => this.clickorderBtn()}>
                                <Image style={styles.acico2} source={require('./imgs/orderico.png')}></Image>
                                <Text style={styles.text3}>订单管理</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.nationitem}>
                            <TouchableOpacity style={styles.nationitem} onPress={() => this.clickuserBtn()}>
                                <Image style={styles.acico3} source={require('./imgs/userinfo.png')}></Image>
                                <Text style={styles.text3}>个人中心</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>




            </View>

        )

    }

}





module.exports = Details;