import React, {Component} from 'react';
import {Image, StyleSheet, Dimensions, ImageBackground, View} from 'react-native'
import {
    Container,
    Header,
    Content,
    Text,
    Body,
    Button,
    Left,
    Title,
    Card,
    CardItem,
    Icon, Input, Item, Right, Radio, Footer, Picker, Form, Label
} from 'native-base';

import FontAwesome, {Icons} from 'react-native-fontawesome';

const gif = require('../img/30.png')
const virgol = require('../img/comma.png')
const Logoabi = require('../img/logoabi.png')
const Logozr = require('../img/logorz.png')


const fun = require('../img/fun-stage.jpg')
const bare = require('../img/bare.jpg')
const humyasa = require('../img/humyasa.jpg')
const lifecard = require('../img/life-card.jpg')
const nbcompany = require('../img/nbcompany.jpg')
const golsher = require('../img/golsher.jpg')


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AboutOur extends Component {


    render() {
        return (
            <Container>
                <Content>
                    <CardItem>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                                <Icon style={{margin: 5, fontSize: 30, textAlign: 'left', color: '#dfdfdf'}}
                                      name={'menu'}/>
                            </Button>

                        </Left>

                        <Right>
                            <Text style={{fontSize: 20, color: 'black', fontFamily: 'Sahel'}}>
                                درباره ما
                            </Text>
                        </Right>


                    </CardItem>

                    <Card>


                        <Image style={{
                            width: windowWidth * 1,
                            height: windowHeight * 0.33
                        }} source={gif} resizeMode="contain"/>
                        <Body>
                        <Text style={{color: 'rgb(58,76,160)', fontSize: 25}}>
                            چهل دزد
                        </Text>
                        </Body>


                        <CardItem style={{

                            marginRight: 10, flexDirection: 'row',
                        }}>


                            <Image style={{
                                width: windowWidth * 0.1,
                                height: windowHeight * 0.1, marginTop: 10, marginBottom: 100
                            }} source={virgol} resizeMode="contain">

                            </Image>

                            <Text style={{marginHorizontal: 10, fontFamily: 'mor', lineHeight: 30, color: '#808080'}}>
                                میریم کف بازار و میگردیم ، بدون مذاکره دلال هارو دور میزنیم ، با تولید کننده ها و وارد
                                کننده های کلان به توافق میرسیم تا بهترین جنس هارو با کمترین قیمت برای شما آماده کنیم.
                            </Text>

                        </CardItem>


                        <Text style={{marginHorizontal: 10, fontFamily: 'mor', fontSize: 20}}>
                            همکاران ما

                        </Text>

                        <CardItem style={{

                            marginRight: 10, flexDirection: 'row',height:windowHeight*0.1
                        }}>


                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10,
                            }} source={fun} resizeMode="contain">

                            </Image>


                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10,
                            }} source={bare} resizeMode="contain">

                            </Image>

                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10,
                            }} source={humyasa} resizeMode="contain">

                            </Image>

                        </CardItem>


                        <CardItem style={{

                            marginRight: 10,
                        }}>



                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10,
                            }} source={lifecard} resizeMode="contain">

                            </Image>


                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10,
                            }} source={nbcompany} resizeMode="contain">

                            </Image>

                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10,
                            }} source={golsher} resizeMode="contain">

                            </Image>




                        </CardItem>


                        <Text style={{marginHorizontal: 10, fontFamily: 'mor', fontSize: 20}}>
                            نمادهای اطمینان
                        </Text>

                        <CardItem style={{

                            marginRight: 10, flexDirection: 'row', justifyContent: 'center'
                        }}>


                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10, marginBottom: 10
                            }} source={Logozr} resizeMode="contain">

                            </Image>


                            <Image style={{
                                width: windowWidth * 0.3,
                                height: windowHeight * 0.3, marginTop: 10, marginBottom: 10
                            }} source={Logoabi} resizeMode="contain">

                            </Image>


                        </CardItem>


                    </Card>

                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    Header1: {
        backgroundColor: '#3366cc'
    },
    Title: {
        margin: 5, fontSize: 20, textAlign: 'right', color: 'black'
    },
    Header2: {
        height: 100,
        backgroundColor: '#fff'

    },
    TextH2: {
        left: 5
    },
    TextH21: {
        left: 5
    }
})