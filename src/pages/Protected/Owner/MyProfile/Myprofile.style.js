import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 0,
    backgroundColor: theme['light'].colors.tertiary,
  },
  subcontainer: {
    flexGrow: 1,
    paddingHorizontal: 0,
    backgroundColor: theme['light'].colors.primary,
  },
  profileName: {
    color: theme['light'].colors.iconColor,
    fontSize: 20,
    fontFamily: theme.font.bold,
    textAlign: 'left',
    lineHeight: 18,
    marginTop: 10,
    paddingTop:5,
    letterSpacing: 0.5,
  },
  profileEmail: {
    color: theme['light'].colors.gray4,
    fontSize: 12,
    fontFamily: theme.font.light,
    textAlign: 'center',
    lineHeight: 12,
    marginTop: 5,
    letterSpacing: 0.5, 
  },
  profileContact: {
    color: theme['light'].colors.dark,
    fontSize: 12,
    fontFamily: theme.font.medium,
    textAlign: 'center',
    lineHeight: 12,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  ProfileCard: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 8,
    alignItems: 'center',
  },
  messageName: {
    color: theme['light'].colors.iconColor,
    fontSize: 16,
    fontFamily: theme.font.medium,
    lineHeight: 16,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  logout: {
    color: theme['light'].colors.danger,
    fontSize: 16,
    fontFamily: theme.font.semiBold,
    lineHeight: 16,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  title: {
    color: theme['light'].colors.dark,
    fontSize: 16,
    fontFamily: theme.font.semiBold,
    lineHeight: 16,
    marginTop: 5,
    letterSpacing: 0.5,
    marginVertical: 10,
  },
  headerTransparentStyle:{
    backgrounColor:"red"
  },
  answer: {
    color: theme['light'].colors.dark,
    fontSize: 13, 
    fontFamily: theme.font.light,
    lineHeight: 13,
    marginTop: 5,
    letterSpacing: 1,
    marginVertical: 10,
  },
  headerTitleText:{
    color:theme['light'].colors.dark
  },
  card: {
    // borderRadius: 20,
    backgroundColor: theme['light'].colors.tertiary,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginBottom:50

  },
  buttonStyle: {
    marginTop: height * 0.05,
    marginVertical: 10,
  },
  spaceCancelBtn: {
    backgroundColor: themes['light'].colors.secondary3,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  spaceSaveBtn: {
    marginHorizontal: 10,
  },
  buttonText: {
    color: themes['light'].colors.primary,
  },
  questionTitle: {
    color: theme['light'].colors.dark,
    fontSize: 14,
    fontFamily: theme.font.semiBold,
    lineHeight: 14,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  content:{
     color: "#A3A3A3",
    fontSize: 12,
    fontFamily: theme.font.light,
    lineHeight: 14,
    marginTop: 5,
    letterSpacing: 0.5,
  },
  containerStyles:{
    flex:1,
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    padding:10
  },
  myStyle2:{
    height:15,
    width:15
  }
});
