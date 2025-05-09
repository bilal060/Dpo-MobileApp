import {Dimensions, StyleSheet} from 'react-native';
import {themes as theme, themes} from '../../../../theme/colors';
const {width, height} = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: theme['light'].colors.tertiaryBackground,
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
  headerContainer: {
    marginVertical: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardHeading: {
    color: theme.light.colors.gray4,
    fontSize: 11,
    lineHeight: 11,
    fontFamily: theme.font.regular,
    fontWeight: '600',
  },
  mainHeading: {
    fontSize: 24,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
    marginTop:10,
    marginLeft:10,
    color:"#171D25"
  },
  inputInnerContainerStyle:{
    backgroundColor: 'transparent',
    border:0,
    width:width*0.9,
    marginTop:10

  },
  subHeading: {
    color: theme.light.colors.gray4,
    fontSize: 13,
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
  subHeading: {
    color: theme.light.colors.gray4,
    fontSize: 13,
    fontFamily: theme.font.regular,
    fontWeight: '600',
  },
  view: {
    color: theme.light.colors.primary,
    fontSize: 2,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
  },
  spaceTotal: {
    color: theme.light.colors.iconColor,
    fontSize: 13,
    fontFamily: theme.font.semiBold,
    fontWeight: '600',
  },
  list: {
    alignSelf: 'center',

    // marginBottom:-40,
    // marginVertical: 10,
    flexDirection: 'row',
    marginLeft: -5,
  },
  spacelist: {
    padding:10,
    width:width*0.92
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
    backgroundColor: theme.light.colors.tertiary,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
  },
  Calender: {
    backgroundColor: theme.light.colors.tertiary,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    marginBottom: 20,
  },
  mainContainer: {
    width: width * 0.88,
    // margin:2
  },
  mainPlaceContainer: {
    width: width * 0.9,
    marginLeft: -5,
    // marginLeft:-5
  },
  inputStyles: {
    marginHorizontal: 10,
  },
  profileCard: {
    marginHorizontal: 10,
    marginTop: 20,
    width: width * 0.9,
  },
  profieContainer: {
    backgroundColor: theme.light.colors.tertiary,
  },
  reviewDate: {
    color: theme.light.colors.gray4,
    fontSize: 10,
    fontFamily: theme.font.regular,
    fontWeight: '400',
  },
  reviews: {
    width: '31%',
    marginVertical: 10,
    marginHorizontal: 20,
    color: theme.light.colors.iconColor,
    fontSize: 12,
    fontFamily: theme.font.medium,
    fontWeight: '400',
    color: theme.light.colors.gray4,
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    height: 1,
    backgroundColor: theme.light.colors.gray3,
    marginHorizontal: 20,
    flex: 1,
    width: '31%',
  },
  rating: {
    marginRight: 5,
    color: theme.light.colors.gray4,
    fontSize: 14,
    fontFamily: theme.font.medium,
    fontWeight: '400',
  },
});
