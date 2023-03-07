import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {black, white, Purple, purp} from './colors';
import Field from './Field';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/firebase.config';


const SignUp = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');// abc@gmail.com
  const [gender, setGender] = useState(''); // male
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  // const handleSignup = (val) => {
  //   createUserWithEmailAndPassword(auth, email, password, name, gender, contact, cpassword)
  // .then(() => {
  //   // Signed in 
  //   console.log("user created")
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log("🚀 ~ file: Signup.js:28 ~ handleSignup ~ errorMessage:", errorMessage)
  //   // ..
  // });
  // }

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password, cpassword)
    .then(() => {
console.log("user created!")
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("🚀 ~ file: Signup.js:40 ~ handleSignup ~ errorMessage:", errorMessage)
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
            marginTop: 5,
            marginRight: 50,
          }}>
          SignUp
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
            marginBottom: 20,
            marginRight: 50,
            fontWeight: 'bold',
          }}>
          Create a new Account
        </Text>

        <View
          style={{
            backgroundColor: 'white',
            height: 600,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 30,
            alignItems: 'center',
          }}>
          <Field
            placeholder="Name"
            keyboardType={'email-address'}
            onChangeText={name => setName(name)}
          />
          <Field
            placeholder="Email"
            keyboardType={'email-address'}
            onChangeText={val => setEmail(val)}
          />
          <Field placeholder="gender" onChangeText={val => setGender(val)} />
          <Field
            placeholder="Contact no"
            keyboardType={'number'}
            onChangeText={val => setContact(val)}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={val => setPassword(val)}
          />
          <Field
            placeholder=" Confirm Password"
            secureTextEntry={true}
            onChangeText={val => setCPassword(val)}
          />

          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 19,
              marginBottom: 10,
            }}></View>

          <Btn
            textColor="white"
            bgColor={purp}
            btnLabel="Create an account"
            Press={() => {
                handleSignup()
            //   alert('Account created');
            //   props.navigation.navigate('Login');
            }}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Already have an account{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  color: purp,
                  fontWeight: 'bold',
                  fontSize: 17,
                  marginRight: 30,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;
