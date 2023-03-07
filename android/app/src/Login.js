import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {black, white, Purple, darkpurple, purp} from './colors';
import Field from './Field';
// import {auth} from '../../../firebase/firebase.config'; // sidra mistake give wrong path
// import {signInWithEmailAndPassword} from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase.config';


const Login = props => {
  const [Password, setPassword] = React.useState('');
  const [Email, setEmail] = React.useState('');




  //   const OnLoginPressed = (Email, Password) => {
  //     console.log(Email, Password);

  //     if (Email?.trim().length == 0) {
  //       Alert('Please enter email');
  //     } else {
  //       auth()
  //         .signInWithEmailAndPassword(Email, Password)

  //         .then(() => {
  //           console.log('Login Successfull');

  //           props.navigation.navigate('Dashboard');

  //           props.setLoginType('PASSWORD');
  //         })
  //         .catch(e => console.log('error', e));
  //     }
  //   };
  // for sign in you can use this code
  // const OnLoginPressed = (Email, Password) => {
  //   signInWithEmailAndPassword(auth, Email, Password)
  //     .then(() => {
  //       // Signed in
  //       // const user = userCredential.user;
  //       // ...
  //       console.log('Login Successfull');
  //       props.navigation.navigate('Dashboard');
  //       // props.setLoginType('PASSWORD');
  //     })
  //     .catch(error => {
  //       // const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log('error', errorMessage);
  //     });
  //   console.log('🚀 ~ file: Login.js:50 ~ OnLoginPressed ~ error:', error);
  // };

  const myFuncName = (Email, Password) => {
    signInWithEmailAndPassword(auth, Email, Password)
    .then(() => {
    props.navigation.navigate("Dashboard")
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("errorMessage:", errorMessage)
    });
  }

  return (
    <Background>
      <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
        <Text style={{fontSize: 15, color: black}}>Home</Text>
      </TouchableOpacity>

      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'black',
            fontSize: 52,
            fontWeight: 'bold',
            marginVertical: 10,
            marginRight: 25,
          }}>
          Login
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 70,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 40,
              color: purp,
              fontWeight: 'bold',
              marginRight: 30,
            }}>
            WELCOME BACK
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginRight: 30,
              marginBottom: 20,
            }}>
            Login to your account
          </Text>

          <Field
            placeholder="Email/Username"
            keyboardType={'email-address'}
            onChangeText={Email => setEmail(Email)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={Password => setPassword(Password)}
          />

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 19,
              marginBottom: 100,
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Forgotpassword')}>
              <Text
                style={{
                  color: purp,
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginRight: 10,
                  marginTop: 5,
                }}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <Btn
            textColor="white"
            bgColor={purp}
            btnLabel="Login"
            Press={() => myFuncName(Email, Password)}></Btn>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Don't have an account{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{
                  color: purp,
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginRight: 30,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
