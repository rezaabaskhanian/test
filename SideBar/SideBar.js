import React from "react";


import {
    AppRegistry,
    ImageBackground,
    StatusBar,
    Image,
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity
} from "react-native";


import {
    Container,
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Root,
    Header,
    Card,
    Right,
    Left,
    Body,
    CardItem
} from "native-base";

import FontAwesome, {Icons} from 'react-native-fontawesome';
import Last from "../Drawer/last";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const routes1 = [

     {
        navigate1: 'Ho',
        title: 'خانه',
        IconImage: Icons.home
    },
    {
    navigate1: 'po',
    title: 'پروفایل',
    IconImage: Icons.user
}, {
    navigate1: 'sa',
    title: 'ورود/ثبت نام',
    IconImage: Icons.userPlus
}, {
    navigate1: 'sab',
    title: 'سبد خرید',
    IconImage: Icons.cartPlus
},];

const routes2 = [{
    navigate1: 'ta',
    title: 'سوابق خرید',
    IconImage: Icons.newspaperO
}, {
    navigate1: 'ti',
    title: 'تیکت ها',
    IconImage: Icons.bookmark
}, {
    navigate1: 'da',
    title: 'درباره ما',
    IconImage: Icons.infoCircle
}, {
    navigate1: 'tam',
    title: 'تماس با ما',
    IconImage: Icons.headphones
}, {
    navigate1: 'ga',
    title: 'قوانین و مقررات',
    IconImage: Icons.list
},];


const headDerawer = require('../img/chehel.white.png')


const insta = require('../img/insta.png')
const tele = require('../img/teele.png')


export default class SideBar extends React.Component {
    onPress = () => {
        this.props.onPressItem(this.props.title);
    };

    render() {

        return (

            <Container style={{backgroundColor: '#303030'}}>


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
                    <View style={{flex: 1}}>
                        <FlatList
                            data={routes1}
                            keyExtractor={(item, index) => item.title}
                            renderItem={({item}) => (
                                <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>

                                    <Text style={{fontSize: 20, color: '#fff', fontFamily: 'Sahel',marginHorizontal:20,marginTop:5}}>
                                        <FontAwesome>
                                            {item.IconImage}
                                        </FontAwesome>
                                    </Text>
                                    <View style={{flex: 1, justifyContent: 'center',marginHorizontal:10,}}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate(item.navigate1)}>

                                            <Text style={{
                                                fontFamily: 'Sahel',
                                                color: '#fff'
                                            }}>{item.title}</Text>


                                        </TouchableOpacity>

                                    </View>
                                </View>
                            )}
                        />


                        <View style={styles.lineStyle}/>




                        <FlatList

                            data={routes2}
                            keyExtractor={(item, index) => item.title}
                            renderItem={({item}) =>
                                <View style={{flex: 1, flexDirection: 'row',marginTop:15}}>


                                    <Text style={{fontSize: 20, color: '#fff', fontFamily: 'Sahel',marginHorizontal:20,marginTop:5}}>
                                        <FontAwesome>
                                            {item.IconImage}
                                        </FontAwesome>
                                    </Text>
                                    <View style={{flex: 1, justifyContent: 'center',marginHorizontal:10,}}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate(item.navigate1)}>

                                            <Text style={{
                                                fontFamily: 'Sahel',
                                                color: '#fff'
                                            }}>{item.title}</Text>


                                        </TouchableOpacity>

                                    </View>
                                </View>

                            }
                        />


                        <View style={styles.lineStyle}/>
                        <View style={{flexDirection: 'row', marginTop: 10,justifyContent:'center',}}>






                            <Text style={{fontSize:25,color:'#fff',paddingLeft:25}}>
                                <FontAwesome>
                                    {Icons.telegram}
                                </FontAwesome>
                            </Text>

                            <Text style={{fontSize:25,color:'#fff'}}>
                                <FontAwesome >
                                    {Icons.instagram}
                                </FontAwesome>
                            </Text>


                        </View>
                        <View style={{alignItems: 'center', marginTop: 5}}>
                            <Text style={{fontSize: 12, color: '#7e7e7e', fontFamily: 'Sahel'}}>
                                کليه حقوق مادي و معنوي اين سايت متعلق به دزد هاست
                            </Text>
                        </View>
                    </View>

                </Content>

            </Container>


        )
            ;
    }
}


const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'white',
        margin: 10,
    }
});