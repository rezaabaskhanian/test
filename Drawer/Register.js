import React, {Component} from 'react';
import {
    Text,
    AsyncStorage,
    Image,
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground, TouchableOpacity, Dimensions, Alert,ToastAndroid
} from 'react-native';

import {
    Icon,
    Left,
    Body,
    Right,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Form,
    Input,
    Item,
    Label
} from 'native-base'
import sabt from './sabt'



import FontAwesome, {Icons} from 'react-native-fontawesome';
import Faramoshi from '../Faramoshi/Faramoshi'


const {width, height} = Dimensions.get("window");

const baseUrl = 'http://nbcompany.ir/40cart/';
const baseHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};


export default class register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            typedText: '',
        }

    }

    /*

 curl(url, data, method ='GET') {
     console.log(url)
     console.log(data)
     console.log(method)
     console.log('reza')
     console.log(this.headers())

     return fetch(url, {
         method: method,
         headers:this.headers() ,
         body: JSON.stringify(data)
     })
         .then((response) => response.json())
         .then((responseJson) => {
             return responseJson;
         })
         .catch((error) => {
             console.error(error);
         });

 }

 setUrl(url) {
     return baseUrl + url
 }

 headers() {

     return baseHeaders + this.state.headers  //headers set in functions
 }

 login = () => {

     const {username, password} = this.state


     let url = this.setUrl('oauth2/token')

     let data = {
         username: username,
         password: password,
         client_id: 'phone_app',
         client_secret: '3rdgd07b5a',
         scope: '',
         grant_type: 'password',
     }


     let data1 = this.curl(url, data, 'POST')
console.log(data1)

     // this.curl()
     //
     //     .then((responseJson) => {
     //         console.log(responseJson)
     //     })
     //     .catch((error) => {
     //         console.log(error);
     /*
     .then((res)=>{
         if (res.success===true){
             let username=res.message;

             AsyncStorage.setItem('username',username);


             this.props.navigation.navigate('Main')
         }

         else{
             alert(res.message)
         }
         */
    // })
    /*
              .done();

}
*/


    render() {


        return (
            <Container>

                <Content>

                    <Card>

                        <CardItem style={{backgroundColor: '#f5f5f5', height: '10%'}}>
                            <Left/>
                            <Body>

                            <Text style={styles.header}>
                                ورود

                            </Text>

                            </Body>


                            <Right>
                                <Button transparent onPress={() => this.props.navigation.goBack()}

                                >

                                    <Text style={{fontSize: 20, color: 'black'}}>

                                        <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                                    </Text>
                                </Button>

                            </Right>

                        </CardItem>


                        <CardItem style={{
                            justifyContent: 'center',
                            alignItems: 'center', flexDirection: 'column'
                        }}>


                            <Text style={styles.header1}>
                                برای ورود به حساب خود شماره تلفن همراه و رمز عبور خود را وارد کنید:
                            </Text>


                            <TextInput style={styles.Name} underlineColorAndroid={'transparent'}
                                       placeholder="نام کاربری"
                                       placeholderTextColor='black'
                                       onChangeText={(username) => this.setState({username})}
                                       onFocus={() => this.setState({username: ''})}
                                       value={this.state.username}


                            />

                            {!!this.state.nameError1 && (
                                <Text style={{color: '#ff3d29'}}>{this.state.nameError1}</Text>)}


                            <TextInput style={styles.Name} underlineColorAndroid={'transparent'} placeholder="رمز ورود"
                                       placeholderTextColor='black' autoCapitalize="none"
                                       onChangeText={(password) => this.setState({password})}
                                       onFocus={() => this.setState({password: ''})}
                                       value={this.state.password}
                                       secureTextEntry={true}


                            />

                            {!!this.state.nameError && (
                                <Text style={{color: '#ff2a27'}}>{this.state.nameError}</Text>)}

                            <CardItem style={{justifyContent: 'center'}}>
                                <Button style={styles.btnWorod} onPress={this.login}>
                                    <Text style={styles.textbutton}> ورود </Text>
                                </Button>

                            </CardItem>

                            <Text style={{marginTop: 40, textAlign: 'center', fontSize: 15, fontFamily: 'Sahel'}}
                                  onPress={() => this.props.navigation.navigate('sabt')}>
                                ثبت نام
                            </Text>


                            <Text style={{marginTop: 40, textAlign: 'center', fontSize: 15, fontFamily: 'Sahel'}}
                                  onPress={() => this.props.navigation.navigate('Faramoshi')}>
                                رمز عبور را فراموش کرده ام؟
                            </Text>

                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }


    login = () => {
        if (this.state.username.trim() === "") {
            this.setState(() => ({nameError1: "نام کاربری را بنویسید"}));
        } else {
            this.setState(() => ({nameError1: null}));

        }
         if (this.state.password.trim() === "") {
            this.setState(() => ({nameError: "پسورد نمی تواند خالی باشد"}));
        } else {
            this.setState(() => ({nameError: null}));
        }


        this.requestLoginFromApi()
    }


    async requestLoginFromApi() {


        try {

            let response = await  fetch('http://nbcompany.ir/40cart/oauth2/token', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({

                    username: this.state.username,
                    password: this.state.password,
                    client_id: 'phone_app',
                    client_secret: '3rdgd07b5a',
                    scope: '',
                    grant_type: 'password',

                })
            });



            let json = await response.json();

            if (json.token_type='Bearer'){
                this.setDataUser(json.access_token)
            }


            else if (json.status = 401) {
                alert('نام کاربری یا اسم رمز اشتباه است')
            }



        } catch (error) {
            console.log(error)


        }

    }

    async setDataUser(access_token) {
        try {
await AsyncStorage.setItem('apiToken',access_token)
            this.props.navigation.goBack()
            ToastAndroid.show('به دیوونه خونه خوش آمدید', ToastAndroid.LONG);

        }
        catch (error) {
            console.log(error)
        }

    }

}


const styles = StyleSheet.create({

    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0c0d07',
        marginLeft: 10,

        fontFamily: 'Sahel'


    },

    header1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#b8b8b8',
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'Sahel'

    },

    Name: {

        right: -5,
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
        height: 50,
        width: "80%",
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 25,
        marginBottom: 10,
        fontSize: 14,
        marginTop: 10,
        fontFamily: 'Sahel'
    },


    btnWorod: {

        marginTop: 10,
        backgroundColor: '#FF3447',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60, width: "90%",
        borderRadius: 30,
        fontFamily: 'Sahel'
    },
    textbutton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Sahel'

    },


})