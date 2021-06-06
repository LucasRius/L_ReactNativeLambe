import React, {Component} from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

export default class Feed extends Component{
    state={
        posts:[{
            id:Math.random(),
            nickname: 'Maite Rios',
            email:'maite@maite.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments:[{
                nickname: 'Arthur Jorge',
                comments: 'Horrivel'
            },{
                nickname: 'Brenda',
                comments: 'So tabaia'
            }]
        },{
            id:Math.random(),
            nickname: 'Juliana Rios',
            email:'juliana@juliana.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments:[]
        }]
    }
    render(){
        return(
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) =>
                        <Post key={item.id} {...item} /> 
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }
})