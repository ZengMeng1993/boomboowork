import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    PixelRatio,
    Dimensions,
    Platform,
    BackHandler,
    AsyncStorag,

} from 'react-native';
import px2dp from '../src/px2dp';
import '../src/utils/RNAsyncStorage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Main extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pssd:''

        };

    }
    componentWillMount() {
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
        // if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        //     //最近2秒内按过back键，可以退出应用。
        //     BackHandler.exitApp();
        //     return false;
        // }
        this.lastBackPressed = Date.now();
        BackHandler.exitApp();
        return true;
    };

    设置顶部导航栏的内容
    static navigationOptions = ({navigation, screenProps}) => ({
        //左侧标题
        headerTitle: '意见反馈',
        //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
        headerBackTitle: null,
        //顶部标题栏的样式
        headerStyle: styles.headerStyle,
        //顶部标题栏文字的样式
        headerTitleStyle: styles.headerTitleStyle,

    });
    clickLoginBtn() {
        // 判断密码是否为空
        if (this.state.username === '' || this.state.password === '') {
            alert('账号密码或姓名不能为空');
            return;
        }else {
            // alert("您输入的内容为："+this.state.username+this.state.password);
            // this.props.navigation.navigate('Detail', {key: '主页面'})
            this.login();
        }

    }

    login(){

        let url = "http://192.168.0.91:8093/store/user/login";//接口地址

        let formData = new FormData();
        formData.append('account', this.state.username);
        formData.append('password', this.state.password);
        console.log(formData);

        fetch(url,{
            method: 'post',
            body: formData,
        })
            .then((response) => response.text() )
            .then((responseData)=>{

                console.log('responseData',responseData);
                //let res = {"ret":0,"msg":"\u767b\u5f55\u6210\u529f","data":{"id":13,"auth_token":"f6a90ceb09665b8f5bf4b5d16a00021f"}};
                //let res = responseData;
                let res = JSON.parse(responseData);
                let {ret,msg,data} = res;
                console.log(data)
                if(ret == 0){//登录成功
                    let {id,auth_token} = data;
                    console.log(auth_token)
                    storage.save({
                        key: 'token',  // 注意:请不要在key中使用_下划线符号!
                        data:auth_token,

                        // 如果不指定过期时间，则会使用defaultExpires参数
                        // 如果设为null，则永不过期
                        expires: null
                    });

                    this.props.navigation.navigate('Detail', {auth_token: auth_token})
                }else{
                    alert(msg);

                }

            })
            .catch((error)=>{console.error('error',error)});




    }


    render() {

        return (
            <KeyboardAwareScrollView behavior="padding" scrollEnabled={false}>
                <View style={styles.container}>


                    <TextInput
                        style={styles.input}
                        //returnKeyType="search"
                        placeholder="请输入账号"
                        placeholderTextColor='#D3D3D3'
                        underlineColorAndroid='transparent'
                        onChangeText={(username) => this.setState({username})}
                    />



                    <View style={styles.line}></View>

                    <Text style={styles.psdacc}>密码</Text>
                    <TextInput
                        style={styles.input}
                        underlineColorAndroid='transparent'
                        placeholder="请输入密码"
                        secureTextEntry={true}
                        placeholderTextColor='#D3D3D3'
                        //placeholderTextColor:'#7FA6FF'
                        onChangeText={(password) => this.setState({password})}
                    />


                    <View style={styles.line}></View>
                    {/*页面跳转*/}
                    <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => this.clickLoginBtn()}
                    >
                        <Text style={styles.logintext}>登录</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>
        );

    }
}

const styles = StyleSheet.create({
    input:{
        width:px2dp(310),
        height:px2dp(16),
        borderColor: 'gray',
        marginLeft:px2dp(30),
        marginTop:px2dp(11),
        padding:0,
    },
    searchBar: {

        //flexDirection: 'row',
        height:px2dp(67),
        justifyContent: 'center',

        //alignItems: 'center'
    },
    container: {

        flex:1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    button: {
        width:px2dp(315),
        height:px2dp(44),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3B77FF',
        marginTop:px2dp(102),
        marginLeft:px2dp(30),
        marginRight:px2dp(30),
        marginBottom:px2dp(162),
    },
    headerStyle: {
        backgroundColor: '#FFFFFF',
        height:0,

    },
    headerTitleStyle: {
        //标题的文字颜色
        //color: 'white',
        //设置标题的大小
        fontSize: 18,
        //居中显示
        alignSelf: 'center',

    },
    login:{

        color:'#3B77FF',
        fontSize:px2dp(28),
        marginLeft:px2dp(28.5),
        marginTop:px2dp(48),
        marginBottom:px2dp(81.5),
        //fontFamily:,

    },
    acc:{
        color:'#333333',
        fontSize:px2dp(15),
        marginLeft:px2dp(29),
        marginTop:px2dp(20),
        //fontFamily:,

    },
    psdacc:{
        color:'#333333',
        fontSize:px2dp(15),
        marginLeft:px2dp(29),
        //fontFamily:,



    },
    line:{
        backgroundColor:'#8DB0FF',
        height:0.5,
        marginLeft:px2dp(30),
        marginRight:px2dp(30),
        marginTop:px2dp(10),
        marginBottom:px2dp(20),

    },
    logintext:{
        color:'#FFFFFF',
        fontSize:px2dp(16),
    },
});

module.exports = Main;