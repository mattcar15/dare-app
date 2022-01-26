import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  TextInput,
  Button,
} from 'react-native';
import { Link } from "react-router-native";
import SInfo from "react-native-sensitive-info";

import { styles } from './LoginStyle';
import LinearGradient from 'react-native-linear-gradient';


export default function LoginScreen({ navigation }) {

  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")
  const [error, setError] = useState("")

  function login() {
    if (!validateEmail(email)) {
      setError("Invalid email.");
    } else {
      setError("");
      fetch('http://127.0.0.1:5000/sign-in', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            email: email,
            password: password,
          }
        )
      }).then(res => {
        if (res.status == 401) {
          setError("Invalid login credentials.");
        } else if (res.status == 500) {
          setError("Sorry, there was a server error. Please try again.");
        } else if (res.status != 200) {
          print(res.status)
          setError("Something went wrong.");
        } else {
          res.json()
          .then(async (data) => {
            if (!('jwt' in data)) {
              setError("Sorry, there was a response issue. Please try again.");
            } else {
              const jwt = data['jwt'];
              const savingJWT = await SInfo.setItem("jwt", jwt, {
                sharedPreferencesName: "dareAppPrefs",
                keychainService: "dareAppKeychain",
              });
              navigation.navigate('Auth');
            }
          })
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
          });
        }
      })
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./logoDark.png')}
      />
      <View style={styles.inputWrapper}>
        <TextInput style={styles.input}
                   onChangeText={onChangeEmail}
                   value={email}
                   placeholder="Email"
                   placeholderTextColor='#707070'
                   autoCapitalize='none'
                   autoCorrect={false}/>
        <TextInput style={styles.input} 
                   secureTextEntry={true}
                   onChangeText={onChangePassword}
                   value={password}
                   placeholder="Password"
                   placeholderTextColor='#707070'
                   autoCapitalize='none'
                   autoCorrect={false}/>
        { error.length > 0 &&
          <Text style={styles.error}>
            {error}
          </Text>
        }
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable style={({ pressed }) => [styles.loginButton,
                                            pressed ? styles.pressed : null,
                                            email.length == 0 || password.length == 0 ? styles.disabled : null]}
        onPress={login}
        disabled={email.length == 0 || password.length == 0}
        >
          <LinearGradient 
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            colors={['#3B70FF', '#C75F5F']}
            style={styles.loginGradient}
          >
            <Text style={styles.loginButtonText}>Sign In</Text> 
          </LinearGradient>
        </Pressable>
        <View style={styles.signUpButton}>
          <Pressable style={({ pressed }) => [pressed ? styles.pressed : null]} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpButtonText}>Don't have an account? Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}