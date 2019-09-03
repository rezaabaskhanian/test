import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    ImageBackground,
    Dimensions,
    FlatList,
    AppRegistry,
    View,
    Button,
    AsyncStorage
} from 'react-native';




import {
    Container,
    Header,
    Content,
    Text,
    Body,

    Left,
    Title,
    Card,
    CardItem,
    Icon, Input, Item, Right, Radio, Footer, Picker, Form, Label, CheckBox,
} from 'native-base';

export default class cart extends Component {

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item');


        console.log(item)
        console.log('reza')
        let form_data=[];
        form_data['cart_product_id']=1;
        form_data['count']=345;
        // send(form_data)
        ///////////////////////////////////
        //send
        let request=[];
        request['data']=form_data;
        request['header']=form_data;

        console.log(JSON.stringify(request))
        return(

            <View>
                <Text style={{color:'#ff2525'}}>
                    نمایش محصول
                </Text>

                <View style={{marginTop:10}}>

                    <Text> اسم جنس : {item.name} </Text>
                    <Text>  رنگ : {item.color}</Text>

                    <Text>  سایز : {item.size}</Text>
                    <Text>   تعداد : {item.count}</Text>


                </View>


                <Button title='خرید' onPress={() => this.sendProductId} />
            </View>



        )

    }

    async sendProductId (){
        consle.log('reza')
        let form_data=[];
        form_data['cart_product_id']=1;
        form_data['count']=345;
        // send(form_data)
        ///////////////////////////////////
        //send
        let request=[];
        request['body'][data]=form_data;
        request['header']=form_data;

        consle.log(JSON.stringify(request))

        let DEMO_TOKEN = await AsyncStorage.getItem('apiToken');
        fetch('http://nbcompany.ir/40cart/api/order', {
            method: "POST",
            headers: {
                Authorization: 'Bearer ' + DEMO_TOKEN,
                Accept: 'application/json',
                'Content-Type': 'application/json',
                body:JSON.stringify({
                    reaquest

                })
            }
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)

            })
            .catch((error) => {
                console.log(error);
            })
    }
        }