import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e0ffff',
  },

  pageTitle: {
    color: '#5f9ea0',
    fontWeight: 'bold',
  },

  scrollView: {
    height: '92%',
  },

  textTitle: {
    marginBottom: '1%',
    textDecorationLine: 'underline',
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },

  itemBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom: '10%',
    marginTop: '5%',
  },

  textBox: {
    backgroundColor: '#fffaf0',
    borderWidth: 0.2,
    borderRadius: 5,
    borderColor: 'gray',

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
  },
  externaLink: {
    color: 'blue',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default styles;
