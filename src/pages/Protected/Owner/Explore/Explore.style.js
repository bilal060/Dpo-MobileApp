import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: theme['light'].colors.tertiaryBackground,
  },
  headerContainer: {
    marginVertical: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerView: {
    alignItems: 'center',
    marginVertical: 10,
  },
  inputInnerContainerStyle: {
    backgroundColor: '#FFF',
    border: 0,
    width: width * 0.7,
    marginTop: 10,
    borderRadius: 50,
  },
  mainHeading: {
    color: theme.light.colors.iconColor,
    fontSize: 18,
    fontFamily: theme.font.regular,
    fontWeight: '800',
    marginTop: 10,
  },
  subHeading: {
    color: theme.light.colors.gray4,
    fontSize: 16,
    fontFamily: theme.font.regular,
    fontWeight: '600',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  view: {
    color: theme.light.colors.primary,
    fontSize: 16,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
  },
  spaceTotal: {
    color: theme.light.colors.iconColor,
    fontSize: 16,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
  },
  list: {
    // alignSelf: 'center',
    // marginBottom:-40,
    // marginHorizontal:10,
    marginVertical: 10,
    flexDirection: 'row',
    // marginLeft: -10,
  },
  menu: {
    backgroundColor: 'rgba(188,217,174,0.3)',
    alignItems: 'center',
    height: 90,
    width: 90,
    justifyContent: 'center',
    borderRadius: 32,
    marginTop: 40,
    marginHorizontal: 30,
  },
  menuName: {
    color: theme.light.colors.secondary2dark,
    fontSize: 16,
    fontFamily: theme.font.regular,
    fontWeight: '400',
    marginBottom: 40,
  },
  BarChart: {
    backgroundColor: '#FFF',
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
  },
  Calender: {
    backgroundColor: '#FFF',
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    marginBottom: 20,
  },
  icon: {
    width: 45,
    height: 45,
    alignSelf:"center"
    // justifyContent:"center",

    // alignItems:"center"
  },
  iconView:{
    marginHorizontal:10,
    // marginVertical:10,
    width:62,
    height:100,
    alignSelf:"center",
    alignContent:"center"
    // width:'10%'

    // justifyContent:"center",

  },
  iconTitle:{
    color: theme.light.colors.dark,
    fontSize: 13,
    fontFamily: theme.font.semiBold,
    fontWeight: '400',
    // width:'80%',
    textAlign:"center"
  }
});
