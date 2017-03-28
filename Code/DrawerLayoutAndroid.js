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
} from 'react-native';
const width = Dimensions.get('window').width;

class AwesomeProject extends Component {

    constructor(props) {
        super(props);
    }

    navigationView() {
        return(
            <View style={{flex: 1, backgroundColor: 'skyBlue'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        )
    }

    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={width * 0.8}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={() => this.navigationView()}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
