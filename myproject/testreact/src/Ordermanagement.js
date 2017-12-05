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
    Alert,
    DeviceEventEmitter,
    ProgressBarAndroid,
    RefreshControl,
} from 'react-native';
import px2dp from '../src/px2dp';
import {setSpText,scaleSize,deviceWidth} from '../src/utils/ScreenUtils';
import style from './utils/style';
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
        alignItems: 'center',
        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },
    containersc: {

        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F6F6F6',
    },
    containeritem:{
        flex:0.65,
        //flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        width:px2dp(355),
        marginLeft:px2dp(10),
        marginRight:px2dp(10),
        borderRadius: 5,
        marginTop:px2dp(10),

    },
    buttonitem:{
        height:px2dp(40),
        backgroundColor:'#FF9C28',
        width:px2dp(355),
        marginLeft:px2dp(10),
        marginRight:px2dp(10),
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',

    },

    containeritem2:{
        flex:1.2,
        //flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        marginTop:px2dp(25),
        marginLeft:px2dp(10),
        marginRight:px2dp(10),

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
        marginLeft:px2dp(20),
        marginRight:px2dp(20),



    },
    usertextitem:{
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        height:scaleSize(83),
        //borderRadius: 5,
    },
    userthree:{
        flex:3,
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        marginLeft:px2dp(26),
        marginRight:px2dp(29.5),
        marginBottom:px2dp(22),
        marginTop:px2dp(25),

    },
    text1:{

        fontSize:px2dp(29.5),
        color:'#FFFFFF',
        marginLeft:px2dp(15),
        marginTop:px2dp(18.5),
    },
    text2:{
        fontSize:px2dp(10),
        color:'#DBDBDB',
        marginLeft:px2dp(15),
        marginTop:px2dp(15.5),
    },
    nation:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#F6F6F6',
        marginLeft:px2dp(20),
        marginRight:px2dp(20),
        marginBottom:px2dp(73.5),
        marginTop:px2dp(23),
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
        marginLeft:px2dp(16),
        marginRight:px2dp(16),


    },
    text3:{
        fontSize:px2dp(12),
        color:'#808DAB',
        textAlign:'center',
        justifyContent: 'center',
    },
    userimag:{
        marginLeft:px2dp(61),
        marginRight:px2dp(11),
        marginTop:px2dp(16.5),
        marginBottom:px2dp(8),
        width:px2dp(14.5),
        height:px2dp(13.5),
    },
    userimag2:{
        marginLeft:px2dp(61),
        marginRight:px2dp(11),
        marginTop:px2dp(16.5),
        marginBottom:px2dp(8),
        width:px2dp(14),
        height:px2dp(13.5),
    },
    userimag3:{
        marginLeft:px2dp(61),
        marginRight:px2dp(11),
        marginTop:px2dp(16.5),
        marginBottom:px2dp(8),
        width:px2dp(9.5),
        height:px2dp(12),
    },
    buttontext:{
        fontSize:px2dp(15),
        color:'#FEFEFE',
        textAlign:'center',
        justifyContent: 'center',

    },
    textuser:{
        flex:1.4,
        justifyContent: 'center',
        marginLeft:px2dp(11),
        marginTop:px2dp(17.5),
        fontSize:px2dp(15),
        color:'#333333',
    },

    textuser2:{
        flex:1,
        justifyContent: 'center',
        marginLeft:px2dp(50),
        marginTop:px2dp(17.5),
        fontSize:px2dp(15),
        color:'#333333',
    },
    textuser3:{
        flex:1,
        justifyContent: 'center',
        marginRight:px2dp(27),
        marginLeft:px2dp(90),
        marginTop:px2dp(17.5),
        fontSize:px2dp(15),
        color:'#333333',
    },
    line:{
        backgroundColor:'#BDBDBD',
        height:0.5,
        marginLeft:px2dp(10),
        marginRight:px2dp(10),
        marginBottom:px2dp(10),
        marginTop:px2dp(10),

    },
    backview:{
        justifyContent: 'center',
        flex:0.03,
        backgroundColor:'#FF9C28',
        width:px2dp(4.5),
        height:px2dp(14),
        marginTop:px2dp(17.5),

    },
    listitem: {

        flex:1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginBottom:px2dp(12),
    },

    listitem1: {

        flex:3,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',

    },
    listitem2: {

        flex:2,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',

    },
    textview1:{
        flex:1.5,
        marginLeft:px2dp(15.5),
    },
    listtext1:{


            fontSize:px2dp(15),
    },
    textview2:{
        flex:3,
        marginLeft:px2dp(15.5),
    },
    listtext2:{
        fontFamily:Platform.OS === 'android'?'monospace':'Courier',
        fontSize:px2dp(15),
    },
    listbutton1:{
        backgroundColor:'#3B77FF',
        width:px2dp(64.5),
        height:px2dp(27.5),
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
    },
    listbutton2:{
        marginLeft:px2dp(18.5),
        backgroundColor:'#FF3F3F',
        width:px2dp(41.5),
        height:px2dp(27.5),
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        marginRight:px2dp(20),
    },
    listbuttontext:{
        fontSize:px2dp(12),
        color:'#FFFFFF',
    },

    container111: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    thunbnail:{
        width:100,
        height:80,
    },

}
class Ordermanagement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loaded: false,
            update:true,
            hidden : true,
            account_total_num:'',
            account_use_num:'',
            account_unuse_num:'',
            orders_total_num:'',
            orders_confirm_num:'',
            orders_unconfirm_num:'',
            account:'',
            header:'',
            isRefreshing: false,//下拉刷新状态
        };
    }



    onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.fetchData(1);
            this.setState({
                isRefreshing: false,

            });
        }, 2000);
    }

    componentDidMount(){
        DeviceEventEmitter.addListener('ChangeUI',(dic)=>{
            //接收到详情页发送的通知，刷新首页的数据，改变按钮颜色和文字，刷新UI
           // this.props.navigation.state.params.account_use_num=this.props.navigation.state.params.account_use_num+1;
            //this.props.navigation.state.params.account_unuse_num=this.props.navigation.state.params.account_unuse_num-1;

            this.fetchData();
        });
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
        DeviceEventEmitter.emit('show','2');
        this.props.navigation.goBack();
        return true;
    };



    componentWillMount() {
        this.fetchData();
    }


    fetchindex(){
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
    fetchData() {
        //const { params } = this.props.navigation.state;

        let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
        let page =1;
        console.log(auth_token)
        fetch("http://crm.bomboo.cn/store/shopping/lists"+"?"+auth_token+"&"+page)
            .then((response) => response.text() )
            .then((responseData)=>{
                this.setState({
                    hidden:false,
                })
                this.fetchindex();
                console.log('responseData',responseData);
                //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                //let res = responseData;
                let res = JSON.parse(responseData);
                let {ret,msg,data} = res;
                let {shopping_data}=data;
                console.log("data",data);
                console.log("shop",shopping_data);


                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(shopping_data),
                    loaded: true,
                });


            })
            .catch((error)=>{console.error('error',error)});



    }




    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle:'账号管理',
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

    clickLoginBtn() {
        //console.log('test');
        //this.fetchData();
        //setState(this.state.update==true)
        if(this.state.account_unuse_num<1){
            Alert.alert(
                '提示',
                '抱歉，您的剩余账号不足',
                [
                    {text: '确定', onPress: () => console.log('Ask me later pressed')},
                    {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

                ],

            )
        }else {
            this.props.navigation.navigate('AddUser', {auth_token:this.props.navigation.state.params.auth_token})
        }


    }


    clickshoppingBtn() {
        //console.log('test');
        //this.fetchData();
        Alert.alert(
            '重置密码',
            '确定重置导购密码',
            [
                {text: '确定', onPress: () => console.log('Ask me later pressed')},
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],

        )

    }

    render() {
        return (

            <View style={styles.container}>
                {this.showPage()}
            </View>

        )
    }

    // _renderMovieList(dataSource) {
    //     return (
    //         <View style={{flexDirection:'row'}}>
    //
    //
    //
    //             <Text>{dataSource.name}</Text>
    //         </View>
    //     )
    // }

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
                <ScrollView style={styles.containersc} refreshControl={  //设置下拉刷新组件
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this.onRefresh.bind(this)}  //(()=>this.onRefresh)或者通过bind来绑定this引用来调用方法
                        tintColor='red'
                        title= {this.state.isRefreshing? '刷新中....':'下拉刷新'}
                    />
                }>
                    <View style={styles.containeritem}>

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



                    <TouchableOpacity style={styles.buttonitem} activeOpacity={0.5} onPress={() => this.clickLoginBtn()}
                    >
                        <Text style={styles.buttontext}>新增账号</Text>
                    </TouchableOpacity>








                    <View style={styles.containeritem2}>
                        <View style={styles.usertextitem}>
                            <View style={styles.backview}></View>
                            <Text style={styles.textuser}>代理姓名</Text>

                            <Text style={styles.textuser2}>账号</Text>

                            <Text style={styles.textuser3}>操作</Text>

                        </View>

                        <View style={styles.line}></View>


                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderMovieList.bind(this)}
                            style={styles.listView}
                        />


                    </View>


                </ScrollView>

            </View>

        )

    }


    _renderMovieList(dataSource) {
        return (
            <View style={styles.listitem}>

                <View style={styles.listitem1}>
                    <View style={styles.textview1}>
                    <Text style={styles.listtext1}>{dataSource.name}</Text>
                    </View>
                    <View style={styles.textview2}>
                    <Text style={styles.listtext2} >{dataSource.phone}</Text>
                    </View>

                </View>
                <View style={styles.listitem2}>

                    <TouchableOpacity style={styles.listbutton1} activeOpacity={0.5} onPress={() => Alert.alert(
                        '重置密码',
                        '确定重置导购密码',
                        [
                            {text: '确定', onPress: () =>

                        fetch("http://crm.bomboo.cn/store/user/reset_pwd"+"?"+"auth_token="+ this.props.navigation.state.params.auth_token+"&"+"id="+dataSource.id)
                        .then((response) => response.text() )
                        .then((responseData)=>{
                         console.log("id",dataSource.id);
                        console.log('responseData',responseData);
                        //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                        //let res = responseData;
                        let res = JSON.parse(responseData);
                        let {ret,msg} = res;
                            if(ret == 0){
                                DeviceEventEmitter.emit('show','2');
                                Alert.alert(
                                    '提示',
                                    '重置导购密码成功',
                                        [
                                        {text: '确定', onPress: ()=> console.log('点击确定')}
                                        ]);
                            }else{
                                Alert.alert(
                                    '提示',
                                    msg,
                                        [
                                        {text: '确定', onPress: ()=> console.log('点击确定')}
                                        ]);

                            }

                    })
                        .catch((error)=>{console.error('error',error)})},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

                        ],

                    )}
                    >
                        <Text style={styles.listbuttontext}>重置密码</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.listbutton2} activeOpacity={0.5} onPress={() => Alert.alert(
                        '删除导购',
                        '确定删除导购吗',
                        [
                            {text: '确定', onPress: () =>

                                fetch("http://crm.bomboo.cn/store/user/delete_shopping"+"?"+"auth_token="+ this.props.navigation.state.params.auth_token+"&"+"id="+dataSource.id)
                                    .then((response) => response.text() )
                                    .then((responseData)=>{
                                        console.log("token",this.props.navigation.state.params.auth_token);
                                        console.log("id",dataSource.id);
                                        console.log('responseData',responseData);
                                        //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                                        //let res = responseData;
                                        let res = JSON.parse(responseData);
                                        let {ret,msg} = res;
                                        if(ret == 0){
                                            DeviceEventEmitter.emit('show','2');
                                            //this.props.navigation.state.params.account_unuse_num = this.props.navigation.state.params.account_unuse_num+1;
                                            //this.props.navigation.state.params.account_use_num = this.props.navigation.state.params.account_use_num-1;
                                            Alert.alert(
                                                '提示',
                                                '删除导购成功',
                                                    [
                                                    {text: '确定', onPress: ()=> console.log('点击确定')}
                                                    ]);
                                            this.fetchData();
                                        }else{
                                            Alert.alert(
                                                '提示',
                                                msg,
                                                    [
                                                    {text: '确定', onPress: ()=> console.log('点击确定')}
                                                    ]);

                                        }

                                    })
                                    .catch((error)=>{console.error('error',error)})},
                            {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

                        ],

                    )}
                    >
                        <Text style={styles.listbuttontext}>删除</Text>
                    </TouchableOpacity>
                </View>


            </View>

        )
    }



}







module.exports = Ordermanagement;