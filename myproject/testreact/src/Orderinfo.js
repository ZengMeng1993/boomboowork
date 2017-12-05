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
} from 'react-native';

import px2dp from '../src/px2dp';

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
    containeritem:{
        flexDirection: 'row',
        backgroundColor:'#4285F4',
        height:px2dp(64),


    },
    igmitem:{

        height:px2dp(19.5),
        width:px2dp(19.5),
        alignSelf: 'center',
        marginLeft:px2dp(20.5),
    },
    igmitem2:{

        height:px2dp(16.5),
        width:px2dp(13),
        alignSelf: 'center',
        marginLeft:px2dp(22.5),
    },
    textsty:{
        fontSize:px2dp(17),
        color:'#FFFFFF',
        alignSelf: 'center',

    },
    textsty1:{
        fontSize:px2dp(17),
        color:'#FFFFFF',
        alignSelf: 'center',
        marginLeft:px2dp(20),

    },
    textsty2:{
        fontSize:px2dp(14),
        color:'#666666',
        alignSelf: 'center',
        marginLeft:px2dp(23.5)

    },
    textsty3:{
        fontSize:px2dp(14),
        color:'#666666',
        alignSelf: 'center',
        marginLeft:px2dp(5)

    },
    listimg:{
        width:px2dp(66),
        height:px2dp(56),
        flex:1,
        marginLeft:px2dp(20),
        marginTop:px2dp(9.5),
    },

    textzhanwei1:{
        flex:1,
        marginLeft:px2dp(20),
        marginTop:px2dp(9.5),
    },

    containeritem2:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#4285F4',


    },
    buttonitem2:{
        flex:1,
        flexDirection: 'row',
        backgroundColor:'#ff3f3f',


    },
    buttonitem:{

        backgroundColor:'#FFFFFF',
        width:px2dp(84.5),
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft:px2dp(60.5),
        marginTop:px2dp(17.5),
        marginBottom:px2dp(17),

    },
    containeritem3:{

        //flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        height:px2dp(94),
        marginTop:px2dp(10),

    },
    containeritem4:{
        height:px2dp(41.5),
        //flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        marginTop:px2dp(13.5),

    },

    containeritem5:{
        height:px2dp(41.5),
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',

    },
    containeritem6:{
        height:px2dp(50),
        backgroundColor:'#FF3F3F',
        marginTop:px2dp(55),
        alignItems:'center',
        justifyContent: 'center',

    },
    containeritem6text:{
        fontSize:px2dp(15),
        color:'#FEFEFE',
        textAlign:'center',
        justifyContent: 'center',
    },
    containeritem4itme:{
        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        flex:1,

    },
    containeritem4text1:{
        color:'#666666',
        flex:1,
        fontSize:px2dp(15),
        alignSelf: 'center',

    },
    containeritem4text:{
        color:'#333333',
        flex:1,
        fontSize:px2dp(13),
        alignSelf: 'center',

    },
    containeritem4text2:{
        color:'#999999',
        fontSize:px2dp(12),
        alignSelf: 'center',

    },
    containeritem4text3:{
        color:'#333333',
        fontSize:px2dp(15),
        alignSelf: 'center',
        marginLeft:px2dp(10.5),

    },
    containeritem4text4:{
        color:'#ff3f3f',
        fontSize:px2dp(15),
        alignSelf: 'center',
        marginLeft:px2dp(10.5),

    },
    containeritem4text5:{
        color:'#ff3f3f',
        fontSize:px2dp(15),
        alignSelf: 'center',


    },
    containeritem3item:{

        flexDirection: 'row',
        backgroundColor:'#FFFFFF',
        flex:1

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
        fontSize:px2dp(12),
        color:'#4285F4',
        textAlign:'center',
        justifyContent: 'center',

    },

    buttontext1:{
        fontSize:px2dp(12),
        color:'#ff3f3f',
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


    },
    line1:{
        backgroundColor:'#BDBDBD',
        height:0.5,
        marginLeft:px2dp(10),
        marginRight:px2dp(10),
        marginTop:px2dp(9),


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
        backgroundColor: '#FFFFFF',
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
        justifyContent: 'flex-end',
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
    },
    listtext3:{
        color:'#333333',
        marginLeft:px2dp(54),
        fontSize:px2dp(14),
        alignSelf: 'center',
    },
    listtext4:{
        color:'#333333',
        marginLeft:px2dp(3),
        fontSize:px2dp(14),
        alignSelf: 'center',
    },

    listtext5:{
        color:'#333333',
        marginLeft:px2dp(3),
        fontSize:px2dp(14),
        alignSelf: 'center',
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
class Orderinfo extends Component {
     //pay_status = this.props.navigation.state.params.pay_status;
    constructor(props) {
        super(props);
        //var ds =new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            pay_status:this.props.navigation.state.params.pay_status,
            dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loaded: false,
            update:true,
            isDisable:false,//是否被禁用
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







    componentWillMount() {
        console.log("tttttttttttt",this.props.navigation.state.params.product);
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.props.navigation.state.params.product),
            loaded: true,
        });
        //this.fetchData();
    }





    static navigationOptions = ({navigation, screenProps}) => ({

            headerTitle:'订单详情',
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
                <ScrollView style={styles.container}>
                    <View style={styles.containeritem}>

                        <View style={styles.containeritem2}>
                            <Image source={require('./imgs/dingdan.png')} style={styles.igmitem}/>
                            <Text style={styles.textsty1}>{this.props.navigation.state.params.shopping_name}</Text>
                            <Text style={styles.textsty}>的订单</Text>

                        </View>


                        {/*<View style={styles.containeritem2}>*/}
                            {/*<TouchableOpacity style={styles.buttonitem} activeOpacity={0.5} onPress={() => this.clickpayBtn()}*/}
                            {/*>*/}

                                {/*<Text style={styles.buttontext}>订单付款</Text>*/}
                            {/*</TouchableOpacity>*/}

                        {/*</View>*/}

                        {this.buttonView()}





                    </View>


                    <View style={styles.containeritem3}>
                        <View style={styles.containeritem3item}>
                            <Text style={styles.listtext3}>收货人：</Text>
                            <Text style={styles.listtext4}>{this.props.navigation.state.params.customer_name}</Text>
                            <Text style={styles.listtext5}>{this.props.navigation.state.params.customer_phone}</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.containeritem3item}>

                            <Image source={require('./imgs/dizhi.png')} style={styles.igmitem2}/>
                            <Text style={styles.textsty2}>地址：</Text>
                            <Text style={styles.textsty3}>{this.props.navigation.state.params.customer_address}</Text>


                        </View>

                    </View>








                    <View style={styles.containeritem4}>

                        <View style={styles.containeritem4itme}>
                            <Text style={styles.textzhanwei1}>   </Text>
                            <Text style={styles.containeritem4text}>名称</Text>
                            <Text style={styles.containeritem4text}>规格</Text>
                            <Text style={styles.containeritem4text}>数量</Text>
                        </View>

                        <View style={styles.line}></View>

                    </View>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderMovieList.bind(this)}
                        style={styles.listView}
                        automaticallyAdjustContentInsets={false}
                    />

                    <View style={styles.containeritem5}>

                        <View style={styles.containeritem4itme}>


                        </View>

                        <View style={styles.containeritem4itme}>
                            <Text style={styles.containeritem4text2}>共</Text>
                            <Text style={styles.containeritem4text2}>{this.props.navigation.state.params.product_num}</Text>
                            <Text style={styles.containeritem4text2}>件商品</Text>
                            <Text style={styles.containeritem4text3}>总价:</Text>
                            <Text style={styles.containeritem4text4}>¥</Text>
                            <Text style={styles.containeritem4text5}>{this.props.navigation.state.params.total_price}</Text>
                        </View>



                    </View>


                    <TouchableOpacity style={styles.containeritem6} activeOpacity={0.5} disabled={this.state.isDisable} onPress={() => this.clickLoginBtn()}>

                        <Text style={styles.containeritem6text}>删除订单</Text>


                    </TouchableOpacity>

                </ScrollView>


            </View>



        )
    }
    buttonView(){
        console.log("showtext",this.state.pay_status)
        if(this.state.pay_status=="1"){
            return (
                <View style={styles.containeritem2}>
            <TouchableOpacity style={styles.buttonitem} activeOpacity={0.5} onPress={() => this.clickpayBtn()}
            >

            <Text style={styles.buttontext}>订单付款</Text>
            </TouchableOpacity>

            </View>
            )
        }
        return (
            <View style={styles.containeritem2}>
                <TouchableOpacity style={styles.buttonitem} activeOpacity={0.5} onPress={() => this.clickpayBtns()}
                >

                    <Text style={styles.buttontext1}>取消订单</Text>
                </TouchableOpacity>

            </View>
        )
    }


    _renderMovieList(dataSource) {

        console.log("图片地址",dataSource.cover)
        return (

            <View style={styles.listitem}
            >




                <View style={styles.containeritem4itme}>

                    <Image source={{uri:dataSource.cover}}
                           style={styles.listimg} />
                    <Text style={styles.containeritem4text1}>{dataSource.name}</Text>
                    <Text style={styles.containeritem4text1}>{dataSource.product_model}</Text>
                    <Text style={styles.containeritem4text1}>{dataSource.num}</Text>
                </View>
                <View style={styles.line1}></View>
            </View>

        )
    }


    clickLoginBtn() {
        let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
        let id ="id="+ this.props.navigation.state.params.id;
        let pay_status=this.props.navigation.state.params.pay_status;
        console.log(auth_token)
        Alert.alert(
            '删除订单',
            '确定删除订单吗',
            [
                {text: '确定', onPress: () =>

                    fetch("http://crm.bomboo.cn/store/user/delete_order"+"?"+"auth_token="+ this.props.navigation.state.params.auth_token+"&"+id)
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            console.log('responseData',responseData);
                            //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                            //let res = responseData;
                            let res = JSON.parse(responseData);
                            let {ret,msg} = res;
                            if(ret == 0){
                                Alert.alert(
                                    '提示',
                                    '该订单已删除',
                                        [
                                        {text: '确定', onPress: ()=> console.log('点击确定')}
                                        ]);
                                DeviceEventEmitter.emit('ChangeU', {color:'red',text:'通知'});
                                DeviceEventEmitter.emit('show','2');
                                this.props.navigation.goBack();
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


    clickpayBtn() {
        let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
        let id ="id="+ this.props.navigation.state.params.id;
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
                            if(ret == 0){
                                Alert.alert(
                                    '提示',
                                    '确定成功',
                                        [
                                        {text: '确定', onPress: ()=> console.log('点击确定')}
                                        ]);
                                DeviceEventEmitter.emit('ChangeU', {color:'red',text:'通知'});
                                DeviceEventEmitter.emit('show','2');
                                this.props.navigation.goBack();
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


    clickpayBtns() {
        let auth_token ="auth_token="+ this.props.navigation.state.params.auth_token;
        let id ="id="+ this.props.navigation.state.params.id;
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
                            if(ret == 0){
                                Alert.alert(
                                    '提示',
                                    '取消该订单付款成功',
                                        [
                                        {text: '确定', onPress: ()=> console.log('点击确定')}
                                        ]);
                                DeviceEventEmitter.emit('ChangeU', {color:'red',text:'通知'});
                                DeviceEventEmitter.emit('show','2');
                                this.props.navigation.goBack();
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



}








module.exports = Orderinfo;