import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Platform,
    Image
} from 'react-native'

import icon from '../../assets/imgs/icon.png'



export default class Header extends Component{
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.title}>Lambe lambe</Text>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb'
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title:{
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28
    }
})