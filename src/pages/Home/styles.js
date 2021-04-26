import {StyleSheet} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: '25%',
    position: 'absolute',
  },

  image: {
    width: scale(60),
    height: verticalScale(60),
    margin: 10,
  },

  element: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 30,
    marginTop: 35,
    borderWidth: 0.2,
    borderRadius: 8,
    borderColor: '#f0f8ff',
    width: scale(80),
    height: verticalScale(90),
    backgroundColor: '#f0f8ff',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 5,
    elevation: 10,
  },
  elementText: {
    marginTop: '8%',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default styles;
