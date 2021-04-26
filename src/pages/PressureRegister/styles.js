import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 6,
  },

  formView: {
    marginTop: '1%',
    display: 'flex',
    flex: 3,
    alignItems: 'center',

    marginHorizontal: '25%',
  },

  formInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.7,
    width: scale(300),
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  Register: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: '30%',
  },

  dataTableView: {
    marginTop: '8%',
    display: 'flex',
    flex: 3,
  },

  ButtonRegister: {
    backgroundColor: '#00bfff',
    color: 'gray',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 40,
    height: verticalScale(40),
    width: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    backgroundColor: '#fffaf0',
    borderWidth: 0.2,
    borderRadius: 5,
    borderColor: 'gray',
    marginHorizontal: '10%',
    width: '80%',
    marginVertical: '10%',

    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },

    elevation: 55,
  },
  textContent: {
    margin: '2%',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'center',
  },

  horizontalScroll: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default styles;
