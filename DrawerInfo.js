import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default class DrawerInfo extends Component{
    defaultProps = {}
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                {/*用于显示用户信息*/}
                <View>

                </View>
                {/*相应的操作*/}
                <View>

                </View>
            </View>
        )
    };
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#222',
    },
})
