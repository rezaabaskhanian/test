import React, {Component} from 'react';
import {
    Text,

    StyleSheet,
    TextInput, ImageBackground, Dimensions,Picker

} from 'react-native';
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
    Item,Icon,
} from 'native-base'
import Register from "./Register";

import FontAwesome, {Icons} from 'react-native-fontawesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const talaee = require('../img/c.ta.png')
const ghermez = require('../img/c.ghe.png')
const seke = require('../img/seke.ziyad.png')

const garfild = require('../img/garfild.jpg')

export default class Sabtenam extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pickerValueA: 'roz',
            pickerValueB: 'mah',
            pickerValueC: 'sal'
        };
    }


    render() {
        return (


            <Container style={{backgroundColor: '#f4f4f4'}}>


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
                                    حساب کاربری
                                </Text>
                            </Right>


                        </CardItem>

                    <Card>

                        <CardItem style={{justifyContent: 'center'}}>
                            <Button transparent style={{justifyContent: 'center', flexDirection: 'column', height: 80}}>
                                <Thumbnail source={garfild}/>


                                <Text style={{fontSize: 14, color: '#363636',fontFamily:'Sahel'}}>
                                    alireza60
                                </Text>
                            </Button>


                        </CardItem>

                        <CardItem >
                                <Text style={{fontSize: 13, color: '#2e2e2e',fontFamily:'Sahel'}}>
                                    نام:
                                </Text>
                            <Item rounded style={{marginLeft:65,width:windowWidth*0.6}}>
                                <Input style={{fontSize: 13,textAlign:'center', fontFamily:'Sahel'}} placeholder='رضا'/>
                            </Item>
                        </CardItem >

                        <CardItem >

                                <Text style={{fontSize: 13, color: '#2e2e2e',fontFamily:'Sahel'}}>
                                    نام خانوادگی:
                                </Text>
                            <Item rounded style={{marginLeft:20 ,width:windowWidth*0.6}}>
                                <Input style={{fontSize: 13, textAlign:'center',fontFamily:'Sahel'}}
                                       placeholder='عباسی'/>
                            </Item>


                        </CardItem>

                        <CardItem style={{justifyContent:'space-between',}}>

                                <Text style={{fontSize: 14, color: '#2e2e2e',fontFamily:'Sahel'}}>
                                    تاریخ تولد:
                                </Text>


<Item rounded>
                            <Picker
                                mode='dropdown'
                                selectedValue={this.state.pickerValueA}
                                style={{height: 50, width:60,}}
                                onValueChange={(itemValue) =>{
                                    this.setState({pickerValueA: itemValue})}}
                                itemStyle={{borderWidth:1,borderColor:'#2c2c2c'}}
                                textStyle={{fontSize:13}}

                                >
                                <Picker.Item label="روز" value="day" />
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                                <Picker.Item label="7" value="7" />
                                <Picker.Item label="8" value="8" />
                                <Picker.Item label="9" value="9" />
                                <Picker.Item label="10" value="10" />
                                <Picker.Item label="11" value="11" />
                                <Picker.Item label="12" value="12" />
                                <Picker.Item label="13" value="13" />
                                <Picker.Item label="14" value="14" />
                                <Picker.Item label="15" value="15" />
                                <Picker.Item label="16" value="16" />
                                <Picker.Item label="17" value="17" />
                                <Picker.Item label="18" value="18" />
                                <Picker.Item label="19" value="19" />
                                <Picker.Item label="20" value="20" />
                                <Picker.Item label="21" value="21" />
                                <Picker.Item label="22" value="22" />
                                <Picker.Item label="23" value="23" />
                                <Picker.Item label="24" value="24" />
                                <Picker.Item label="25" value="25" />
                                <Picker.Item label="26" value="26" />
                                <Picker.Item label="27" value="27" />
                                <Picker.Item label="28" value="28" />
                                <Picker.Item label="29" value="29" />
                                <Picker.Item label="30" value="30" />
                                <Picker.Item label="31" value="31" />
                            </Picker>
</Item>

                            <Item rounded>
                            <Picker
                                mode='dropdown'
                                selectedValue={this.state.pickerValueB}
                                style={{height: 50, width: 80}}
                                onValueChange={(itemValue) =>{
                                    this.setState({pickerValueB: itemValue})}}
                                itemStyle={{borderColor:'#2a2a2a',}}
                                textStyle={{fontSize:13}}
                                >
                                <Picker.Item label="ماه" value="mah" />
                                <Picker.Item label="فروردین" value="فروردین" />
                                <Picker.Item label="اردیبهشت" value="اردیبهشت" />
                                <Picker.Item label="خرداد" value="خرداد" />
                                <Picker.Item label="تیر" value="تیر" />
                                <Picker.Item label="مرداد" value="مرداد" />
                                <Picker.Item label="شهریور" value="شهریور" />
                                <Picker.Item label="مهر" value="مهر" />
                                <Picker.Item label="آبان" value="آبان" />
                                <Picker.Item label="آذر" value="آذر" />
                                <Picker.Item label="دی" value="دی" />
                                <Picker.Item label="بهمن" value="بهمن" />
                                <Picker.Item label="اسفند" value="اسفند" />
                            </Picker>

                            </Item>

                            <Item rounded>
                            <Picker
                                mode='dropdown'
                                selectedValue={this.state.pickerValueC}
                                style={{height: 50, width: 80,borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'}}
                                onValueChange={(itemValue) =>{
                                    this.setState({pickerValueC:itemValue})}}
                                itemStyle={{borderColor:'#2a2a2a',}}

                            >
                                <Picker.Item label="سال" value="sal" />
                                <Picker.Item label="1350" value="1350" />
                                <Picker.Item label="1351" value="1351" />
                                <Picker.Item label="1352" value="1352" />
                                <Picker.Item label="1353" value="1353" />
                                <Picker.Item label="1354" value="1354" />
                                <Picker.Item label="1355" value="1355" />
                                <Picker.Item label="1356" value="1356" />
                                <Picker.Item label="1357" value="1357" />
                                <Picker.Item label="1358" value="1358" />
                                <Picker.Item label="1359" value="1359" />
                                <Picker.Item label="1360" value="1360" />
                                <Picker.Item label="1361" value="1361" />
                                <Picker.Item label="1362" value="1362" />
                                <Picker.Item label="1363" value="1363" />
                                <Picker.Item label="1364" value="1364" />
                                <Picker.Item label="1365" value="1365" />
                                <Picker.Item label="1366" value="1366" />
                                <Picker.Item label="1367" value="1367" />
                                <Picker.Item label="1368" value="1368" />
                                <Picker.Item label="1369" value="1369" />
                                <Picker.Item label="1370" value="1370" />
                                <Picker.Item label="1371" value="1371" />
                                <Picker.Item label="1372" value="1372" />
                                <Picker.Item label="1373" value="1373" />
                                <Picker.Item label="1374" value="1374" />
                                <Picker.Item label="1375" value="1375" />
                                <Picker.Item label="1376" value="1376" />
                                <Picker.Item label="1377" value="1377" />
                                <Picker.Item label="1378" value="1378" />
                                <Picker.Item label="1378" value="1378" />
                                <Picker.Item label="1378" value="1378" />
                                <Picker.Item label="1379" value="1379" />
                                <Picker.Item label="1380" value="1380" />
                                <Picker.Item label="1381" value="1381" />
                                <Picker.Item label="1382" value="1382" />
                                <Picker.Item label="1383" value="1383" />
                                <Picker.Item label="1384" value="1384" />
                                <Picker.Item label="1385" value="1385" />
                                <Picker.Item label="1386" value="1386" />
                                <Picker.Item label="1387" value="1387" />
                                <Picker.Item label="1388" value="1388" />
                                <Picker.Item label="1389" value="1389" />
                            </Picker>
                            </Item>
                        </CardItem>

                        <CardItem>


                                <Text style={{fontSize: 14, color: '#2e2e2e', marginRight: 10,fontFamily:'Sahel'}}>
                                    ایمیل:
                                </Text>

                            <Item rounded style={{marginLeft:40 ,width:windowWidth*0.6}}>
                                <Input multiline style={{fontSize: 12, fontFamily:'Sahel'}}
                                       placeholder='majid1372@gmail.com'/>
                            </Item>


                        </CardItem>

                        <CardItem>
                                <Text style={{fontSize: 14, color: '#2e2e2e',fontFamily:'Sahel'}}>
                                    شماره تماس:
                                </Text>

                            <Item rounded style={{marginLeft:10 ,width:windowWidth*0.6}}>
                                <Input style={{fontSize: 12,textAlign:'center', fontFamily:'Sahel'}} placeholder='09391962414'/>
                            </Item>

                        </CardItem>


                        <CardItem>

                                <Text style={{fontSize: 14, color: '#2e2e2e',fontFamily:'Sahel'}}>
                                    آدرس:
                                </Text>

                            <Item rounded style={{marginLeft:45 ,width:windowWidth*0.6}}>
                                <Input multiline style={{fontSize: 11, height: 60,fontFamily:'Sahel'}}
                                       placeholder='راهنمایی 8 شیبشسیب شسیبشسیب شسیبشسیب شیسبشسیب شیبشسیب شسیبشسب شیب'/>
                            </Item>
                        </CardItem>


                    </Card>
                    <Card style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <CardItem style={{
                            backgroundColor: '#FDE8A7',
                            width: 180,
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>

                            <Thumbnail source={talaee}>

                            </Thumbnail>

                            <Text style={{fontFamily:'Sahel'}}>
                                کاپ شاه دزد
                            </Text>
                            <Text style={{fontFamily:'Sahel'}}>
                                10 کاپ
                            </Text>


                        </CardItem>
                        <CardItem style={{
                            backgroundColor: '#FDE8A7',
                            width: 180,
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}>

                            <Thumbnail source={ghermez}>

                            </Thumbnail>

                            <Text style={{fontFamily:'Sahel'}}>
                                کاپ دزدی
                            </Text >
                            <Text style={{fontFamily:'Sahel'}}>
                                15 کاپ
                            </Text>


                        </CardItem>


                    </Card>
                    <Card>

                        <CardItem style={{
                            backgroundColor: '#FDE8A7',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            margin: 5
                        }}>
                            <Thumbnail source={seke}

                            />


                            <Text style={{fontFamily:'Sahel'}}>
                                سود شما
                            </Text>
                            <Text style={{fontFamily:'Sahel'}}>
                                256,000 تومان
                            </Text>

                        </CardItem>

                    </Card>

                </Content>
            </Container>


        )
    }

}



