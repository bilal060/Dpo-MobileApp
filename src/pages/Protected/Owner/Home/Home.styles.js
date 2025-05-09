import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    flex:1,
  
    paddingHorizontal: 20,
    paddingVertical:20,
    backgroundColor: theme['light'].colors.tertiaryBackground,
  },
  headerContainer: {
    marginVertical: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainHeading: {
    color: theme.light.colors.iconColor,
    fontSize: 24,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
    marginTop:10
  },
  subHeading: {
    color: theme.light.colors.gray4,
    fontSize: 16,
    fontFamily: theme.font.regular,
    fontWeight: '600', 

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
    alignSelf:'center',
    // marginBottom:-40,
    // marginVertical: 10,
    flexDirection: 'row',
    marginLeft:-10
  },
  menu: {
    backgroundColor: 'rgba(188,217,174,0.3)',
    alignItems:'center', 
    height: 90,
    width: 90,
    justifyContent: 'center',
    borderRadius: 32,
    marginTop: 40,
    marginHorizontal: 30,
  },
  menuName:{
    color: theme.light.colors.secondary2dark,
    fontSize: 16,
    fontFamily: theme.font.regular,
    fontWeight: '400',
    marginBottom:40,
  },
  BarChart:{
    backgroundColor: '#FFF',
    padding:10,
    overflow:'hidden',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
  }, 
  Calender:{
    backgroundColor: '#FFF',
    padding:10,
    overflow:'hidden',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    marginBottom:20
  },
  bookingCard: {
    backgroundColor: theme['light'].colors.tertiary,
    elevation:5,
    width: width * 0.415,
    margin: 8,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height:70,
    paddingVertical: 10,
    paddingHorizontal: 10,
    padding: 10,
    // alignSelf:"center"
  },
  cardHeading: {
    color: theme.light.colors.gray4,
    fontSize: 11,
    lineHeight: 11,
    fontFamily: theme.font.regular,
    fontWeight: '600',
  },
  cardHeading: {
    color: theme.light.colors.gray4,
    fontSize: 11,
    lineHeight: 11,
    fontFamily: theme.font.regular,
    fontWeight: '600',
  },
  cardValue: {
    color: theme.light.colors.iconColor,
    fontSize: 16,
    lineHeight: 16,
    paddingTop:5,
    fontFamily: theme.font.semiBold, 
    fontWeight: '600',
  },
 
});
