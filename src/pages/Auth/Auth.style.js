import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 0,
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
  forgot: {
    marginTop: -30,
    paddingBottom: 20,
    alignSelf: 'flex-end',
    color: theme['light'].colors.fontColor,
  },
  card: {
    // borderRadius: 20,
    backgroundColor: theme['light'].colors.backgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  uploadProfile: {
    fontSize: 10,
    fontFamily: theme.font.light,
    textAlign: 'center',
    color: theme['light'].colors.gray4,
  },
  cardHeader: {
    alignSelf: 'center',
    marginBottom: 30,
    alignItems: 'center',
  },
  cardHeaderTitle: {
    fontSize: 35,
    fontFamily: theme.font.bold,
    textAlign: 'center',
    color: theme['light'].colors.dark,
    // marginBottom: 10,
  },
  cardHeaderSubTitle: {
    fontSize: 16,
    fontFamily: theme.font.light,
    color: theme['light'].colors.fontLowColor,
    marginBottom: 10,
    textAlign: 'center',
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
  googleAccount: {
    fontSize: 16,
    fontFamily: theme.font.bold,
    color: theme['light'].colors.dark,
  },
  cardBottomText2: {
    fontSize: 13,
    paddingLeft: 5,
    fontFamily: theme.font.semiBold,
    color: theme['light'].colors.fontColor,
  },
  profileView: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 10,
    backgroundColor: theme['light'].colors.lightenGray,
    borderWidth: 2,
    borderColor: '#C3D6DA',
    borderStyle: 'dashed',
    overflow: 'hidden',
  },

  orContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 10,
  },
  googleContainer: {
    backgroundColor: theme['light'].colors.lightenGray,
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 13,
    marginBottom: 10,
  },
  orContainerText: {
    fontSize: 20,
    fontFamily: theme.font.regular,
    color: theme['light'].colors.fontColor,
  },
  inputIcon: {
    marginRight: 10,
  },

  bottomButton: {
    marginBottom: 20,
  },

  otpContainer: {
    alignItems: 'stretch',
    marginBottom: 30,
  },
  IconImage: {
    height: 25,
    width: 25,
    marginHorizontal: 15,
  },

  otpInputView: {
    height: 62,
    marginBottom: 10,
    alignItems: 'stretch',
  },
  inputLeftIconButton: {
    widht: 20,
    height: 20,
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
    marginBottom: 10,
    fontSize: 10,
  },
  forgotText: {
    color: themes['light'].colors.primary,
    // marginTop: -10,
    fontFamily: themes.font.regular,
    fontWeight: '700',
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
  selectFileView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#C3D6DA',
    borderStyle: 'dashed',

    borderWidth: 2,

    borderRadius: 15,
    borderColor: theme['light'].colors.borderColor,
  },
  selectFile: {
    color: themes['light'].colors.gray4,
    fontFamily: themes.font.regular,
    fontWeight: '400',
  },
  uploadText: {
    color: themes['light'].colors.iconColor,
    fontFamily: themes.font.medium,
    fontSize: 16,
    fontWeight: '600',
  },

  bgHeadeStyle: {
    width: width * 1,
    height: height * 0.45,
    marginTop: -30,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  activeUser: {
    backgroundColor: themes['light'].colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  unactiveUser: {
    backgroundColor: themes['light'].colors.gray4,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  activeText: {
    color: themes['light'].colors.tertiary,
    fontFamily: themes.font.medium,
    fontSize: 16,
    fontWeight: '600',
  },
  unactiveText: {
    color: themes['light'].colors.primary,
    fontFamily: themes.font.medium,
    fontSize: 16,
    fontWeight: '600',
  },
  timeCountDown: {
    color: themes['light'].colors.primary,
    fontFamily: themes.font.medium,
    fontSize: 13,
    marginLeft: 5,
  },
  timeView: {
    color: themes['light'].colors.tertiary,
    borderWidth: 0,
    marginHorizontal: -10,
  },
  seconTime:{
    color: themes['light'].colors.iconColor,
    fontFamily: themes.font.medium,
    fontSize: 13,
  },
});
