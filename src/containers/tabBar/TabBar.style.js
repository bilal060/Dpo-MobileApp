import {StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../theme/colors';

const Styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: themes['light'].colors.tertiary,
    // position: 'relative',
   
    marginTop: -40,
  },
  absoluteFillObject: {
    backgroundColor: themes['light'].colors.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  tabInnerContainer: {
    alignItems:"center",
    alignContent:"center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 55,
  },
  spotLight: {
    height: '100%',
    alignItems: 'center',
  },
  spotLightInner: {
    height: 65,
    width: 65,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
  },
  tab: {
    paddingTop:10,

    flex: 1,
    // paddingVertical: 15,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignContent:'center',
    alignItems: 'center',
    height: 85,
    marginVertical: 5,
  },
  tabIcon: {
    width: 27,
    height: 27,
    
  },
  tabText: {
    fontSize: 8,
    color: themes['light'].colors.tertiary,
    fontFamily: themes.font.regular,
    marginTop: 5,
  },
});
export default Styles;
