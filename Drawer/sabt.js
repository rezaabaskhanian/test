import React, {Component} from 'react';
import {
    Text,

    StyleSheet,
    TextInput,

} from 'react-native';
import {Left, Body, Button, Card, Container, Content, Header, Right, CardItem} from 'native-base'


import FontAwesome, {Icons} from 'react-native-fontawesome';


export default class Sabt extends Component {


    render() {
        return (
            /*

            // vorod dar site


                constructor(props) {
                    super(props);
                    this.state = {username: '', password: '', family: '', phone: '', errors: []}
                }
                async login() {
                    try {
                        let response = await
                            fetch("", {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    user: {
                                        family: this.state.family,
                                        username: this.state.username,
                                        phone: this.state.phone,
                                        password: this.state.password,

                                    }

                                })

                            });
                        let res = await response.text();

                        if (response.status >= 200 && response.status < 300) {
                            console.log('res is : ' + res)
                        } else {
                            let errors = res;
                            throw errors
                        }
                    }
                    catch (errors) {
                        console.log('catch errors:' + errors);
                        let formerrors = json.parse(errors);

                        let errorsArray = [];
                        for (let key in formerrors) {
                            if (formerrors[key].length > 1) {
                                formerrors[key].map(error => errorsArray.push('${key} ${error}'))
                            } else {
                                errorsArray.push('${key} ${fromerrors[key]}')
                            }
                        }
                        this.setState({errors:errorsArray})

                    }
                }

                //
            */


            <Container>

                <Content>
                    <Card>
                        <CardItem style={{backgroundColor: '#f5f5f5',height:'7%'}}>
                            <Left/>
                            <Body>

                            <Text style={styles.header}>
                                ثبت نام

                            </Text>

                            </Body>


                            <Right>
                                <Button transparent onPress={() => this.props.navigation.goBack()}

                                        style={{margin: 5, top: 1, right: 1}}>

                                    <Text style={{fontSize: 20, color: 'black'}}>

                                        <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                                    </Text>
                                </Button>

                            </Right>

                        </CardItem>
                        <CardItem style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                            <Text style={styles.header1}>
                                جهت ثبت نام در سایت،مشخصات خود را وارد کنید:

                            </Text>


                                <TextInput style={styles.Name} underlineColorAndroid={'transparent'} placeholder="نام"
                                           placeholderTextColor='black'
                                    /*
                                    onChangeText={(username)=>this.setState({username})}

                                               value={this.state.username}
                                           */
                                />


                                <TextInput style={styles.Name} underlineColorAndroid={'transparent'}
                                           placeholder="نام خانوادگی"
                                           placeholderTextColor='black' autoCapitalize="none"

                                    /*
                                    onChangeText={(password)=>this.({password})}
                                    value={this.state.password}

                                    */
                                />


                                <TextInput style={styles.Name} underlineColorAndroid={'transparent'}
                                           placeholder="شماره تلفن همراه"
                                           placeholderTextColor='black' autoCapitalize="none"

                                    /*
                                    onChangeText={(password)=>this.({password})}
                                    value={this.state.password}

                                    */
                                />


                                <TextInput style={styles.Name} underlineColorAndroid={'transparent'}
                                           placeholder="رمز عبور"
                                           placeholderTextColor='black' autoCapitalize="none"

                                    /*
                                    onChangeText={(password)=>this.({password})}
                                    value={this.state.password}

                                    */
                                />


                                <TextInput style={styles.Name} underlineColorAndroid={'transparent'}
                                           placeholder="تکرار رمز عبور"
                                           placeholderTextColor='black' autoCapitalize="none"

                                    /*
                                    onChangeText={(password)=>this.({password})}
                                    value={this.state.password}

                                    */
                                />



                            <CardItem>
                                <Button style={styles.btnWorod} onPress={this.login}>
                                    <Text style={styles.textbutton}> ورود </Text>
                                </Button>

                            </CardItem>

                            <Text style={{
                                marginTop: 20,
                                textAlign: 'center',
                                fontSize: 18,
                                paddingVertical: 20,
                                paddingHorizontal: 20,
                                fontFamily: 'Sahel'
                            }} onPress={() => this.props.navigation.navigate('Faramoshi')}>
                                ثبت نام در سایت به این معنی است که قوانین و مقررات سایت را قبول می کنید.
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
        marginTop: 5,
        fontFamily: 'Sahel'


    },

    header1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7f7f7f',
        marginTop: 15,
        textAlign: 'center',
        paddingHorizontal: 40,
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
        backgroundColor: '#3EDD88',
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60, width: "92%",
        borderRadius: 30,

    },
    textbutton: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 15,
        fontFamily: 'Sahel'

    },


})


/*

const Errors=(props) => {
    return (
        <View>
            {props.errors.map((error,i)=> <Text key={i}>{error}</Text>)}
        </View>
    )
}

*/
