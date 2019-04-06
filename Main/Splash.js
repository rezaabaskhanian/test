import React from 'react';
import {StyleSheet, I18nManager, View, AsyncStorage, Dimensions, Image, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



import Main from './Main'



const styles = StyleSheet.create({
    image: {
        width: windowWidth,
        height: windowHeight,


        transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]


    }
});


const slides = [
    {
        key: '0',
        image: require('../img/1.png'),
        imageStyle: styles.image,
        backgroundColor: 'transparent',
    },

    {
        key: '1',
        image: require('../img/2.png'),
        imageStyle: styles.image,
        backgroundColor: 'transparent',
    },

    {
        key: '2',
        image: require('../img/3.jpg'),
        imageStyle: styles.image,
        backgroundColor: 'transparent',
    },

    {
        key: '3',
        image: require('../img/4.jpg'),
        imageStyle: styles.image,
        backgroundColor: 'transparent',
    },


    {
        key: '4',
        image: require('../img/5.jpg'),
        imageStyle: styles.image,
        backgroundColor: 'transparent',
    },
    {
        key: '5',
        image: require('../img/6.jpg'),
        imageStyle: styles.image,
        backgroundColor: 'transparent',
    },

];


export default class Splash extends React.Component {

    constructor() {
        super()

        this.state = {
            showRealApp: false
        }
    }
    savedata() {

        let user = 'majid'
        AsyncStorage.setItem('user', user);
    }

    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.props.navigation.navigate('Main');
        this.savedata();
        this.setState({showRealApp: true});

    }



    render() {

        if (this.state.showRealApp) {
            return <Main/>;
        } else {
            return <AppIntroSlider slides={slides}

                                   style={{transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}


                                   onDone={this. _onDone} onSkip={this. _onDone}
                                   buttonTextStyle={{color: '#050505', fontFamily: 'Sahel',}} skipLabel='رد شدن'
                                  showSkipButton={true}  doneLabel='تموم شد' hideNextButton={true}
                                   /> ;
        }
    }
}






