import React from 'react';
import {StyleSheet, Text, View, Image, I18nManager, AsyncStorage, Dimensions, TouchableOpacity} from 'react-native';

import {
    createDrawerNavigator,
    StackNavigator, DrawerItems, createStackNavigator,
} from 'react-navigation';

import App1 from './Main/Application1'

import Splash from './Main/Splash'
import Main from './Main/Main'


import Last from './Drawer/last'

import Register from './Drawer/Register'
import Sabtenam from './Drawer/sabtenam'

import Cart from './Drawer/Cart'


import Tiket from './Ticket/Tickets'
import tamas from './Drawer/tamas'
import AboutOur from './Drawer/AboutOur'

import Faramoshi from './Faramoshi/Faramoshi'
import tarikh from './Drawer/tarikhkharid'
import ghavanin from './Drawer/ghavanin'

import sabt from './Drawer/sabt'

import derawer from './Main/Drawer'
import TozihTicket from './Ticket/tozih.tickett'
import Drawer from './Main/Drawer'


import {
    Container,
    Header,
    Title,
    Content,
    Root,
    Body,
    Thumbnail,
    Icon, Left, Right, Button, Card, CardItem,

} from 'native-base';
import FontAwesome, {Icons} from 'react-native-fontawesome';


I18nManager.forceRTL(true);


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const headDerawer = require('./img/chehel.white.png')


const insta = require('./img/insta.png')
const tele = require('./img/teele.png')

/*
const derawer = createDrawerNavigator(
    {

        M: {
            screen: Sabtenam,
            navigationOptions: () => ({
                title: 'پروفايل',
                drawerIcon: (<Text style={{fontSize: 22, color: '#fff', fontFamily: 'Sahel'}}>
                    <FontAwesome>{Icons.user}</FontAwesome>
                </Text>)

            })
        },

        M1: {
            screen: Register,
            navigationOptions: () => ({
                title: 'ورود/ثبت  نام',
                drawerIcon: (<Text style={{fontSize: 22, color: '#fff', fontFamily: 'Sahel'}}>
                    <FontAwesome>{Icons.userPlus}</FontAwesome>
                </Text>)

            })
        },

        خانه: {

            screen: Main,
            navigationOptions: () => ({
                drawerIcon: (<Icon name='home' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>),

                drawerLabel: 'صفحه نخست',
                labelStyle: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#fff',


                },

            })
        },


        g1: {

            screen: Cart,
            navigationOptions: () => ({
                title: 'ُسبد خريد',

                labelStyle: {
                    borderBottomWidth: 2,
                    borderColor: '#ffffff',
                    fontSize: 5

                },
                drawerIcon: (<Icon name='cart' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>)
            })
        },


        g2: {

            screen: Main,
            navigationOptions: () => ({
                title: 'فروشگاه',
                drawerIcon: (<Icon name='pricetag' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>)
            })
        },

        g: {

            screen: tarikh,
            navigationOptions: () => ({

                title: 'سوابق خريد',
                drawerIcon: (<Icon name='paper' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>),

            })
        },


        g4: {

            screen: Tiket,
            navigationOptions: () => ({


                title: 'تيکت ها',
                drawerIcon: (<Icon name='bookmark' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>)
            })
        },
        s: {
            screen: Last,
            navigationOptions: () => ({
                drawerLockMode: 'locked-closed',
                title: 'آنچه گذشت (به زودي) ',

                drawerIcon: (<Icon name='calendar' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>)
            })
        },


        c: {

            screen: AboutOur,
            navigationOptions: () => ({
                title: 'درباره ما',
                drawerIcon: (
                    <Icon name='information-circle' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>)
            })
        },

        a: {

            screen: tamas,
            navigationOptions: () => ({

                title: 'تماس با ما',
                drawerIcon: (<Icon name='headset' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>)

            })
        },

        a1: {

            screen: ghavanin,
            navigationOptions: () => ({

                title: 'قوانين و مقررات',
                drawerIcon: (<Icon name='list-box' style={{fontSize: 25, color: '#fff', fontFamily: 'Sahel'}}/>)


            })
        },
    },


    {

        initialRouteName: 'خانه',
        drawerPosition: 'right',

        contentOptions: {
            style: {
                backgroundColor: '#404040',
                flex: 1
            },

            itemStyle: {

                borderBottomWidth: 1,
                borderBottomColor: '#d9d5dd',
            },
            labelStyle: {

                fontSize: 14,
                marginLeft: 40,

            },
            iconStyle: {
                fontSize: 20
            },
            activeTintColor: '#ffffff',
            inactiveTintColor: '#fff',


            itemsContainerStyle: {
                marginVertical: 1,
            },
            iconContainerStyle: {
                opacity: 1
            }
        },

        contentComponent: (props) => (

            <Root>
                <Container style={{backgroundColor: '#040d04'}}>


                    <Header style={{height: 100, backgroundColor: '#FF3447', flexDirection: 'row'}}>

                        <Image style={{
                            right: -2,
                            width: windowWidth * 0.15,
                            height: windowHeight * 0.15, marginTop: 10
                        }} source={headDerawer} resizeMode="contain">

                        </Image>

                        <View style={{marginTop: 20, marginLeft: 20}}>
                            <Text style={{color: '#fff', marginTop: 10, marginRight: 20, fontFamily: 'Iran'}}>
                                به چهل دزد خوش آمدي
                            </Text>


                            <Text style={{
                                color: '#fff',
                                marginTop: 10,
                                marginRight: 20,
                                fontFamily: 'Iran',
                                fontSize: 18
                            }}>
                                WWW.40DOZD.COM
                            </Text>
                        </View>

                    </Header>
                    <Content>




                        <DrawerItems {...props} />
                        <View style={styles.lineStyle}/>

                        <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-around'}}>
                            <Image source={insta} style={{
                                width: 40,
                                height: 40,
                                borderRadius: 40 / 2,
                            }}/>
                            <Image source={tele} style={{
                                width: 30,
                                height: 30,
                                borderRadius: 30 / 2, marginTop: 5
                            }}/>

                        </View>
                        <View style={{alignItems: 'center', marginTop: 5}}>
                            <Text style={{fontSize: 12, color: '#7e7e7e', fontFamily: 'Sahel'}}>
                                کليه حقوق مادي و معنوي اين سايت متعلق به دزد هاست
                            </Text>
                        </View>


                    </Content>

                </Container>
            </Root>

        ),

        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',

    },
);


const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'white',
        margin: 10,
    }
});


*/

// noinspection JSAnnotator

const App = createStackNavigator(
    {
        Home: {

            screen: App1,


            navigationOptions: () => ({
                header: null,

            })
        },
        Main: {
            componentDidMount() {

                this._loadintialState().done();
            },

            screen: derawer,

            navigationOptions: () => ({


                header: null,
            }),

        },

        chehel: {
            screen: Last,
            navigationOptions: () => ({
                header: null,
            })
        },
        Last: {
            screen: Cart,
            navigationOptions: () => ({
                header: null,
            })
        },
        Register: {
            screen: Register,
            navigationOptions: () => ({
                header: null,
            })
        },
        Sabtenam: {
            screen: Sabtenam,
            navigationOptions: () => ({
                header: null,
            })
        },

        Tiket: {
            screen: Tiket,
            navigationOptions: () => ({
                header: null,
                tabBarPosition: 'top'
            })
        },


        Cart: {
            screen: Cart,
            navigationOptions: () => ({
                header: null,
            })
        },


        Tamas: {
            screen: tamas,
            navigationOptions: () => ({
                header: null,
            })
        },
        AboutOur: {
            screen: AboutOur,
            navigationOptions: () => ({
                header: null,
            })
        },


        Faramoshi: {
            screen: Faramoshi,
            navigationOptions: () => ({
                header: null,
            })
        },
        Splash: {

            screen: Splash,

            navigationOptions: () => ({
                header: null,
            })
        },
        ghavanin: {
            screen: ghavanin,
            navigationOptions: () => ({
                header: null,
            })
        },
        tarikh: {
            screen: tarikh,
            navigationOptions: () => ({
                header: null,
            })
        },
        sabt: {
            screen: sabt,
            navigationOptions: () => ({
                header: null,
            })
        },
        TozihTicket: {
            screen: TozihTicket,
            navigationOptions: () => ({
                header: null,
            })
        },


    })


export default App;
