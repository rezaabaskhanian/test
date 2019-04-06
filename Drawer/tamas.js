import React, {Component} from 'react';
import {Image, Dimensions, ImageBackground} from 'react-native'
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
    Icon, Input, Item, Right, Thumbnail, Form, Label, Footer
} from 'native-base';

import FontAwesome, {Icons} from 'react-native-fontawesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const head = require('../img/1924.jpg')
const telegram = require('../img/telegram10.png')
const insta = require('../img/instagram.png')
const twitter = require('../img/twitter.png')

export default class tamas extends Component {
    render() {
        return (
            <Container>
                <Content >

                        <CardItem >
                            <Left>
                                <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                                    <Icon style={{margin: 5, fontSize: 30, textAlign: 'left', color: '#dfdfdf'}}
                                          name={'menu'}/>
                                </Button>
                            </Left>
                            <Right>
                                <Text style={{fontSize: 20, color: 'black', fontFamily: 'Sahel'}}>
                                    تماس با ما
                                </Text>
                            </Right>
                        </CardItem>

                    <Card>
                        <CardItem cardBody>
                            <ImageBackground source={head} style={{height: windowHeight / 3, width: null, flex: 1}}/>
                        </CardItem>
                    </Card>
                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <CardItem>
                            <Text style={{fontSize: 12, fontFamily: 'Sahel', color: '#181818', marginRight: 5}}>@40
                                dozd</Text>
                            <Thumbnail source={twitter}
                                       style={{
                                           width: 30,
                                           height: 30,
                                           borderRadius: 30 / 2,
                                       }}/>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontSize: 12, color: '#181818', fontFamily: 'Sahel', marginRight: 5}}>@40
                                dozd</Text>
                            <Thumbnail source={insta}
                                       style={{
                                           width: 30,
                                           height: 30,
                                           borderRadius: 30 / 2,
                                       }}/>
                        </CardItem>
                        <CardItem>
                            <Text style={{fontSize: 12, marginRight: 5, fontFamily: 'Sahel'}}>@40dozd</Text>
                            <Thumbnail source={telegram}

                                       style={{
                                           width: 30,
                                           height: 30,
                                           borderRadius: 40 / 2,
                                       }}/>
                        </CardItem>
                    </Card>
                    <Card>


                        <Text style={{color: '#868686', marginTop: 8, marginLeft: 5, fontFamily: 'Sahel'}}>
                            ارتباط تلفنی
                        </Text>

                        <Text
                            style={{color: '#868686', marginTop: 8, fontSize: 13, marginLeft: 5, fontFamily: 'Sahel'}}>
                            شرکت: 05138439983
                        </Text>


                        <Text
                            style={{color: '#868686', marginTop: 15, fontSize: 15, marginLeft: 5, fontFamily: 'Sahel'}}>
                            آدرس :مشهد، پنج راه سناباد -بالاتر از ابن سینا18-پلاک220
                        </Text>

                        <Text
                            style={{color: '#0d0d0d', marginTop: 12, fontSize: 15, marginLeft: 5, fontFamily: 'Sahel'}}>
                            برای ارتباط با ما فرم زیر را پر و ارسال نمایید.
                        </Text>

                        <Form style={{marginTop: 10, alignItems: 'center'}}>
                            <Item regular style={{height: 150, width: windowWidth * 0.9,}}>
                                <Label style={{fontSize: 12, fontFamily: 'Sahel'}}>(اجباری) پیام خود را اینجا
                                    بنویسید...</Label>
                                <Input/>
                            </Item>
                            <Item regular style={{width: windowWidth * 0.9, marginTop: 10}}>
                                <Label style={{fontSize: 12, fontFamily: 'Sahel'}}>(اجباری) نام خود را وارد
                                    نمایید...</Label>
                                <Input/>
                            </Item>

                            <Item regular style={{width: windowWidth * 0.9, marginTop: 10}}>
                                <Label style={{fontSize: 12, fontFamily: 'Sahel'}}> (اجباری) ایمیل خود را وارد
                                    نمایید...</Label>
                                <Input/>
                            </Item>


                        </Form>

                        <CardItem>
                            <Body>
                            <Button block style={{marginTop: 8, backgroundColor: '#FF3447'}}><Text
                                style={{fontFamily: 'Sahel'}}>ارسال </Text></Button>
                            </Body>
                        </CardItem>
                    </Card>


                </Content>

            </Container>
        );
    }
}