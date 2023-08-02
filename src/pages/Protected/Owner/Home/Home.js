import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../../../../containers';

import {
  BookingCard,
  CList,
  CText,
  ProgressiveImage,
  SpaceCard,
} from '../../../../components';
import {Booking, Profile, filterIcon} from '../../../../assets/images';
import Styles from './Home.styles';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import DatePicker from 'react-native-modern-datepicker';
import {login, verifyOTP} from '../../../../redux/actions/Auth.action';
import {
  getSpacsss,
  get_ownerBooking,
} from '../../../../redux/actions/Root.Action';
import {reduxStateSelector} from '../../../../utils/selector';
import {BASE_URL_IMG} from '../../../../config/webservices';
import moment from 'moment';
import {Calendar} from 'react-native-calendars';

const width = Dimensions.get('screen').width;

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [spaces, setSpaces] = useState([]);
  const [ownerBooking, setOwnerBooking] = useState([]);

  console.log('🚀 ~ file: Home.js:35 ~ Home ~ spaces:', spaces);
  // const reduxState = useSelector(({auth, language, root}) => {
  //   console.log('🚀 ~ file: Home.js:260 ~ reduxState ~ auth:', auth);
  //   return {
  //     spaces: root?.userSpaces,
  //     userRole: auth?.user?.role,
  //     loading: root?.userSpacesLoading,
  //     userId: auth?.user?._id,
  //   };
  // });
  const {auth, root} = useSelector(reduxStateSelector);
  const {_id} = auth?.user || {};
  const {userSpaces, userSpacesLoading} = root || {};

  useEffect(() => {
    dispatch(getSpacsss(_id, callBack));
    dispatch(get_ownerBooking(_id, handleBookingCallBack));
    // dispatch(getAllBooking);
  }, []);

  const callBack = res => {
    console.log('🚀 ~ file: Home.js:276 ~ callBack ~ res:', res);
    setSpaces(res);
  };
  const handleBookingCallBack = res => {
    setOwnerBooking(res?.bookings);
    console.log('🚀 ~ file: Home.js:276 ~ handleBookingCallBack ~ res:', res);
  };
  const headerProps = {
    headerTitle: 'Home',
    backButtonIcon: false,
    ProgressiveImageHeader: true,
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Profile,
    rightPress: () => navigation.navigate('Profile'),
  };

  const renderItem = ({item}) => {
    console.log('🚀 ~ file: Home.js:74 ~ renderItem ~ item:', item);
    const data = item?.images?.[0]?.replace(/\\/g, '/');
    return (
      <SpaceCard
        mainContainer={{
          width: spaces?.length > 1 ? width * 0.75 : width * 0.85,
          alignSelf: 'center',
        }}
        item={item}
        name={item?.description}
        phone={item?.contact}
        ratePrize={item?.rate_day}
        address={item?.location?.address}
        img={`${BASE_URL_IMG}${data}`}
        onPress={() => navigation.navigate('SpaceDetails', {item})}
      />
    );
  };

  const renderBooking = ({item}) => {
    return (
      <BookingCard
        location={item?.spaceId?.location?.address}
        date={moment(item?.createdAt).format('LL')}
        contact={item?.userId?.phoneNo}
        fullName={item?.userId?.fullName}
        time={moment(item?.createdAt).startOf('hour').fromNow()}
        prize={item.price}
        eTime={item?.to}
        sTime={item?.from}
      />
    );
  };
  const barData = [
    {value: 500, label: 'Jan', frontColor: '#177AD5'},
    {value: 700, label: 'Feb', frontColor: '#177AD5'},
    {value: 630, label: 'Mar', frontColor: '#177AD5'},
    {value: 270, label: 'Apr', frontColor: '#177AD5'},
    {value: 520, label: 'May', frontColor: '#177AD5'},
    {value: 710, label: 'June', frontColor: '#177AD5'},
    {value: 180, label: 'July', frontColor: '#177AD5'},
    {value: 950, label: 'Aug', frontColor: '#177AD5'},
    {value: 800, label: 'Sep', frontColor: '#177AD5'},
    {value: 450, label: 'Oct', frontColor: '#177AD5'},
    {value: 830, label: 'Nov', frontColor: '#177AD5'},
    {value: 100, label: 'Dec', frontColor: '#177AD5'},
  ];

  
    // Dummy data for testing
    const dummyData = {
      "2023-08-01": {
        "title": "100",
        "description": "This is the first event on August 1st, 2023."
      },
      "2023-08-02": {
        "title": "50",
        "description": "This is the second event on August 2nd, 2023."
      },
      "2023-08-05": {
        "title": "40",
        "description": "This is the third event on August 5th, 2023."
      },
      "2023-08-15": {
        "title": "20",
        "description": "This is the fourth event on August 15th, 2023."
      }
    };

    const [dataFromAPI, setDataFromAPI] = useState({}); // State to store data from the dummyData object

  useEffect(() => {
    // Simulate API call and set dummyData in the state when the component mounts
    setDataFromAPI(dummyData);
  }, []);

  

  const isWeekend = (date) => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6;
  };


  const renderDay = ({date, state}) => {
    // const isweek =  isWeekend(date.dateString) 
    const dataForDay = dataFromAPI[date.dateString];

    const textStyle = {
      // Customize the text style based on whether it's a weekend or not
      color: state === "disabled" ? "#AAAAAA" : isWeekend(date.dateString) ?   '#0064FA'  : state === 'today' ?"#FFF" : '#171D25',
    };

    const lengthStyles ={
      color: state === "today" ? "#0064FA" :  '#FFF',
      backgroundColor: state === "today" ? "#FFF" :  'rgba(0,100,250 ,0.6)',


    }
    return (
      <View style={{width:42, height:60, paddingHorizontal:5,paddingHorizontal:0,  backgroundColor:state ==="disabled" ?  "#F4F4F4"  : state === 'today' ?"#0064FA" :  '#FFF' , }}>
        <CText  style={[Styles.day , textStyle ]}>{date?.day}</CText>
       {state !== "disabled"   &&  dataForDay &&   <CText  style={[Styles.totalLenght ,lengthStyles ]}>{dataForDay?.title}</CText>}

      </View>
    );
  };

  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}
      scrollView>
      <View style={Styles.container}>
        <CText style={Styles.mainHeading}>My Spaces</CText>
        <View style={GlobalStyle.row}>
          <View style={[GlobalStyle.row]}>
            <CText style={Styles.subHeading}>Total Spaces:</CText>
            <CText style={Styles.spaceTotal}>{spaces?.length}</CText>
          </View>
          <View>
            <CText style={Styles.view}>View All</CText>
          </View>
        </View>
        <CList
          style={Styles.list}
          horizontal
          data={spaces}
          extraData={spaces}
          // loading={reduxState.loading}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Spaces not found',
          }}
        />
        <View
          style={[
            GlobalStyle.row,
            {alignItems: 'center', alignContent: 'center'},
          ]}>
          <CText style={Styles.mainHeading}>Booking History</CText>

          <CText style={Styles.view}>View All</CText>
        </View>
        <CList
          style={Styles.list}
          data={ownerBooking}
          extraData={ownerBooking}
          // loading={reduxState.loading}
          renderItem={renderBooking}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Bookings not found',
          }}
        />
        <View
          style={[
            GlobalStyle.row,
            {alignItems: 'center', alignContent: 'center', marginVertical: 10},
          ]}>
          <CText style={Styles.mainHeading}>My Earnings</CText>

          <ProgressiveImage
            source={filterIcon}
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
          />
        </View>
        <View style={Styles.BarChart}>
          <BarChart
            width={330}
            data={barData}
            barWidth={14}
            isAnimated={true}
            height={150}
            maxValue={1000}
            initialSpacing={3}
            // stepHeight={10}
            // stepValue={6}
            // spacing={10}

            noOfSections={4}
            frontColor="lightgray"
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </View>
        <View style={Styles.Calender}>
          <Calendar
            style={
              {
                calendarWidth: 400
                // backgroundColor:'red'
                // borderWidth: 1,
                // borderColor: 'gray',
              }
            }
            initialDate={new Date()}
            hideArrows={true}
            
            dayComponent={renderDay}
            enableSwipeMonths={true}
          />
          {/* <DatePicker
            options={{
              backgroundColor: '#FFFmnmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmjjFF',
              textHeaderColor: '#707070',
              textDefaultColor: '#707070',
              selectedTextColor: '#fff',
              mainColor: '#0064FA',
              textSecondaryColor: '#707070',
              borderColor: 'rgba(122, 146, 165, 0.1)',
            }}
            current="2023-05-09"
            selected="2023-05-09"
            mode="calendar"
            minuteInterval={30}
            style={{borderRadius: 10}}
          /> */}
        </View>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
