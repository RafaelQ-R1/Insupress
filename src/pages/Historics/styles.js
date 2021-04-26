import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#00bfff',
    color: 'gray',
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 40,
    height: verticalScale(60),
    width: scale(140),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 70,
    fontWeight: 'bold',
    fontSize: 25,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
