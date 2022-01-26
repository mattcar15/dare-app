import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import { useIsFocused } from "@react-navigation/native";
import SInfo from "react-native-sensitive-info";


export default function AuthScreen({ navigation }) {
  const isFocused = useIsFocused();

  useEffect(async () => {
    const gettingJWT = await SInfo.getItem("jwt", {
      sharedPreferencesName: "dareAppPrefs",
      keychainService: "dareAppKeychain",
    });
    if (gettingJWT != null) {
      navigation.navigate('Dare')
    } else {
      navigation.navigate('Login')
    }
  }, [isFocused])
  // 
  return (
    <SafeAreaView>
      <ActivityIndicator/>
    </SafeAreaView>
  );
}