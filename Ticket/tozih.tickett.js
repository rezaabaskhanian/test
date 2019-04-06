import React, {Component} from 'react';
import {Image, ScrollView, View, Dimensions, ImageBackground, FlatList} from 'react-native'
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


const eynakiabi = require('../img/9-1.jpg')
const garfild = require('../img/garfild.jpg')


export default class Tickettozih extends Component {


    render() {


        const monazereh = [{
            imageUrl: require('../img/9-1.jpg'),
            name: "آقای خرم پور",
            date: '97-11-07',
            content: 'خیلی خوب ک تو هستی',

        },
            {
                imageUrl: require('../img/garfild.jpg'),
                name: "آقای شفتالو",
                date: '97-11-07',
                content: 'نوشابه خوردی،صبحانه خوردی،دیگه چی خوردی؟؟',

            },
        ]
        return (


            <Container>


                <Content>
                        <CardItem>
                            <Left>
                                <Text style={{fontSize:16, color: 'black',fontFamily:'Sahel'}}>
                                    پاسخ های دریافتی
                                </Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button transparent onPress={() => this.props.navigation.goBack()}>
                                    <Icon style={{margin: 5, fontSize: 20,  color: '#262626'}}
                                          name={'arrow-back'}/>
                                </Button>

                            </Right>



                        </CardItem>


                    <Card transparent style={{flex: 1, backgroundColor: '#ffffff'}}>

                        <CardItem style={{backgroundColor: 'transparent'}}>
                            <Left>
                                <Text style={{fontSize: 20, color: '#525252'}}>
                                    <FontAwesome>{Icons.undo}</FontAwesome>


                                </Text>
                                <Text style={{color: '#060d06', fontFamily: 'Sahel', fontSize: 14}}>
                                    لیست تیکت های ارسال شده
                                </Text>
                            </Left>


                            <Right>
                                <Text style={{
                                    color: '#0a1d0a', borderWidth: 1,
                                    borderRadius: 10,
                                    borderColor: '#c9c9c9',
                                    width: 65,
                                    height: 30,
                                    paddingVertical: 5,
                                    paddingHorizontal: 9, fontSize: 12, textAlign: 'center', fontFamily: 'Sahel'
                                }}>
                                    4 پاسخ
                                </Text>
                            </Right>
                        </CardItem>
                        <Item regular style={{marginTop: 10, height: 150,}}>

                            <Input style={{fontFamily: 'Sahel', fontSize: 14, color: '#b3b3b3'}}
                                   placeholder='متن تیکت خود را در اینجا بنویسید'/>
                        </Item>

                        <Text style={{marginTop: 10, fontFamily: 'Sahel'}}>
                            الصاق ضمیمه:
                        </Text>


                        <Item regular style={{marginTop: 10, height: 50}}>

                            <Input style={{fontFamily: 'Sahel', fontSize: 14}} placeholder='فایلی انتخاب نشده'/>

                            <Button>

                                <Text style={{color: '#fff', marginLeft: 10, fontFamily: 'Sahel'}}>انتخاب</Text>
                            </Button>
                        </Item>


                        <Button block style={{
                            marginTop: 5,

                            backgroundColor: '#FF3447',

                        }}>

                            <Text style={{color: '#fff', fontFamily: 'Sahel'}}>ارسال پاسخ</Text>
                        </Button>
                    </Card>

                    <FlatList
                        data={monazereh}
                        keyExtractor={(item, index) => item.date}
                        renderItem={({item}) =>
                            <CardItem bordered header style={{flexDirection: 'column',}}>



                                <Body style={{flexDirection: 'column'}}>
                                <Thumbnail style={{justifyContent:'flex-end'}} source={item.imageUrl}/>
                                <Text style={{
                                    fontFamily: 'Sahel',
                                    fontSize: 14,
                                    marginRight: 5
                                }}>{item.name}</Text>
                                <Text note style={{fontFamily: 'Sahel', fontSize: 14}}>{item.date}</Text>
                                </Body>
                                <Right>
                                    <Text style={{fontFamily: 'Sahel', fontSize: 14,color:'#a4a4a4'}}>
                                        {item.content}
                                    </Text>
                                </Right>

                            </CardItem>

                        }

                    />

                    <Card>

                    </Card>
                </Content>
            </Container>

        );
    }
}

