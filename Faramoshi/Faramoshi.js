import React, {Component} from 'react';
import {
    Text,

    StyleSheet,
    TextInput, ImageBackground, Dimensions
} from 'react-native';
import {
    Left,
    Body,
    Button,
    Card,
    Container,
    Content,
    Header,
    Right,
    CardItem,
    Thumbnail,
    Input,
    Item,
} from 'native-base'


import FontAwesome, {Icons} from 'react-native-fontawesome';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class changepass extends Component {

    render() {
        return (
            <Container style={{backgroundColor: '#f4f4f4'}}>
                <Header style={{backgroundColor: '#fff', marginTop: 10, }}>

                    <Left/>
                    <Body>
                    <Text style={{color: '#1c1c1c', fontSize: 16, fontFamily: 'Sahel',}}>
                        فراموشی رمز
                    </Text>
                    </Body>


                    <Right>
                        <Button transparent title={null} onPress={() => this.props.navigation.goBack()}>

                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: '#7c7c7c'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>
                        </Button>

                    </Right>
                </Header>
                <Content>

                    <Card transparent style={{padding: 40, flexGrow: 1, justifyContent: 'space-around'}}>


                        <CardItem>


                            <Body style={{alignItems: 'center'}}>


                            <Text style={{
                                fontSize: 14,
                                fontFamily: 'Sahel',
                                color: '#c5c5c5',
                                textAlign: 'center',
                                marginTop: 8
                            }}>
                                ایمیل خود را در فیلد زیر وارد کنید تا کد تایید به ایمیل شما ارسال شود
                            </Text>
                            </Body>

                        </CardItem>


                        <CardItem>


                            <TextInput style={style.Name} underlineColorAndroid={'transparent'} placeholder="ایمیل"
                                       placeholderTextColor='gray' autoCapitalize="none"

                                /*
                                onChangeText={(password)=>this.({password})}
                                value={this.state.password}

                                */
                            />


                        </CardItem>

                        <CardItem>
                            <Button style={style.btnWorod} onPress={this.login}>
                                <Text style={style.textbutton}> ورود </Text>
                            </Button>
                        </CardItem>

                    </Card>

                </Content>
            </Container>


        )
    }

}


const style = StyleSheet.create({
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
});
