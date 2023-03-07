import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { black, white, Purple, purp } from './colors';
import Field from './Field';

const Forgotpassword = (props) => {
    return (

        <Background>

            <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
                <Text style={{ fontSize: 15, color: black }}>Home</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center' }}>
                <Image source={require("./assets/fp.png")} />


                <View style={{
                    backgroundColor: white,
                    height: 550, width: 460,
                    borderTopLeftRadius: 100,
                    marginTop: 0
                }}>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 27, marginTop: 10, color: purp, marginRight: 35, marginBottom: 20 }}>Reset your Password</Text>


                        <Field placeholder="Enter new Password" secureTextEntry={true} />
                        <Field placeholder="Confirm new Password" secureTextEntry={true} />

                        <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 19, marginBottom: 100 }}>

                        </View>
                        <Btn textColor='white' bgColor={purp} btnLabel='Reset Password' Press={() => {

                            alert("Password changed Succesfully")
                            props.navigation.navigate("Login")
                        }} />

                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={{ color: 'grey', fontSize: 17, fontWeight: 'bold', marginRight: 50, marginTop: 10 }}>Back to Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        </Background>
    );

}

export default Forgotpassword;