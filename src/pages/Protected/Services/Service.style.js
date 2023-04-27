import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  headerTransparentStyle: {
    backgroundColor: themes.light.colors.tertiary,
  },
  headerTitleStyle: {
    flex: 1,
    fontSize: 24,
    marginRight: 30,
    fontFamily: themes.font.regular,
    color: themes.light.colors.fontLowColor,
    textAlign: 'center',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
    marginVertical: 30,
    backgroundColor: theme['light'].colors.tertiary,
  },
  heading: {
    color: theme.light.colors.fontColor,
    fontSize: 21,
    fontStyle: theme.font.bold,
  },
  subheading: {
    color: theme.light.colors.gray7,
    fontSize: 12,
    fontStyle: theme.font.regular,
  },
  selectText: {
    color: themes.light.colors.dark,
    fontSize: 15,
    fontWeight: '500',
    fontStyle: theme.font.semiBold,

    paddingVertical: 10,
    paddingBottom: 20,
  },
  selectTimeText: {
    color: theme.light.colors.dark,
    fontSize: 14,
    // paddingVertical:10,
    // paddingBottom:20,
  },
  selectTimeZoneText: {
    color: theme.light.colors.fontColor,
    fontSize: 12,
    fontStyle: theme.font.semiBold,
    // paddingVertical:10,
    // paddingBottom:20,
  },
  eading: {
    color: theme.light.colors.shadow,
    fontStyle: theme.font.regular,
    fontSize: 12,
  },
  buttonStyle: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: theme['light'].colors.btnColor,
    borderWidth: 0,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  buttonText: {
    color: theme.light.colors.secondarydark,
    fontSize: 21,
    fontFamily: theme.font.bold,
  },
  iconStyle: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 5,
  },
  cardImg: {
    width: width * 0.8,
    height: height * 0.2,
  },
  sheduleCard: {
    marginVertical: 20,
  },
  timeSlotView: {
    backgroundColor: themes['light'].colors.backgroundColorLighten,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    alignContent:"center",
    paddingHorizontal:10,
    paddingVertical:15,
    margin: 5,
    padding: 5,
    marginBottom:20,
  },
  timeSlot:{
    fontFamily:themes['font'].medium,
    fontSize:10,
    color:themes['light'].colors.dark
  },
  time:{
    fontFamily:themes['font'].semiBold,
    fontSize:14,
    color:themes['light'].colors.dark
  },
  prize:{
    fontFamily:themes['font'].medium,
    fontSize:14,
    color:themes['light'].colors.fontColor,
    marginVertical:20
  },
  timeSummary:{
    fontFamily:themes['font'].medium,
    fontSize:12,
    color:themes['light'].colors.dark
  }
});
