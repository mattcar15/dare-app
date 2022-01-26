import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
  
    card: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      margin: 20,
    },
  
    logo: {
      height: 90,
      width: 200,
      marginTop: 10,
      marginBottom: 10,
      resizeMode: 'contain',
      alignSelf: 'center',
      flex: 1,
    },
  
    pressed: {
      opacity: 0.8,
    },
  
    disabled: {
      opacity: 0.5,
    },

    input: {
      height: 50,
      borderRadius: 20,
      paddingHorizontal: 20,
      borderColor: '#707070',
      borderWidth: 1,
      marginVertical: 10,
      color: 'black',
    },

    inputWrapper: {
      flex: 1,
      marginHorizontal: 30,
      justifyContent: 'center',
    },

    loginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      width: 140,
    },
  
    loginButtonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },

    buttonWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    loginGradient: {
      width: '100%',
      height: '100%',
      paddingVertical: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 20,
      height: 50,
    },

    signUpButton: {
      marginVertical: 25,
    },

    signUpButtonText: {
      fontSize: 15,
      color: '#0A97FF',
    },

    error: {
      color: 'red',
      fontSize: 15,
      marginVertical: 15,
      textAlign: 'center',
    }
});
  
export { styles }