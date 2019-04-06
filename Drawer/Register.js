import React, {Component} from 'react';
import {
    Text,
    AsyncStorage,
    Image,
    View,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    ImageBackground, TouchableOpacity, Dimensions
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


export default class register extends Component {


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        }
    }
    login=()=> {
        const {username,password}=this.state

          fetch('http://humyasa.com/40cart/oauth2/token', {
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  username:username,

                  /*
                  password:password
                  */
              })
          })
          .then((response)=>response.json())
.then((responseJson) => {
       alert(responseJson.data)
    })
        .catch((error) => {
            alert(error) ;
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
              })
    /*
              .done();
              */
      }




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
                                /*
                              value={this.state.username}
                              */
                   />


                   <TextInput style={styles.Name} underlineColorAndroid={'transparent'} placeholder="رمز ورود"
                              placeholderTextColor='black' autoCapitalize="none"
                              onChangeText={(password) => this.setState({password})}

                       /*
                value={this.state.password}
*/

                            />


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