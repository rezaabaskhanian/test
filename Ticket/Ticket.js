import React, {Component} from 'react';

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
    Icon, Input, Item, Right, ListItem, Footer, Picker, Form, Label
} from 'native-base';


export default class bazbini extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }


    render() {
        return (
            <Container style={{backgroundColor: '#fff'}}>

                <Content>
                    <Card transparent>
                        <CardItem style={{marginTop: 20,}}>


                            <Form>

                                <Text style={{fontFamily:'Sahel',fontSize:12}}>
                                    موضوع:
                                </Text>

                                <Item regular style={{marginTop: 20}}>


                                    <Picker

                                        headerTitleStyle={{color: "#fff",fontSize:11}}
                                        textStyle={{ fontSize:11}}
                                        mode="dropdown"

                                        iosIcon={<Icon name="ios-arrow-down-outline"/>}
                                        placeholder="انتخاب موضوع"
                                        placeholderStyle={{color: "#bfc6ea"}}
                                        placeholderIconColor="#007aff"
                                        style={{width: '90%',}}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >

                                        <Picker.Item label="پیگیری مرسوله" value="key0"
                                                     style={{backgroundColor: '#82ff17',fontSize:11}}/>
                                        <Picker.Item label="پیشنهاد" value="key1" style={{fontSize:11}}/>
                                        <Picker.Item label="انتقاد یا شکایت" value="key2" style={{fontSize:11}}/>
                                        <Picker.Item label="تامین کنندگان یاپیشنهاد تامین کالا" value="key3" style={{fontSize:11}}/>
                                        <Picker.Item label="سایر" value="key4" style={{fontSize:11}}/>
                                        <Picker.Item label="مدیریت" value="key5" style={{fontSize:11}}/>
                                    </Picker>
                                </Item>

                                <Text style={{marginTop: 10,fontFamily:'Sahel',fontSize:12}}>
                                    متن تیکت:
                                </Text>
                                <Item regular style={{marginTop: 10, height: 130}}>

                                    <Input style={{fontFamily:'Sahel',fontSize:12}} placeholder='متن تیکت خود را در اینجا بنویسید'/>
                                </Item>

                                <Text style={{marginTop: 10,fontFamily:'Sahel',fontSize:12}}>
                                    الصاق عکس:
                                </Text>


                                <Item regular style={{marginTop: 10, height: 50}}>

                                    <Input style={{fontFamily:'Sahel',fontSize:12}} placeholder='عکسی انتخاب نشده'/>

                                    <Button>

                                        <Text style={{color: '#fff',marginLeft:10,fontFamily:'Sahel',fontSize:12}}>انتخاب</Text>
                                    </Button>
                                </Item>


                            </Form>


                        </CardItem>
                    </Card>


                </Content>
                <Footer style={{backgroundColor:'#FF3447',marginTop:10}}>
                    <Button transparent style={{marginTop: 5, marginLeft: 15,}}>

                        <Text style={{color: '#fff',fontFamily:'Sahel'}}>ارسال پیام</Text>
                    </Button>
                </Footer>

            </Container>
        );
    }
}




