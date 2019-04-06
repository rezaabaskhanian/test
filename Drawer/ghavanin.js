import React, {Component} from 'react';
import {Image, Dimensions, ImageBackground,View} from 'react-native'
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
    Icon, Input, Item, Right, Thumbnail, Form, Label,Accordion,
} from 'native-base';


import FontAwesome, {Icons} from 'react-native-fontawesome';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const seke = require('../img/Picture18.png')



const dataArray1 = [
    { title: "سوالات متداول در سایت اینجا قرار می گیرد", content: "" },
];
const dataArray2 = [
    { title: "سوالات متداول در سایت اینجا قرار می گیرد", content: "" },
];
const dataArray3 = [
    { title: "سوالات متداول در سایت اینجا قرار می گیرد", content: "" },
];

export default class tamas extends Component {

    _renderHeader(item, expanded) {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center" ,
                backgroundColor: "#e3e4ed" }}>
                <Text style={{ fontWeight: "600",color:'#343434',fontFamily:'Sahel' }}>
                    {" "}{item.title}
                </Text>
                {expanded
                    ? <Icon style={{ fontSize: 18,color:'red' }} name="remove-circle" />
                    : <Icon style={{ fontSize: 18,color:'red' }} name="add" />}
            </View>
        );
    }
    _renderContent(item) {
        return (
            <Text
                style={{
                    backgroundColor: "#e3e4ed",
                    padding: 10,
                    fontStyle: "italic",
                    fontFamily:'Sahel'
                }}
            >
                {item.content}
            </Text>
        );
    }






    render() {
        return (
            <Container>


                <Content >
                        <CardItem >
                            <Left>
                                <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                                    <Icon style={{margin: 5, fontSize: 30, textAlign: 'left', color: '#dfdfdf'}}
                                          name={'menu'}/>
                                </Button>

                            </Left>

                            <Right>
                                <Text style={{fontSize: 20, color: 'black',fontFamily:'Sahel'}}>
                                    قوانین و مقررات
                                </Text>
                            </Right>


                        </CardItem>



                    <Card>


                        <CardItem cardBody>
                            <ImageBackground source={seke} style={{height: windowHeight / 2, width: null, flex: 1}}/>

                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem style={{marginTop:10}}>
                            <Text style={{fontFamily:'Sahel'}}>
                                تو دنیای دزدها فقط یه قانون وجود داره!،
                                «دزدی که از دزد بزنه شاه دزده»
                                بیا بدزد و ببر که تو سایت ما دزدی ، پیگرد قانونی نداره.
                            </Text>
                        </CardItem>


                        <CardItem bordered >
                            <Accordion
                                dataArray={dataArray1}
                                animation={true}
                                expanded={true}
                                renderHeader={this._renderHeader}
                                renderContent={this._renderContent}
                            />
                        </CardItem>
                        <CardItem bordered >
                            <Accordion
                                dataArray={dataArray2}
                                animation={true}
                                expanded={true}
                                renderHeader={this._renderHeader}
                                renderContent={this._renderContent}
                            />
                        </CardItem>

                        <CardItem bordered >
                            <Accordion
                                dataArray={dataArray3}
                                animation={true}
                                expanded={true}
                                renderHeader={this._renderHeader}
                                renderContent={this._renderContent}
                            />
                        </CardItem>

                    </Card>

                </Content>
            </Container>
        )
    }
}