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
      marginHorizontal: 20,
      borderWidth: 3,
    },
  
    green: {
      borderColor: '#4FBE34',
      color: '#4FBE34'
    },

    red: {
        borderColor: '#F75252',
        color: '#F75252'
    },
  
    pressed: {
      opacity: 0.8,
    },
  
    disabled: {
      opacity: 0.5,
    },

    topWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: '100%'
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

    buttonsSpacing: {
      marginBottom: 20
    },

    completeLabel: {
      textAlign: 'center',
      fontSize: 14,
      color: '#707070',
      marginBottom: 15,
    },

    submitText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '500',
        alignSelf: 'center',
    },

    cancelButton: {
        marginBottom: 20,
    },

    cancelText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
        alignSelf: 'center',
    },

});

export { styles }