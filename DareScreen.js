import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
  LayoutAnimation,
  Button,
  Alert,
} from 'react-native';

import { AnimatedGradient } from './Grad';

import { styles } from './DareStyle';
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

export default function DareScreen({ navigation }) {
  const isFocused = useIsFocused();

  const [skips, setSkips] = useState(3);
  const [streak, setStreak] = useState(0);
  const [inDare, setInDare] = useState(false);
  const [curDare, setCurDare] = useState("Loading...");
  const [userToken, setUserToken] = useState(null);
  const [dareID, setDareID] = useState(null);
  const [sVal, setSVal] = useState(1.0);
  const [eVal, setEVal] = useState(0.0);
  const [orientation, setOrientation] = useState(0)
  var sGrad = 1.0;
  var eGrad = 0.0;

  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);


  useEffect(async () => {
    const savingJWT = await SInfo.getItem("jwt", {
      sharedPreferencesName: "dareAppPrefs",
      keychainService: "dareAppKeychain",
    });

    if (!savingJWT) {
      navigation.navigate('Login');
    } else {
      setUserToken(savingJWT);

      fetch(URL + '/user', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Token': savingJWT,
        }
      }).then(res => {
        if (res.status != 200) {
          Alert.alert(
            "Unable to Connect",
            "There is an issue with our server. You will be logged out. Please try logging back in.",
            [
              {
                text: "Ok",
                onPress: () => logout(),
                style: "Ok"
              }
            ]
          );
        } else {
          res.json()
          .then(async (data) => {
            if (!("streak" in data && "skips" in data)) {
              console.log("Sorry, there was a response issue. Please try again.");
            } else {
              setStreak(data['streak'])
              setSkips(data['skips'])
            }
            getNewDare();
          })
          .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
          });
        }
      })
    }
  }, [isFocused]);

  function skipDare() {
    setOrientation(orientation == 1 ? 0 : 1)
    fetch(URL + `/skip-dare/${dareID}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': userToken,
      }
    }).then(res => {
      if (res.status != 200) {
        console.log("Something went wrong in SKIP DARE.");
      } else {
        if (res.status != 200) {
          console.log("Something went wrong in SKIP DARE.");
        } else {
          setSkips(skips - 1);
          getNewDare();
        }
      }
    });
  }

  function completeDare() {
    fetch(URL + `/complete-dare/${dareID}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': userToken,
      }
    }).then(res => {
      if (res.status != 200) {
        console.log("Something went wrong in COMPLETE DARE.");
      } else {
        setStreak(streak + 1);
        setSkips(3);
        setInDare(false);
        getNewDare();
      }
    })
  }

  function failDare() {
    fetch(URL + `/fail-dare/${dareID}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Token': userToken,
      }
    }).then(res => {
      if (res.status != 200) {
        console.log("Something went wrong in FAIL DARE.");
      } else {
        setStreak(0);
        setSkips(3);
        setInDare(false);
        getNewDare();
      }
    })
  }

  function acceptDare() {
    setInDare(true);
  }

  function getNewDare() {
    fetch(URL + '/dare', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.status != 200) {
        console.log("Something went wrong.");
      } else {
        res.json()
        .then(async (data) => {
          if (!("id" in data && "text" in data)) {
            console.log("Sorry, there was a response issue. Please try again.");
          } else {
            setCurDare(data['text'])
            setDareID(data['id'])
          }
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
          throw error;
        });
      }
    })
  }

  function askLogout() {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        {
          text: "Logout",
          onPress: () => logout(),
          style: "Ok"
        }
      ]
    );
  }

  async function logout() {
    const deleteJWT = await SInfo.deleteItem("jwt", {
      sharedPreferencesName: "dareAppPrefs",
      keychainService: "dareAppKeychain",
    });
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={styles.container}>
      <DropShadow
        style={[styles.shadow, inDare ? styles.dareCard : styles.card]}
      >
        <AnimatedGradient 
          // start={{x: sVal, y: 1}}
          // end={{x: eVal, y: 0}}
          colors={['#C75F5F', '#3B70FF']}
          orientation={orientation == 1 ? orientation0 : orientation1}
          style={styles.gradientCard}
        >
          <View style={styles.topWrapper}>
            <Pressable style={({ pressed }) => [styles.createButton, pressed ? styles.pressed : null]} onPress={() => navigation.navigate('Create')}>
              <Image
              style={styles.createImage}
              source={require('./create.png')}
              />
            </Pressable>
            <Image
            style={styles.logo}
            source={require('./logo.png')}
            />
            <Pressable style={({ pressed }) => [styles.menuButton, pressed ? styles.pressed : null]} onPress={askLogout}>
              <Image
              style={styles.menuImage}
              source={require('./logout.png')}
              />
            </Pressable>
          </View>
          <Text style={styles.cardText}>{curDare}</Text>
        </AnimatedGradient>
      </DropShadow>
      {!inDare &&
        <View >
          <DropShadow style={[styles.buttonsWrapper, styles.shadow]}>
            <Pressable style={({ pressed }) => [styles.choiceButton, styles.red, pressed ? styles.pressed : null, skips <= 0 ? styles.disabled : null]} onPress={skipDare} disabled={skips <= 0}>
              <Image
                style={styles.skipImage}
                source={require('./skip.png')}
                />
              </Pressable>
            <Pressable style={({ pressed }) => [styles.choiceButton, styles.green, pressed ? styles.pressed : null]} onPress={acceptDare}>
              <Image
                style={styles.acceptImage}
                source={require('./accept.png')}
              /> 
            </Pressable>
          </DropShadow>
          <Text style={styles.skipsLabel}>
            Skips Left: {skips}/3
          </Text>
          <LinearGradient 
            start={{x: 1, y: 1}}
            end={{x: 0, y: 0}}
            colors={['#FCE21A', '#FFC400']}
            style={styles.streakGradient}
          >
            <Text style={styles.streakLabel}>{streak} Dare Streak</Text>
          </LinearGradient>
        </View>
      }
      {inDare &&
        <View>
          <Text style={styles.completeLabel}>
            Did you complete the dare?
          </Text>
          <DropShadow style={[styles.buttonsWrapper, styles.shadow, styles.buttonsSpacing]}>
          <Pressable style={({ pressed }) => [styles.choiceButton, styles.red, pressed ? styles.pressed : null]} onPress={failDare}>
            <Image
            style={styles.skipImage}
            source={require('./skip.png')}
            />
          </Pressable>
          <Pressable style={({ pressed }) => [styles.choiceButton, styles.green, pressed ? styles.pressed : null]} onPress={completeDare}>
            <Image
            style={styles.acceptImage}
            source={require('./accept.png')}
            />
          </Pressable>
        </DropShadow>
        </View>
      }
    </SafeAreaView>
  );
}