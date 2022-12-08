import React,{Component} from "react"
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"

export default class Postscreen extends Component{
    renderItem =({ item: post }) => {
        return <PostCard story={post} navigation={thiis.props.navigation}/>
      };
}

