import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView, View, FlatList, Dimensions} from 'react-native'
import {
    Container,
    Header,
    Content,
    Text,
    Body,

    Card,
    CardItem,
    Accordion, Left, Right, Button, Icon
} from 'native-base';
import {Icons} from "react-native-fontawesome";


import FontAwesome from 'react-native-fontawesome';

import TozihTicket from './tozih.tickett'
import Ticket from './Ticket'


const datatitle = [
    {title: 'تیکت جدید'}
];


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default class Tickets extends Component {

    _renderHeader(item,) {
        return (
            <View style={{
                flexDirection: "row",
                backgroundColor: '#FF3447',
                padding: 10,
                justifyContent: 'center',
                alignItems: "center",
            }}>
                <Text
                    style={{fontWeight: "200", color: '#fff', fontFamily: 'Sahel', textAlign: 'center', fontSize: 12}}>
                    {" "}{item.title}
                </Text>

            </View>
        );
    }

    _renderContent() {
        return (
            <Ticket/>
        );
    }

    render() {


        const tickets = [{
            shomare: '#12342',
            onvan: "پیگیری مرسوله",
            ijad: '97-11-07',
            berozresani: '97-11-11',
            vaziyat: 'پاسخ داده',
        },
            {
                shomare: '#12342',
                onvan: "انتقادات",
                ijad: '97-11-07',
                berozresani: '97-12-03',
                vaziyat: 'پاسخ نداده',

            },
        ]

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
                            <Text style={{fontSize: 16, color: 'black', fontFamily: 'Sahel'}}>
                                پاسخ های دریافتی
                            </Text>
                        </Right>


                    </CardItem>


                    <Card transparent>
                        <CardItem style={{backgroundColor: 'transparent' ,justifyContent:'space-around'}}>

                                <Text style={{color: '#060d06', fontFamily: 'Sahel',fontSize:13}}>
                                    لیست تیکت های ارسال شده
                                </Text>

                                <Text style={{
                                    color: '#0a1d0a', borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: '#c9c9c9',
                                    width: 65,
                                    height: 30,
                                    paddingVertical: 5,
                                    paddingHorizontal: 9, fontSize: 12, textAlign: 'center', fontFamily: 'Sahel'
                                }}>
                                    4 تیکت
                                </Text>



                        </CardItem>
                        <CardItem>
                            <Accordion
                                dataArray={datatitle}
                                animation={true}
                                expanded={true}
                                renderHeader={this._renderHeader}
                                renderContent={this._renderContent}
                            />
                        </CardItem>
                    </Card>


                    <CardItem bordered header
                              style={{
                                  flexDirection: 'row',
                                  marginTop: 10,
                                  justifyContent: 'space-between',
                                  borderTopWidth: 1.3,
                                  borderTopColor: '#eaeaea'
                              }}>
                        <Text style={{fontSize: 12, fontFamily: 'Sahel'}}> شماره </Text>
                        <Text style={{fontSize: 12, fontFamily: 'Sahel'}}> عنوان </Text>
                        <Text style={{fontSize: 12, fontFamily: 'Sahel'}}>ایجاد </Text>
                        <Text style={{fontSize: 12, fontFamily: 'Sahel'}}> به روز رسانی </Text>
                        <Text style={{fontSize: 12, fontFamily: 'Sahel'}}> وضعیت </Text>
                    </CardItem>


                    <FlatList
                        data={tickets}
                        keyExtractor={(item, index) => item.shomare}
                        renderItem={({item}) =>


                            <CardItem bordered button onPress={() => this.props.navigation.navigate('TozihTicket')}
                                      style={{
                                          flexDirection: 'row',
                                          marginTop: 20,
                                          justifyContent: 'space-between'
                                      }}>

                                <Text style={{
                                    fontSize: 12,
                                    color: 'black',
                                    fontFamily: 'Sahel'
                                }}>{item.shomare}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'black',
                                    textAlign: 'center',
                                    fontFamily: 'Sahel'
                                }}>{item.onvan}
                                </Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'black',
                                    textAlign: 'center',
                                    fontFamily: 'Sahel'
                                }}>{item.ijad} </Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'black',
                                    textAlign: 'center',
                                    fontFamily: 'Sahel'
                                }}>{item.berozresani}</Text>
                                <Text style={{
                                    fontSize: 12,
                                    color: 'black',
                                    textAlign: 'center',
                                    fontFamily: 'Sahel'
                                }}>{item.vaziyat}</Text>

                            </CardItem>

                        }
                    />

                </Content>
            </Container>

        );
    }
}