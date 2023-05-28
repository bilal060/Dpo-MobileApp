import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  
  container: {
    flexGrow: 1,
    paddingHorizontal: 0,
    backgroundColor: theme['light'].colors.backgroundColor,
  },
  memberCard:{
    width:width*0.42,
    flex:1,
    backgroundColor: theme['light'].colors.lightenGray,
    marginRight:12,
    paddingHorizontal:5,
    height:90,


    
  },
  activeMember:{
    fontSize:32,
    color: theme['light'].colors.iconColor,
    fontFamily:theme.font.semiBold,
    marginTop:12,
    paddingLeft:5


  },
  inputInnerContainerStyle:{
    backgroundColor: 'transparent',
    border:0,
    width:width*0.90,
    marginTop:10,
    marginLeft:-10

  },
  mainHeading: {
    color: theme.light.colors.iconColor,
    fontSize: 24,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
    marginTop:10,
  },
  manager:{
    fontSize:13,
    color: theme['light'].colors.grey4,
    fontFamily:theme.font.regular,
    paddingTop:10,
    paddingLeft:5

  },
  ProfileCard:{
    flex:1,
    marginVertical:10,
    height:90,
  },
  listHeader:{
    marginVertical:20
  },
  buttonStyle:{
    marginTop:height*0.40
  },
  buttonStyle1:{
    marginTop:height*0.02
  },
  registerBtn: {
    width: '80%',
    color: '#0064FA',
    backgroundColor: themes.light.colors.secondary4,
    borderWidth: 1,
    borderColor: '#0064FA',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
    // marginBottom: 10
  },
  loginText: {
    fontFamily: themes.font.regular,
    fontSize: 15,
    lineHeight: 16,
  },
})
