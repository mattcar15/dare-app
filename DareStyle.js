import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
  
    card: {
      flex: 1,
      borderRadius: 20,
      margin: 20,
    },
  
    dareCard: {
      flex: 1,
      borderRadius: 20,
      margin: 20,
    },

    gradientCard: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    cardText: {
      color: 'white',
      fontSize: 35,
      textAlign: 'center',
      margin: 10,
      fontWeight: '500',
      alignSelf: 'center',
    },
  
    logo: {
      height: 50,
      width: 90,
      marginTop: 10,
      marginBottom: 10,
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  
    buttonsWrapper: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
    },
  
    choiceButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 20,
      elevation: 3,
      flex: 1,
      marginHorizontal: 10,
      borderWidth: 3,
    },
  
    red: {
      borderColor: '#F75252',
      color: '#F75252'
    },
  
    green: {
      borderColor: '#4FBE34',
      color: '#4FBE34'
    },
  
    pressed: {
      opacity: 0.8,
    },
  
    disabled: {
      opacity: 0.5,
    },
  
    skipsLabel: {
      textAlign: 'center',
      fontSize: 14,
      color: '#707070',
      marginVertical: 15,
    },
  
    streakGradient: {
      borderRadius: 50,
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: 20,
    },
  
    streakLabel: {
      textAlign: 'center',
      margin: 10,
      color: '#0F0F0F',
      fontWeight: '600',
      fontSize: 16,
      marginHorizontal: 20,
    },

    topWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'absolute',
      top: 0,
      width: '100%'
    },

    skipImage: {
      height: 25,
      width: 25,
      marginTop: 10,
      marginBottom: 10,
      resizeMode: 'contain',
      alignSelf: 'center',
    },

    acceptImage: {
      height: 28,
      width: 30,
      marginTop: 10,
      marginBottom: 10,
      resizeMode: 'contain',
      alignSelf: 'center',
    },

    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6,
    },

    createImage: {
      height: 23,
      width: 23,
      marginLeft: 20,
      resizeMode: 'contain',
    },

    menuImage: {
      height: 40,
      width: 40,
      marginRight: 10,
      resizeMode: 'contain',
    },

    buttonsSpacing: {
      marginBottom: 30
    },

    completeLabel: {
      textAlign: 'center',
      fontSize: 14,
      color: '#707070',
      marginBottom: 15,
    }
});

export { styles }