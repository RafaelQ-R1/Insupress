import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  flatItem: {
    marginVertical: '4%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#f0f8ff',
    backgroundColor: '#f0f8ff',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation: 5,
    width: scale(270),
    height: verticalScale(90),
    borderRadius: 10,
  },

  textItem: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  defaulMessages: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 35, 20, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});

export default styles;
