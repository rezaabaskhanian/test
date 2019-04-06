import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput, ImageBackground, Dimensions, FlatList

} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
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
    Item, Icon
} from 'native-base'

import FontAwesome, {Icons} from 'react-native-fontawesome';


const kap = require('../img/kapshan.png')
export default class Sabtenam extends Component {
    render() {

        const items = [{
            imageUrl: require('../img/kapshan.png'),
            kala: "انیمیشن",
            history:'15 بهمن 97',
            number: 2,
            gheymat: '79,000 هزار تومان',
            code:' کد:cd712541'

        },
            {
                imageUrl: require('../img/kapshan.png'),
                kala: "انیمیشن",
                history:'15 بهمن 97',
                number: 2,
                gheymat: '79,000 هزار تومان',
                code:' کد:cd712541'
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
                                <Text style={{fontSize: 20, color: 'black',fontFamily:'Sahel'}}>
                                   تاریخچه خرید
                                </Text>
                            </Right>


                        </CardItem>


                    <Card>


                        <CardItem header bordered style={{backgroundColor: '#f5f5f5'}}>
                            <Text style={{color: '#030603', fontFamily: 'Sahel'}}>خلاصه ای از خرید های گذشته</Text>
                        </CardItem>


                        <CardItem bordered header>
                            <Left>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    کل میزان خرید:
                                </Text>
                            </Left>
                            <Right>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    975,200 تومان
                                </Text>
                            </Right>
                        </CardItem>
                        <CardItem style={{marginTop: 3}}>
                            <Left>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    کل آیتم های خریداری شده:
                                </Text>
                            </Left>
                            <Right>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    145 آیتم
                                </Text>
                            </Right>
                        </CardItem>

                        <CardItem style={{marginTop: 3}}>
                            <Left>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    اولین خرید:
                                </Text>
                            </Left>
                            <Right>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    24 آذر 1397
                                </Text>
                            </Right>
                        </CardItem>

                        <CardItem style={{marginTop: 3}}>
                            <Left>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    آخرین خرید:
                                </Text>
                            </Left>
                            <Right>
                                <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                    7 بهمن 1397
                                </Text>
                            </Right>
                        </CardItem>

                    </Card>

                    <View>
                        <View header bordered style={{
                            backgroundColor: '#f5f5f5',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginHorizontal: 10
                        }}>
                            <Text style={{color: '#030603', fontFamily: 'Sahel'}}>خرید های گذشته شما</Text>
                            <Icon name='calendar' style={{fontSize: 30, color: '#7e7e7e',}}/>
                        </View>


                        <View bordered header style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomWidth: 1,
                            borderBottomColor: '#c9c9c9',
                            borderBottomLeftRadius: 15
                            ,
                            borderBottomRightRadius: 15
                        }}>


                            <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                نام کالا
                            </Text>


                            <Text style={{color: '#030603', fontFamily: 'Sahel'}}>
                                تعداد
                            </Text>


                            <Text style={{color: '#030603', fontFamily: 'Sahel',marginRight:35}}>
                                قیمت
                            </Text>

                        </View>


                        <FlatList

                            data={items}
                            keyExtractor={(item,index) => item.kala}
                            renderItem={({item}) => <View style={{
                                marginTop: 3,
                                justifyContent: 'space-around',
                                flexDirection: 'row',

                            }}>

                                <View>
                                    <Thumbnail small source={item.imageUrl}/>

                                    <Text style={{fontSize: 13, marginLeft: 5, color: '#030603', fontFamily: 'Sahel'}}>
                                        {item.kala}
                                    </Text >
                                    <Text note style={{fontSize: 13, marginLeft: 5, color: '#030603', fontFamily: 'Sahel'}}>
                                        {item.history}
                                    </Text>

                                </View>

                                <Text style={{color: '#030603', fontFamily: 'Sahel',marginLeft:-30}}>
                                    {item.number}
                                </Text>

                                <View>
                                    <Text style={{fontSize: 13, color: '#030603', fontFamily: 'Sahel'}}>
                                        {item.gheymat}
                                    </Text>
                                    <Text note style={{fontSize: 13, marginLeft: 5, color: '#030603', fontFamily: 'Sahel'}}>
                                        {item.code}
                                    </Text>
                                </View>
                            </View>
                            }
                        />


                    </View>
                </Content>
            </Container>
        )
    }
}