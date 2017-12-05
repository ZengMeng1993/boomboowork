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
        flex:0.16,
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
    containeritem3:{
        flex:1.2,
        //flexDirection: 'row',
        backgroundColor:'#F6F6F6',
        marginTop:px2dp(9.5),
        marginLeft:px2dp(10),
        marginRight:px2dp(10),
        borderRadius: 5,

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
        flex:0.25,
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        height:px2dp(40)
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
        flex:1.2,
        marginLeft:px2dp(11),
        marginTop:px2dp(17.5),
        fontSize:px2dp(15),
        color:'#333333',
    },

    textuser2:{
        flex:1,
        marginLeft:px2dp(50),
        marginTop:px2dp(17.5),
        fontSize:px2dp(15),
        color:'#333333',
    },
    textuser3:{
        flex:1,
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
        marginBottom:px2dp(20),

    },
    backview:{
        flex:0.03,
        backgroundColor:'#FF9C28',
        width:px2dp(4.5),
        height:px2dp(14),
        marginTop:px2dp(17.5),

    },
    listitem: {

        flex:1,
        //flexDirection: 'row',
        //backgroundColor: '#F6F6F6',
        marginBottom:px2dp(6),
        borderRadius:5,

    },

    listitem1: {

        flex:1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',

    },
    listitem2: {
        justifyContent: 'flex-start',
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginTop:px2dp(12),
        marginBottom:px2dp(11),
        alignItems:'center',


    },

    listitem3: {

        flex:2,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginTop:px2dp(12),
        marginBottom:px2dp(11),

    },
    listitem4: {

        flex:1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: '#FFFFFF',
        marginTop:px2dp(12),
        marginBottom:px2dp(11),

    },

    listitem5: {
        justifyContent: 'flex-start',
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        marginTop:px2dp(12),
        marginBottom:px2dp(11),
        alignItems:'center',


    },
    listtext1:{
        color:'#333333',
        marginLeft:px2dp(11.5),
        marginRight:px2dp(11.5),
        fontSize:px2dp(12),
    },
    listtext2:{
        color:'#333333',
        fontSize:px2dp(12),
        marginRight:px2dp(3),
    },

    listtext9:{
        color:'#333333',
        fontSize:px2dp(12),

        //marginRight:px2dp(3),
    },
    listtext3:{
        //flex:1,
        color:'#333333',
        //marginRight:px2dp(5),
        fontSize:px2dp(12),
    },
    listtext4:{
        flex:1.2,
        color:'#333333',
        marginLeft:px2dp(7),
        marginRight:px2dp(7),
        fontSize:px2dp(12),
    },

    listtext5:{
        color:'#333333',
        marginLeft:px2dp(7),
        marginRight:px2dp(7),
        fontSize:px2dp(15),
    },

    listtext6:{
        color:'#ff3f3f',
        fontSize:px2dp(15),
    },
    listtext7:{
        color:'#999999',
        marginLeft:px2dp(12),
        fontSize:px2dp(12),
        textAlign:'center',
        justifyContent: 'center',
    },
    listtext8:{
        color:'#999999',
        fontSize:px2dp(12),
        textAlign:'center',
        justifyContent: 'center',

    },
    listbutton1:{
        backgroundColor:'#3B77FF',
        width:px2dp(104),
        height:px2dp(30),
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
    },

    listbutton3:{
        backgroundColor:'#FF3F3F',
        width:px2dp(104),
        height:px2dp(30),
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
class Orderment extends Component {

    _dataSource = new ListView.DataSource({rowHasChanged:(row1,row2)=>row1 !== row2})

    constructor(props) {
    super(props);
    //var ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        pay_status:"",
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
        let page =1;
}



componentDidMount(){
    DeviceEventEmitter.addListener('ChangeU',(dic)=>{
        //接收到详情页发送的通知，刷新首页的数据，改变按钮颜色和文字，刷新UI
        // if(dic=='1'){
        //     this.props.navigation.state.params.orders_unconfirm_num=this.props.navigation.state.params.orders_unconfirm_num-1;
        //     this.props.navigation.state.params.orders_total_num=this.props.navigation.state.params.orders_total_num-1;
        // }else{
        //     this.props.navigation.state.params.orders_confirm_num=this.props.navigation.state.params.orders_confirm_num-1;
        //     this.props.navigation.state.params.orders_total_num=this.props.navigation.state.params.orders_total_num-1;
        // }
        let page = 1;
        this.fetchData(page);
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
    let page = 1;
    this.fetchData(page);
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
                alert('你的账号在别的设备登录过，请重新登录');
                this.props.navigation.navigate('Main')
            }


        })
        .catch((error)=>{console.error('error',error)});


}



fetchData(page) {
    //const { params } = this.props.navigation.state;
    let pay_status = "pay_status="+page;
    let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
    console.log(auth_token)
    fetch("http://crm.bomboo.cn/store/order/lists"+"?"+auth_token+"&"+pay_status)
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
            let {orders_data}=data;
            console.log("data",data);
            console.log("orders_data",orders_data);



            this.setState({
                dataSource:this.state.dataSource.cloneWithRows(orders_data),
                loaded: true,
            });



        })
        .catch((error)=>{console.error('error',error)});



}




static navigationOptions = ({navigation, screenProps}) => ({

        headerTitle:'订单管理',
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
    //setState(this.state.update==true)
    this.props.navigation.navigate('AddUser', {auth_token:this.props.navigation.state.params.auth_token})

}






render() {

    return (

        <View style={styles.container}>
            {this.showPage()}
        </View>

    )
}



_renderMovieList(dataSource) {

    var ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    ds=dataSource.product;
    console.log("11111",ds);


    return (

        <TouchableOpacity style={styles.listitem} activeOpacity={0.5} onPress={() =>
            this.props.navigation.navigate('Orderinfo', {auth_token:this.props.navigation.state.params.auth_token,
                product:dataSource.product,id:dataSource.id,customer_name:dataSource.customer_name,customer_phone:dataSource.customer_phone,
                customer_address:dataSource.customer_address,product_num:dataSource.product_num,total_price:dataSource.total_price,shopping_name:dataSource.shopping_name,
                orderod:dataSource.id,pay_status:dataSource.pay_status,
            })


        }
        >

            <View style={styles.listitem1}>

                <View style={styles.listitem2}>

                    <Text style={styles.listtext1}>代理：</Text>
                    <Text style={styles.listtext2}>{dataSource.shopping_name}</Text>

                </View>

                <View style={styles.listitem5}>

                    <Text style={styles.listtext3}>收货人:</Text>
                    <Text style={styles.listtext4}>{dataSource.customer_name}</Text>
                    <Text style={styles.listtext9}>{dataSource.customer_phone}</Text>

                </View>



            </View>

            <View sytle={styles.line}></View>

            {/*<View style={styles.listitem3}>*/}

                {/*<ListView*/}
                    {/*dataSource={dataSource.product}*/}
                    {/*renderRow={(rowData) =><Image style={styles.userimag} source={{uri:ds.cover}}></Image>}*/}
                    {/*style={styles.listView}*/}
                {/*/>*/}

            {/*</View>*/}

            <View sytle={styles.line}></View>





            <View style={styles.listitem1}>

                <View style={styles.listitem2}>

                    <Text style={styles.listtext5}>总价：</Text>
                    <Text style={styles.listtext6}>¥</Text>
                    <Text style={styles.listtext6}>{dataSource.total_price}</Text>
                    <Text style={styles.listtext7}>共</Text>
                    <Text style={styles.listtext8}>{dataSource.product_num}</Text>
                    <Text style={styles.listtext8}>商品</Text>

                </View>


                {this.buttonView(dataSource)}





            </View>



        </TouchableOpacity>

    )
}

    buttonView(dataSource){
        console.log("showtext",dataSource.pay_status)
        if(dataSource.pay_status=="1"){
            return (
                <View style={styles.listitem4}>

                    <TouchableOpacity style={styles.listbutton1} activeOpacity={0.5} onPress={() => this.clickpayBtn(dataSource)}  >
                        <Text style={styles.listbuttontext}>确认订单付款</Text>
                    </TouchableOpacity>

                </View>
            )
        }
        return (
            <View style={styles.listitem4}>

                <TouchableOpacity style={styles.listbutton3} activeOpacity={0.5}  onPress={() => this.clickpayBtns(dataSource)} >
                    <Text style={styles.listbuttontext}>取消订单付款</Text>
                </TouchableOpacity>

            </View>
        )
    }


    clickpayBtn(dataSource) {
        let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
        let id ="id="+ dataSource.id;
        console.log(auth_token)
        Alert.alert(
            '订单付款',
            '确定订单付款吗',
            [
                {text: '确定', onPress: () =>

                    fetch("http://crm.bomboo.cn/store/user/order_confirm_pay"+"?"+"auth_token="+ this.props.navigation.state.params.auth_token+"&"+id)
                        .then((response) => response.text() )
                        .then((responseData)=>{

                            console.log('responseData',responseData);
                            //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                            //let res = responseData;
                            let res = JSON.parse(responseData);
                            let {ret,msg} = res;
                            console.log("ret",ret);
                            if(ret == '0'){

                                Alert.alert(
                                    '提示',
                                    '确认成功',
                                        [
                                        {text: '确定', onPress: ()=> DeviceEventEmitter.emit('show','2')}
                                        ]);
                                //this.props.navigation.state.params.orders_unconfirm_num = this.props.navigation.state.params.orders_unconfirm_num-1;
                                //this.props.navigation.state.params.orders_confirm_num = this.props.navigation.state.params.orders_confirm_num+1;
                                let page =1 ;
                                this.fetchData(page);
                            }else{
                                Alert.alert(
                                    '提示',
                                    msg
                                        [
                                        {text: '确定', onPress: ()=> console.log('点击确定')}
                                        ]);

                            }

                        })
                        .catch((error)=>{console.error('error',error)})},
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

            ],

        )}


    clickpayBtns(dataSource) {
        let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
        let id ="id="+ dataSource.id;
        console.log(auth_token)
        Alert.alert(
            '取消订单付款',
            '确定取消订单付款吗',
            [

                {text: '确定', onPress: () =>

                    fetch("http://crm.bomboo.cn/store/user/order_confirm_pay"+"?"+"auth_token="+ this.props.navigation.state.params.auth_token+"&"+id)
                        .then((response) => response.text() )
                        .then((responseData)=>{

                            console.log('responseData',responseData);
                            //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                            //let res = responseData;
                            let res = JSON.parse(responseData);
                            let {ret,msg} = res;
                            if(ret =='0'){
                                Alert.alert(
                                    '提示',
                                    '已取消该订单付款',
                                        [
                                        {text: '确定', onPress: ()=> console.log('点击确定')}
                                        ]);
                                DeviceEventEmitter.emit('show','2');
                                //this.props.navigation.state.params.orders_unconfirm_num = this.props.navigation.state.params.orders_unconfirm_num+1;
                                //this.props.navigation.state.params.orders_confirm_num = this.props.navigation.state.params.orders_confirm_num-1;
                                let page =1 ;
                                this.fetchData(page);
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


    onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.fetchData(1);
            this.setState({
                isRefreshing: false,

            });
        }, 2000);
    }


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
                            <TouchableOpacity style={styles.useritem} activeOpacity={0.5} onPress={() =>this.fetchData(1)}>
                                <Text style={styles.text1}>{this.state.orders_unconfirm_num}</Text>
                                <Text style={styles.text2}>待确定订单</Text>
                                <Image style={styles.userimag} source={require('./imgs/orders_total_num.png')}></Image>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.useritem2} activeOpacity={0.5} onPress={() =>this.fetchData(2)}>
                                <Text style={styles.text1}>{this.state.orders_confirm_num}</Text>
                                <Text style={styles.text2}>已确定订单</Text>
                                <Image style={styles.userimag2} source={require('./imgs/orders_confirm_num.png')}></Image>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.useritem} activeOpacity={0.5} onPress={() =>this.fetchData(0)}>
                                <Text style={styles.text1}>{this.state.orders_total_num}</Text>
                                <Text style={styles.text2}>订单总数</Text>
                                <Image style={styles.userimag3} source={require('./imgs/orders_total_num.png')}></Image>
                            </TouchableOpacity>
                        </View>

                    </View>











                    <View style={styles.containeritem3}>

                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderMovieList.bind(this)}
                            style={styles.listView}
                            automaticallyAdjustContentInsets={false}
                        />


                    </View>

                </ScrollView>


            </View>

        )

    }




}





module.exports = Orderment;