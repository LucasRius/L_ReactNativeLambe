import React, {Component} from 'react'
import { 
    StyleSheet,
    View, 
    Image,
    Dimensions,
    Alert,
    Text

} from 'react-native'

export default class Comments extends Component{
    render(){
        let view = null
        if(this.props.comments){
            view = this.props.comments.map((item, index) =>{
                return(
                    <View style={styles.commentsContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comments}</Text>
                    </View>
                )
            })
        }
        return(
            <View style={styles.container}>
                {view}
            </View>
        )
    }

}

const styles = StyleSheet.create({
    commentsContainer:{
        flexDirection: 'row',
        marginTop:5
    },
    nickname:{
        marginLeft: 5,
        fontWeight: 'bold',
        color: "#444"
    },
    comment:{
       color:'#555'
    },
    container:{
        flex:1,
        margin:10,

    },

})

