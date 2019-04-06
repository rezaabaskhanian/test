import React, {Component} from 'react';
import {Image, ScrollView, View, Dimensions, ImageBackground} from 'react-native'
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
    Icon, Input, Item, Right, Accordion, Thumbnail, Badge
} from 'native-base';


import FontAwesome, {Icons} from 'react-native-fontawesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const hans = require('../img/Picture10.png')

const eynakiabi = require('../img/9-1.jpg')
const percentage = require('../img/percentage.png')
const event = require('../img/event.png')
const trophy = require('../img/cup.png')

export default class Last extends Component {


    render() {

        return (


            <Container>



                <Content style={{marginTop: 25}}>


                    <Card transparent style={{flex: 1, backgroundColor: '#ffffff'}}>

                        <CardItem>
                            <Left>
                                <Text style={{fontSize: 13, marginRight: 5,fontFamily:'Sahel'}}>
                                    آنچه گذشت
                                </Text>

                                <Button style={{
                                    backgroundColor: '#59D28F',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    height: 25,

                                }}>
                                    <Text style={{fontSize: 14, color: '#fff',fontFamily:'Sahel'}}>
                                        دور سوم
                                    </Text>
                                    <Icon name='undo' style={{fontSize: 16, color: '#fff',}}/>
                                </Button>
                            </Left>

                            <Right>
                                <Button transparent title={null} onPress={() => this.props.navigation.goBack()}>

                                    <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: '#13270c',fontFamily:'Sahel'}}>
                                        <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                                    </Text>
                                </Button>
                            </Right>
                        </CardItem>

                        <Card transparent style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Card>


                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Thumbnail square large source={hans}/>
                                    <Badge success style={{position: 'absolute', marginTop: 3}}>
                                        <Text style={{fontSize: 14,fontFamily:'Sahel'}}>60%</Text>
                                    </Badge>


                                </CardItem>

                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Text style={{fontSize: 12,fontFamily:'Sahel'}}>
                                        هدست بلوتوث RQ170
                                    </Text>

                                </CardItem>
                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Body style={{
                                        backgroundColor: '#ff392b',
                                        borderRadius: 13,
                                        height: 25,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{color: '#fff', fontSize: 12, marginTop: 3,fontFamily:'Sahel'}}>
                                        1,149,000 تومان
                                    </Text>
                                    </Body>
                                </CardItem>


                            </Card>

                            <Card transparent style={{justifyContent: 'center'}}>
                                <Badge style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#ff392b',fontFamily:'Sahel'
                                }}>
                                    <Icon name='swap' style={{fontSize: 17, color: '#fff',}}/>
                                </Badge>
                            </Card>


                            <Card >

                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Thumbnail source={eynakiabi}

                                               style={{
                                                   width: 80,
                                                   height: 80,
                                                   borderRadius: 80 / 2,
                                                   overflow: "hidden",
                                                   borderWidth: 2,
                                                   borderColor: '#ff392b'
                                               }}/>
                                </CardItem>


                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Text style={{fontSize: 12,fontFamily:'Sahel'}}>
                                        payman 2020
                                    </Text>

                                </CardItem>
                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Body style={{
                                        backgroundColor: '#ff392b',
                                        borderRadius: 13,
                                        height: 25,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{color: '#fff', fontSize: 12,fontFamily:'Sahel', marginTop: 3}}>
                                        شاه دزد اول
                                    </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Card>

                        <Card transparent style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Card>


                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Thumbnail square large source={hans}/>
                                    <Badge success style={{position: 'absolute', marginTop: 3}}>
                                        <Text style={{fontSize: 14,fontFamily:'Sahel'}}>45%</Text>
                                    </Badge>


                                </CardItem>

                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Text style={{fontSize: 12}}>
                                        هدست بلوتوث RQ170
                                    </Text>

                                </CardItem>
                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Body style={{
                                        backgroundColor: '#58BEFF',
                                        borderRadius: 13,
                                        height: 25,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{color: '#fff', fontSize: 12, marginTop: 3}}>
                                        1,149,000 تومان
                                    </Text>
                                    </Body>
                                </CardItem>


                            </Card>

                            <Card transparent style={{justifyContent: 'center'}}>
                                <Badge style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#58BEFF'
                                }}>
                                    <Icon name='swap' style={{fontSize: 16, color: '#fff',}}/>
                                </Badge>
                            </Card>


                            <Card>

                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Thumbnail source={eynakiabi}

                                               style={{
                                                   width: 80,
                                                   height: 80,
                                                   borderRadius: 80 / 2,
                                                   overflow: "hidden",
                                                   borderWidth: 2,
                                                   borderColor: '#58BEFF'
                                               }}/>
                                </CardItem>


                                <CardItem  style={{backgroundColor: '#f8f8f8'}}>

                                    <Text style={{fontSize: 12}}>
                                        payman 2020
                                    </Text>

                                </CardItem>
                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Body style={{
                                        backgroundColor: '#58BEFF',
                                        borderRadius: 13,
                                        height: 25,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{color: '#fff', fontSize: 12, marginTop: 3,fontFamily:'Sahel'}}>
                                        شاه دزد دوم
                                    </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Card>

                        <Card transparent style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <Card>


                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Thumbnail square large source={hans}/>
                                    <Badge success style={{position: 'absolute', marginTop: 3}}>
                                        <Text style={{fontSize: 14,fontFamily:'Sahel'}}>38%</Text>
                                    </Badge>


                                </CardItem>

                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Text style={{fontSize: 12,fontFamily:'Sahel'}}>
                                        هدست بلوتوث RQ170
                                    </Text>

                                </CardItem>
                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Body style={{
                                        backgroundColor: '#FDC459',
                                        borderRadius: 13,
                                        height: 25,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{color: '#fff', fontSize: 12, marginTop: 3,fontFamily:'Sahel'}}>
                                        1,149,000 تومان
                                    </Text>
                                    </Body>
                                </CardItem>


                            </Card>

                            <Card transparent style={{justifyContent: 'center'}}>
                                <Badge style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#FDC459',fontFamily:'Sahel'
                                }}>
                                    <Icon name='swap' style={{fontSize: 16, color: '#fff',}}/>
                                </Badge>
                            </Card>


                            <Card>

                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Thumbnail source={eynakiabi}

                                               style={{
                                                   width: 80,
                                                   height: 80,
                                                   borderRadius: 80 / 2,
                                                   overflow: "hidden",
                                                   borderWidth: 2,
                                                   borderColor: '#FDC459'
                                               }}/>
                                </CardItem>


                                <CardItem style={{backgroundColor: '#f8f8f8'}}>

                                    <Text style={{fontSize: 12,fontFamily:'Sahel'}}>
                                        payman 2020
                                    </Text>

                                </CardItem>
                                <CardItem style={{backgroundColor: '#f8f8f8'}}>
                                    <Body style={{
                                        backgroundColor: '#FDC459',
                                        borderRadius: 13,
                                        height: 25,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={{color: '#fff', fontSize: 12, marginTop: 3,fontFamily:'Sahel'}}>
                                        شاه دزد سوم
                                    </Text>
                                    </Body>
                                </CardItem>
                            </Card>


                        </Card>

                        <Card transparent style={{flexDirection: 'row'}}>
                            <Left>
                                <Card style={{width: 180}}>
                                    <CardItem>
                                        <Body style={{alignItems: 'center'}}>
                                        <Thumbnail source={trophy}

                                                   style={{
                                                       width: 35,
                                                       height: 35,
                                                       borderRadius: 35 / 2,
                                                   }}/>


                                        </Body>

                                    </CardItem>
                                    <CardItem>

                                        <Body style={{alignItems: 'center'}}>
                                        <Text style={{color: '#0b1f0b', fontSize: 15,fontFamily:'Sahel'}}>
                                            اهدا کاپ
                                        </Text>
                                        </Body>

                                    </CardItem>

                                    <CardItem>

                                        <Body style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 12, color: '#b5b5b5',fontFamily:'Sahel'}}>
                                            265 کاپ دزدی
                                        </Text>

                                        </Body>

                                    </CardItem>
                                </Card>
                            </Left>

                            <Right>
                                <Card style={{width: 180}}>
                                    <CardItem>
                                        <Body style={{alignItems: 'center'}}>

                                        <Thumbnail source={event}

                                                   style={{
                                                       width: 35,
                                                       height: 35,
                                                       borderRadius: 35 / 2,
                                                   }}/>

                                        </Body>

                                    </CardItem>
                                    <CardItem>

                                        <Body style={{alignItems: 'center'}}>
                                        <Text style={{color: '#0b1f0b', fontSize: 15,fontFamily:'Sahel'}}>
                                            تاریخ شروع
                                        </Text>
                                        </Body>

                                    </CardItem>

                                    <CardItem>

                                        <Body style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 12, color: '#b5b5b5',fontFamily:'Sahel'}}>
                                            24 آذر 1397
                                        </Text>

                                        </Body>

                                    </CardItem>
                                </Card>
                            </Right>

                        </Card>

                        <Card>

                            <CardItem style={{justifyContent: 'center'}}>
                                <Thumbnail source={percentage}

                                           style={{
                                               width: 35,
                                               height: 35,
                                               borderRadius: 35 / 2,
                                           }}/>


                            </CardItem>
                            <CardItem style={{justifyContent: 'center'}}>
                                <Text style={{color: '#111111',fontFamily:'Sahel'}}>
                                    تخفیف ها
                                </Text>

                            </CardItem>

                            <CardItem>
                                <Right>
                                    <Text style={{fontSize: 13,fontFamily:'Sahel'}}>
                                        مبلغ کل (تومان)
                                    </Text>
                                </Right>

                                <Left>
                                    <Text style={{fontSize: 12, color: '#ff392b',fontFamily:'Sahel'}}>
                                        175,000 هزارتومان
                                    </Text>

                                </Left>

                            </CardItem>

                            <CardItem>


                                <Right>
                                    <Text style={{fontSize: 13,fontFamily:'Sahel'}}>
                                        تخفیف (تومان)
                                    </Text>
                                </Right>
                                <Left>
                                    <Text style={{fontSize: 12, color: '#ff392b',fontFamily:'Sahel'}}>
                                        175,000 هزارتومان
                                    </Text>

                                </Left>
                            </CardItem>

                            <CardItem>
                                <Right>
                                    <Text style={{fontSize: 13,fontFamily:'Sahel'}}>
                                        پرداخت شده
                                    </Text>
                                </Right>
                                <Left>
                                    <Text style={{fontSize: 12, color: '#ff392b',fontFamily:'Sahel'}}>
                                        175,000 هزارتومان
                                    </Text>

                                </Left>
                            </CardItem>
                        </Card>


                    </Card>

                </Content>
            </Container>

        );
    }

}

