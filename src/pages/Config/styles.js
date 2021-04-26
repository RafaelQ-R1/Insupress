import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: 'red',
    height: verticalScale(50),
    width: scale(150),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0.2,
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#f0f8ff',
    shadowOpacity: 5,
    elevation: 20,
    marginVertical: '5%',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  Title: {
    textDecorationLine: 'underline',
    fontSize: 21,
    fontWeight: 'bold',
  },
  titleView: {
    flex: 1,
  },
  optionsView: {
    flex: 2,
  },
});

export default styles;
