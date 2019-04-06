import React, {Component} from 'react';
import {Image, StyleSheet, ImageBackground, Dimensions, FlatList,AppRegistry} from 'react-native'
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
    Icon, Input, Item, Right, Radio, Footer, Picker, Form, Label, CheckBox,
} from 'native-base';

import { DrawerActions } from 'react-navigation';
import FontAwesome, {Icons} from 'react-native-fontawesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class cart extends Component {

    render() {


        const kharid = [{

            name: "موبایل",
            number: '2',
            gheymat: '860,000هزارتومان',

        },
            {
                name: "پهباد",
                number: '1',
                gheymat: '860,000هزارتومان',

            },
        ]
        return (

            <Container style={{backgroundColor: '#f5f5f5'}}>
                <Content>

                      <CardItem>
                         <Left>
                             <Button transparent  onPress={() =>this.props.navigation.openDrawer()}>
                                 <Icon style={{margin: 5, fontSize: 30, textAlign: 'left', color: '#dfdfdf'}}
                                       name={'menu'}/>
                             </Button>

                          </Left>


                            <Right>
                                <Text style={{fontSize: 20, color: 'black',fontFamily:'Sahel'}}>
                                 سبد خرید
                                </Text>
                            </Right>


                        </CardItem>

                    <Card style={{flex: 1, backgroundColor: '#f5f5f5', paddingHorizontal: 10}}>




                        <CardItem bordered style={{
                            backgroundColor: '#ffffff',
                            justifyContent: 'space-between',
                            borderBottomColor: '#aca8b0',
                            borderBottomWidth: 1,
                            paddingHorizontal: 20
                        }}>
                            <Text style={{color: '#a4a0a8', fontFamily: 'Sahel'}}>
                                نام کالا
                            </Text>
                            <Text style={{color: '#747078', fontFamily: 'Sahel',marginRight:40}}>
                                تعداد
                            </Text>
                            <Text style={{color: '#747078', fontFamily: 'Sahel'}}>
                                قیمت
                            </Text>
                        </CardItem>


                        <FlatList
                            data={kharid}
                            keyExtractor={(item, index) => item.name}
                            renderItem={({item}) =>
                                <CardItem style={{

                                    justifyContent: 'space-between',

                                }}>
                                    <Text style={{color: '#030603', fontSize: 13, fontFamily: 'Sahel'}}>
                                        {item.name}
                                    </Text>
                                    <Text style={{
                                        color: '#030803', borderWidth: 1,
                                        borderRadius: 15,
                                        borderColor: '#c9c9c9',
                                        width: 30,
                                        height: 30,
                                       fontFamily: 'Sahel',

                                        textAlign:'center'

                                    }}>{item.number}</Text>
                                    <Text style={{color: '#040d04', fontFamily: 'Sahel', fontSize: 12,}}>
                                        {item.gheymat}
                                    </Text>
                                </CardItem>

                            }
                        />


                        <CardItem
                            bordered style={{
                            backgroundColor: '#ffffff',
                            justifyContent: 'space-between',

                            borderTopColor: '#c8c8c8',
                            borderTopWidth: 1,

                            paddingHorizontal: 20
                        }}>
                            <Text style={{color: '#ffffff'}}>
                                jiv vhk
                            </Text>

                            <Text style={{color: '#0b1f0b', fontSize: 13, fontFamily: 'Sahel'}}>
                                19 بسته
                            </Text>
                            <Text style={{color: '#040d04', fontSize: 12, fontFamily: 'Sahel'}}>
                                290,000 هزار تومان
                            </Text>
                        </CardItem>
                    </Card>


                    <Card transparent style={{  backgroundColor: '#f5f5f5'}}>


                                <CardItem>
                                    <Left>
                                        <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                            کل خرید:
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                            586,200 تومان
                                        </Text>

                                    </Right>


                                </CardItem>
                                <CardItem>

                                    <Left>
                                        <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                            مالیات(5%):
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                            18,200 تومان
                                        </Text>

                                    </Right>

                                </CardItem>
                                <CardItem>


                                    <Left>
                                        <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                            هزینه تحویل:
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                            4000 تومان
                                        </Text>

                                    </Right>
                                </CardItem>




                    </Card>

                    <Card>
                        <CardItem>
                            <Left>
                                <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                    پیک موتوری
                                </Text>
                            </Left>
                            <Right>
                                <CheckBox checked={false}/>

                            </Right>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                    پست پیشتاز
                                </Text>
                            </Left>
                            <Right>
                                <CheckBox checked={false}/>

                            </Right>
                        </CardItem>

                    </Card>
                    <Card>
                        <CardItem>
                            <Left>
                                <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                    پرداخت حضوری
                                </Text>
                            </Left>
                            <Right>
                                <CheckBox checked={false}/>

                            </Right>
                        </CardItem>

                        <CardItem>
                            <Left>
                                <Text style={{color: '#0b1f0b', fontSize: 11, fontFamily: 'Sahel'}}>
                                    پرداخت آنلاین
                                </Text>
                            </Left>
                            <Right>
                                <CheckBox checked={false}/>

                            </Right>
                        </CardItem>
                    </Card>

                </Content>
                <Footer style={{backgroundColor: '#FF3447'}}>

                    <Button full transparent>
                        <Text style={{color: '#fff', fontFamily: 'Sahel'}}>خرید</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}


