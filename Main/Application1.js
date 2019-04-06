import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator, AsyncStorage, I18nManager
} from 'react-native';
import Splash from './Splash';
import Main from './Main';
import RNRestart from 'react-native-restart';

I18nManager.forceRTL(true);

;

export default class DigitalReceipt extends Component {


    constructor(props) {
        super(props);
I18nManager.allowRTL(true)
        if (!I18nManager.isRTL){

            RNRestart.Restart();
        }

        this.state = {firstLaunch: null};
    }
    componentDidMount() {



        AsyncStorage.getItem("alreadyLaunched").then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', '1');
                this.setState({firstLaunch: true});
                this.props.navigation.navigate('Splash');
            }
            else {
                this.setState({firstLaunch: false});
                this.props.navigation.navigate('Splash');
            }
        });

    }
    render() {

            return (
                true
            )
    }
}

AppRegistry.registerComponent('DigitalReceipt', () => DigitalReceipt);
