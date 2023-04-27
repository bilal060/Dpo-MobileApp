import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../theme/colors';
const {width, height} = Dimensions.get('screen')
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: theme['light'].colors.backgroundColor,
  },

  header: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  headerLogo: {
    width: 200,
    height: 53,
  },

  style: {
    flex: 1,
  },
  forgot:{
    marginTop:-30,
    paddingBottom:20,
    alignSelf:'flex-end',
    color: theme['light'].colors.fontColor,

  },
  card: {
    // borderRadius: 20,
    backgroundColor: theme['light'].colors.backgroundColor,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  cardHeader: {
    alignSelf:"center",
    marginBottom: 30,
  },
  cardHeaderTitle: {
    fontSize: 32,
    fontFamily: theme.font.bold,
    color: theme['light'].colors.dark,
    // marginBottom: 10,
  },
  cardHeaderSubTitle: {
    fontSize: 15,
    fontFamily: theme.font.regular,
    color: theme['light'].colors.fontLowColor,
    marginBottom: 10,
  },

  cardBody: {
    marginBottom: 15,
  },

  cardBottomText: {
    fontSize: 13,
    fontFamily: theme.font.semiBold,
    color: theme['light'].colors.dark,
    textAlign: 'center',
    // marginTop: 12,
  },

  cardBottomText2: {
    fontSize: 13,
    paddingLeft:5,
    fontFamily: theme.font.semiBold,
    color: theme['light'].colors.fontColor,
  },

  orContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  orContainerText: {
    fontSize: 20,
    fontFamily: theme.font.regular,
    color: theme['light'].colors.fontColor,
  },

  bottomButton: {
    marginBottom: 20,
  },

  otpContainer: {
    alignItems: 'stretch',
    marginBottom: 30,
  },
  IconImage: {
    height: 30,
    width: 30,
    marginHorizontal:15
  },

  otpInputView: {
    height: 62,
    // width: '100%',
    marginBottom: 10,
    alignItems: 'stretch',
    // backgroundColor: 'red'
  },

  codeInputFieldStyle: {
    borderWidth: 1,
    borderColor: themes['light'].colors.secondary3,
    position: 'relative',
    fontSize: 20,
    fontFamily: themes.font.regular,
    color: themes['light'].colors.primary,
    borderRadius: 10,
    backgroundColor: themes['light'].colors.secondary3,
    height: 62,
    // marginHorizontal: 5,
    minWidth: 62,
    maxWidth: 62,
    width: 'auto',
    flex: 1,
  },
  continueText: {
    color: themes['light'].colors.gray3,
    alignSelf: 'center',
    marginTop: 10,
  },
  changePassText: {
    color: themes['light'].colors.shadow,
    alignSelf: 'center',
    marginTop: -30,
    marginBottom:10,
    fontSize:10,
  },
  forgotText: {
    color: themes['light'].colors.fontColor,
    marginTop: -10,
  },

  codeInputHighlightStyle: {
    borderColor: themes['light'].colors.secondary,
    borderWidth: 2,
    color: themes['light'].colors.fontColor,
  },

  linkButtonContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },

  linkButtonWithIcon: {
    flexDirection: 'row',
  },
  linkButtonText: {
    fontSize: 14,
    color: themes['light'].colors.lightGray,
    fontFamily: themes.font.regular,
    marginRight: 5,
  },
  linkButtonOtherText: {
    color: themes['light'].colors.fontColor,
    fontFamily: themes.font.medium,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(124, 128, 97, 0.7)',
    paddingTop: 200,
    paddingHorizontal: 20,
  },
  modalInnerContainer: {
    flex: 1,
    backgroundColor: theme['light'].colors.tertiary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  bgHeadeStyle: { width: width * 1, height: height * 0.45, marginTop: -30, paddingVertical: 10, paddingHorizontal: 0 }

});
