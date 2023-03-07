import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {black, white, Purple, purp} from './colors';



const Home = (props) => {
    return(
<Background>
    <View>
    <Text style={{color:purp, fontSize:28, fontWeight:'bold', textAlign:'center', marginTop:200}}>
Welcome to gateway System

    </Text>
    </View>
   

    <View style={{marginHorizontal: 40, marginVertical:100, marginTop:50}}>
        <View style={{marginLeft:20}}>
        <Btn bgColor={black} textColor = 'white' btnLabel='Login' Press={() => props.navigation.navigate('Login') } />
        </View>
        <View style={{marginTop:30, marginLeft:20}}>
        <Btn bgColor={white} textColor = 'black' btnLabel='SignUp' Press={() => props.navigation.navigate('Signup')} />
        </View>
    </View>
</Background>
        
    );
}

const styles = StyleSheet.create({})

export default Home;