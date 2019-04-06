
/*
import React, {Component} from 'react';
import {Text, AsyncStorage, ScrollView, Dimensions,ImageBackground} from 'react-native';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Button,
    Body,
    Title,
    Right,
    Thumbnail,
    Left,
    Tab,
    Tabs,TabHeading,Footer,FooterTab,Card
} from 'native-base';


import Tab1 from '../Ticket/Ticket'
import Tab2 from '../Ticket/Tickets'



import FontAwesome, {Icons} from 'react-native-fontawesome';



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const head = require('../img/takhteh.jpg')

export default class register extends Component {



    state = {
        page: 0,
        scrollWithoutAnimation: true
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({ page: 1, scrollWithoutAnimation: false }), 1);
    }
    render() {
        return (
            <Container>
                <Header  hasTabs>



                    <Body>
                    <Title style={{fontSize: 20,marginLeft: 10,  fontFamily:'mor'}}>واحد پاسخگویی دزد ها </Title>

                    </Body>

                    <Right>

                        <Button transparent  onPress={() => this.props.navigation.goBack()}>
                            <Text style={{margin: 5, fontSize: 20, textAlign: 'right', color: 'white'}}>
                                <FontAwesome>{Icons.arrowLeft}</FontAwesome>

                            </Text>

                        </Button>
                    </Right>




                </Header >



                <Tabs page={this.state.page} scrollWithoutAnimation={this.state.scrollWithoutAnimation}>

                    <Tab heading={ <TabHeading><Text style={{color:'#fff',fontSize:16,fontFamily:'mor'}} > پیگیری مرسوله</Text></TabHeading>}>
                        <Tab2/>
                    </Tab>
                    <Tab heading={ <TabHeading><Text style={{color:'#fff',fontSize:16,fontFamily:'mor'}}> پاسخ های دریافتی</Text></TabHeading>}>
                        <Tab1 />
                    </Tab>

                </Tabs>



            </Container>
        )
    }


}
*/

import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator, createNavigationContainer } from 'react-navigation';

import Tab1 from '../Ticket/Ticket'
import Tab2 from '../Ticket/Tickets'





const TabNavigator = createMaterialTopTabNavigator({
    T1: {
        screen: Tab1,
        navigationOptions: () => ({
            header: null,

            title: 'تیکیت جدید',
            titleFontSize: 20,
            titleFontfamily:'Sahel',
            labelStyle: {
                fontFamily:'Sahel',
                fontSize: 18,
            },
            tabBarOptions: {
                activeBackgroundColor: '#c4c4c4',
                labelStyle: {
                    fontSize: 16,
                    fontFamily:'Sahel',
                },

                indicatorStyle: {
                    labelStyle: {
                        fontFamily:'Sahel',
                        fontSize: 16,
                    },
                    backgroundColor: '#cfcfcf',
                },
                tabStyle:{
                    backgroundColor:'#c2c2c2',
                    fontFamily:'Sahel',
                    fontSize: 16,
                }
            }
        })
    },
    T2: {
        screen: Tab2,
        navigationOptions: () => ({
            header: null,
            title: 'پاسخ های دریافتی',
            tabBarOptions: {
                activeBackgroundColor: '#f5f5f5',
                labelStyle: {
                    fontFamily:'Sahel',
                    fontSize: 16,
                },  indicatorStyle: {
                    labelStyle: {
                        fontFamily:'Sahel',
                        fontSize: 16,
                    },
                backgroundColor: '#cfcfcf',
            },
                tabStyle:{
                    backgroundColor:'#c2c2c2'
                }
            }
        })
    },
},{
    tabBarOptions: {

        style: {
            backgroundColor: '#7e3543',
            paddingRight: 10,
            paddingLeft: 10,
            borderTopWidth: 1,

        },
        showLabel: false,
        showIcon : true,
    },
},
);

export default createNavigationContainer(TabNavigator);
