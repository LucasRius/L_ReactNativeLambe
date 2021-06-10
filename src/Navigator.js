import React from 'react'
import {
    createBottomTabNavigator
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const MenuRoutes = {
    Feed:{
        name:'Feed',
        screen: Feed,
        navigationOptions:{
            title: 'Feed',
            tabBarIcon:({ intCOlor}) =>
        }
    }
}