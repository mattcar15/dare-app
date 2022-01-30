import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  Keyboard,
  TextInput,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';

import { AnimatedGradient } from './Grad';

import { styles } from './CreateStyle';
import LinearGradient from 'react-native-linear-gradient';

import SInfo from "react-native-sensitive-info";
import { useIsFocused } from "@react-navigation/native";
import DropShadow from "react-native-drop-shadow";

import { URL } from './setup';


const orientation0 = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
};

const orientation1 = {
  start: { x: 1, y: 0 },
  end: { x: 0, y: 1 }
};

export default function CreateScreen({ navigation }) {
  const isFocused = useIsFocused();

  const [curDare, setCurDare] = useState("");
  const [userToken, setUserToken] = useState(null);
  const [orientation, setOrientation] = useState(0)
  var sGrad = 1.0;
  var eGrad = 0.0;

  // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);


  useEffect(async () => {
    const savingJWT = await SInfo.getItem("jwt", {
      sharedPreferencesName: "dareAppPrefs",
      keychainService: "dareAppKeychain",
    });

    if (!savingJWT) {
      navigation.navigate('Login');
    } else {
      setUserToken(savingJWT);
    }
  }, [isFocused]);

  function submitDare() {
    fetch(URL + '/add-dare', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': userToken,
      },
      body: JSON.stringify(
        {
          text: curDare,
        }
      )
    }).then(res => {
      if (res.status != 200) {
        Alert.alert(
          "Unable to Create Dare",
          "There is an issue with our server. You will be logged out. Please try logging back in.",
          [
            {
              text: "Ok",
              onPress: () => null,
              style: "Ok"
            }
          ]
        );
      } else {
        Alert.alert(
          "Successful!",
          "Your dare has been created. It is now in review!",
          [
            {
              text: "Ok",
              onPress: () => navigation.navigate('Dare'),
              style: "Ok"
            }
          ]
        );
      }
    })
  }

  function deleteDare() {
    navigation.navigate('Dare')
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <DropShadow
            style={[styles.shadow, styles.dareCard]}
          >
              <AnimatedGradient 
                // start={{x: sVal, y: 1}}
                // end={{x: eVal, y: 0}}
                colors={['#C75F5F', '#3B70FF']}
                orientation={orientation == 1 ? orientation0 : orientation1}
                style={styles.gradientCard}
              >
                <View style={styles.topWrapper}>
                  <Image
                  style={styles.logo}
                  source={require('./logo.png')}
                  />
                </View>
                <TextInput style={styles.cardText}
                        onChangeText={setCurDare}
                        value={curDare}
                        placeholder="Your dare..."
                        placeholderTextColor='#FFFFFF88'
                        autoCapitalize='none'
                        textAlignVertical="top"
                        multiline
                        autoCorrect={false}/>
              </AnimatedGradient>
          </DropShadow>
          <View>
            <DropShadow style={[styles.buttonsWrapper, styles.shadow, styles.buttonsSpacing]}>
              <Pressable style={({ pressed }) => [styles.choiceButton, styles.green, pressed ? styles.pressed : null, curDare ? null : styles.disabled]} onPress={submitDare}>
                <Text style={[styles.submitText, styles.green]}>Submit Dare</Text>
              </Pressable>
            </DropShadow>
            <Pressable style={({ pressed }) => [styles.buttonsSpacing, styles.cancelButton, pressed ? styles.pressed : null]} onPress={deleteDare}>
                <Text style={[styles.cancelText, styles.red]}>Delete Dare</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
}