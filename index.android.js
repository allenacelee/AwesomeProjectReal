/**
 * AwesomeProject
 * This is my test project!
 * @author liana
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    Dimensions,
    StatusBar,
} from 'react-native';
const width = Dimensions.get('window').width;
import DrawerInfo from './DrawerInfo';
import NavigationBar from './Pub/NavigationBar/NavigationBar';

class AwesomeProject extends Component {

    constructor(props) {
        super(props);
    }

    navigationView() {
        return (
            <DrawerInfo />
        )
    }

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={width * 0.8}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => this.navigationView()}>
                <NavigationBar
                    title="主页"
                    {...this.props}
                />
                <StatusBar
                    backgroundColor={'#222'}
                />
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
