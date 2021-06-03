import React, {Component} from 'react'
import { 
    StyleSheet,
    View, 
    Image,
    Dimensions,
    Alert

} from 'react-native'

export default class Comments extends Component{
    render(){
        let view = null
        if(this.props.comments){
            view = this.props.comments.map((item, index) =>{
                return(
                    <View>

                    </View>
                )
            })
        }
    }
}

const style = StyleSheet.create({
    commentsContainer:{
        
    }
})

