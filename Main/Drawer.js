import React, {Component} from 'react'
import {StyleSheet, Text, View,Image} from 'react-native'


import Last from '../Drawer/last'
import Register from '../Drawer/Register'
import Sabtenam from '../Drawer/sabtenam'
import Cart from '../Drawer/Cart'
import Tiket from '../Ticket/Tickets'
import tamas from '../Drawer/tamas'
import AboutOur from '../Drawer/AboutOur'

import tarikh from '../Drawer/tarikhkharid'
import ghavanin from '../Drawer/ghavanin'
import Main from "./Main";
import {DrawerNavigator,createDrawerNavigator} from "react-navigation";

import SideBar from '../SideBar/SideBar'
import {Icons} from "react-native-fontawesome";

const derawer = createDrawerNavigator(
    {
       po: {screen: Sabtenam,navigationOptions:{title:'پروفایل'}},
        sa: {screen: Register,navigationOptions:{title:'ثبت نام'}},
        Ho: {screen: Main,navigationOptions:{title:'خانه'}},
        sab: {screen: Cart,navigationOptions:{title:'سبد خرید'}},
        ta: {screen: tarikh,navigationOptions:{title:'تاریخچه خرید'}},
        ti: {screen: Tiket,navigationOptions:{title:'تیکت ها'}},
        da: {screen: AboutOur,navigationOptions:{title:'درباره ما'}},
        tam: {screen: tamas,navigationOptions:{title:'تماس با ما'}},
        ga: {screen: ghavanin,navigationOptions:{title:'قوانین و مقررات'}},


    },
    {
        initialRouteName: 'Ho',
        drawerPosition:
            'right',

        contentOptions:
            {

                style: {
                    backgroundColor:'#c4c4c4',
                    flex:
                        1
                }
                ,
                itemStyle: {
                  //  borderBottomWidth: 1,
                  //  borderBottomColor:
                     //   '#d9d5dd',
                }
                ,
                labelStyle: {
                    fontSize: 14,
                    marginLeft:
                        40,
                }
                ,
                iconStyle: {
                    fontSize: 20
                }
                ,
                activeTintColor: '#ffffff',
                inactiveTintColor:
                    '#fff',
                itemsContainerStyle:
                    {
                        marginVertical: 1,
                    }
                ,
                iconContainerStyle: {
                    opacity: 1
                }
            },

        contentComponent: (props) => (

           <SideBar {...props}/>

        ),

        drawerOpenRoute:
            'DrawerOpen',
        drawerCloseRoute:
            'DrawerClose',
        drawerToggleRoute:
            'DrawerToggle',
    }
    ,
    );

export default derawer