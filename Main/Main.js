import React, {Component} from 'react'
import {
    Container,
    Content,
    Body,
    Header,
    Icon,
    Left,
    Right,
    Thumbnail,
    Title,
    Button,
    Segment,
    Card,
    CardItem, Accordion, Badge, Footer, FooterTab,
} from 'native-base'

import {
    ImageBackground,

    ScrollView,
    Dimensions,
    View,
    Modal,
    TouchableHighlight,
    Alert, Text, YellowBox, AsyncStorage, Animated, I18nManager, FlatList, StyleSheet, Image,
} from 'react-native'

import {FlatGrid} from 'react-native-super-grid';


import * as Animatable from 'react-native-animatable';
import CountDown from 'react-native-countdown-component';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const garfild = require('../img/9-1.jpg')
export default class main extends Component {


    constructor() {
        super()
        this.state = {
            products:[],

        }
    }


    renderItem = ({item}) => {
        return (
            <View >
                <Text style={{color:'#262626'}}>
                    {item.name}
                </Text>
            </View>
        )
    }



    componentWillMount() {
AsyncStorage.getItem('apiToken',(error,result)=>
{console.log(result)})


        fetch('http://nbcompany.ir/40cart/api/product',{
            method: 'GET',
            headers: {
                Authorization:'Bearer bc281d4e539d57411cca0061573e4b7e18cd8fda',
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })

            .then((response)=>response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    products:responseJson.data
                })
            })
            .catch((error) => {
                console.log(error) ;

    })}


    render() {


        //YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

        return (
            <Container>

                <Header style={{backgroundColor: '#fff', justifyContent: 'space-around'}}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon style={{marginLeft: 15, fontSize: 30, textAlign: 'left', color: '#dfdfdf'}}
                                  name={'menu'}/>
                        </Button>
                    </Left>
                    <Body/>
                    <Right style={{flexDirection: 'row'}}>
                        <Icon style={{margin: 10, fontSize: 30, color: '#dfdfdf'}}
                              name={'search'}/>

                        <Thumbnail size={150} style={{marginTop: 10, width: 50, height: 50, borderRadius: 50 / 2}}
                                   source={garfild}/>
                    </Right>


                </Header>
                <Content>
                    <CardItem cardBody>
                        <ImageBackground source={require('../img/19240.png')}
                                         style={{height: 230, width: null, flex: 1, justifyContent: 'flex-end',}}>

                            <CountDown
                                style={{
                                    transform: [{
                                        scaleX: I18nManager.isRTL ? -1 : 1,
                                    }], textAlign: 'left', fontFamily: 'Sahel'
                                }}
                                size={25}
                                until={1000}
                                onFinish={() => alert('ماست ها رو جارو کنید')}
                                digitStyle={{
                                    backgroundColor: '#FFF', fontFamily: 'Sahel', transform: [{
                                        scaleX: I18nManager.isRTL ? -1 : 1,
                                    }]
                                }}
                                digitTxtStyle={{color: '#E89B5D', fontFamily: 'Sahel'}}
                                timeLabelStyle={{
                                    color: '#E89B5D', fontWeight: 'bold', fontFamily: 'Sahel', transform: [{
                                        scaleX: I18nManager.isRTL ? -1 : 1,
                                    }]
                                }}
                                separatorStyle={{color: '#E89B5D'}}
                                timeToShow={['H', 'M', 'S', 'D']}
                                timeLabels={{m: 'دقیقه', s: 'ثانیه', d: 'روز', h: 'ساعت'}}
                                showSeparator
                            >


                                <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
                                                 style={{textAlign: 'center'}}>

                                </Animatable.Text>
                            </CountDown>


                        </ImageBackground>


                    </CardItem>


                                       <View>

                                           <FlatList
                                               data={this.state.products}
                                               renderItem={this.renderItem}
                                               keyExtractor={(item,index)=>index.toString()}
                                           />

                    </View>



                </Content>

            </Container>
        )

    }

}




const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {


        justifyContent: 'space-around',
        borderRadius: 5,
        padding: 5,
        height: windowHeight * 0.4,

    },

    name: {
        textAlign: 'center',
        fontFamily: 'Sahel',
        fontSize: 13,
        color: '#3F4D8B',

    },
    imageUrl: {

        width: windowWidth * 0.25,
        height: windowHeight * 0.2,

    },
    itemimage: {
        alignItems: 'center'
    }
});


