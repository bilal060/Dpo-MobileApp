import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Container} from '../../../../containers';
import {
  BookingCard,
  CInput,
  CList,
  CText,
  ProgressiveImage,
  SpaceCard,
} from '../../../../components';
import {
  CNameIcon,
  Cancel,
  Cart,
  Earning,
  Events,
  FuelIcon,
  Google,
  Hub,
  Marketplace,
  Notification,
  Paid,
  Profile,
  Services,
  Total,
  filterIcon,
} from '../../../../assets/images';
import Styles from './AllBooking.style';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import DatePicker from 'react-native-modern-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBooking } from '../../../../redux/actions/Root.Action';
import moment from 'moment';

const AllBooking = ({navigation}) => {
  const type = useRef(null);
  const sort = useRef(null);
  const dispatch = useDispatch()
  const headerProps = {
    headerTitle: 'All Booking',
    backButtonIcon: false,
    ProgressiveImageHeader: true,
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Notification,
  };
  const reduxState = useSelector(({auth, language, root}) => {
    console.log('rootrootrootrootrootroot', root, auth);
    return {
      booking: root?.booking,
      loading: root?.bookingLoading,
    };
  });
  const userId = useSelector(state => state.auth?.user?._id);

  const listData = [
    {
      img: Total,
      title: 'Total Bookings',
      value: '205',
    },
    {
      img: Paid,
      title: 'Paid Bookings',
      value: '185',
    },
    {
      img: Cancel,
      title: 'Cancelled Bookings',
      value: '20',
    },
    {
      img: Earning,
      title: 'Total Earning',
      value: '$15,35',
    },
  ];

  useEffect(() => {
    getbooking();
  },[]);

  const getbooking = () => {
    dispatch(getAllBooking(userId))
  };
  const renderItem = ({item}) => {
    return (
      <View style={Styles.bookingCard}>
        <>
          <ProgressiveImage
            source={item.img}
            resizeMode="contain"
            style={{width: 35, height: 35, marfinRight: 10}}
          />
        </>

        <View style={{flexDirection: 'column', paddingLeft: 10}}>
          <CText style={Styles.cardHeading}>{item?.title}</CText>
          <CText style={Styles.cardValue}>{item?.value}</CText>
        </View>
      </View>
    );
  };
  const renderBooking = ({item}) => {
    console.log("🚀 ~ file: AllBooking.js:104 ~ renderBooking ~ item:", item)
    return <BookingCard location={item?.spaceId?.location?.address} date={moment(item?.createdAt).format('LL')} contact={item?.userId?.phoneNo} fullName={item?.userId?.fullName} time={moment(item?.createdAt).startOf('hour').fromNow()} prize={item.price} eTime={item?.to} sTime={item?.from}/>;
  };
  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}
      scrollView>
      <View style={Styles.container}>
        <CList
          style={Styles.sbookinglist}
          numColumns={2}
          //   horizontal
          // contentContainerStyle={[GlobalStyle.list, ]}
          data={listData}
          loading={reduxState.loading}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Store not found',
          }}
          // onRefreshLoading={reduxState.loading}
          // onRefreshHandler={() => onRefreshHandler()}
          // onEndReached={onEndReached}
          // onEndReachedThreshold={0.1}
          // maxToRenderPerBatch={10}
          // windowSize={10}
        />
        <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
          <CText style={Styles.mainHeading}>New Booking</CText>
        </View>

        <CList
          style={Styles.spacelist}
          // numColumns={2}
          //   horizontal
          contentContainerStyle={[GlobalStyle.list]}
          data={reduxState?.booking}
          // loading={reduxState.loading}
          renderItem={renderBooking}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Booking not found',
          }}
          // onRefreshLoading={reduxState.loading}
          onRefreshHandler={() => getAllBooking()}
          // onEndReached={onEndReached}
          // onEndReachedThreshold={0.1}
          // maxToRenderPerBatch={10}
          // windowSize={10}
        />
        <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
          <CText style={Styles.mainHeading}>Booking History</CText>
        </View>
        <CInput
          ref={type}
          placeholder={'Sort By'}
          // value={values.fuel}
          // onChangeText={handleChange('fuel')}
          // error={errors.fuel}
          sec
          inputInnerContainerStyle={Styles.inputInnerContainerStyle}
          type="view"
          leftIconNAme={FuelIcon}
          returnKeyType="next"
        />
        <CInput
          ref={type}
          placeholder={'Select Space Type'}
          // value={values.fuel}
          // onChangeText={handleChange('fuel')}
          // error={errors.fuel}
          inputInnerContainerStyle={Styles.inputInnerContainerStyle}
          sec
          type="view"
          leftIconNAme={FuelIcon}
          returnKeyType="next"
        />

        <CList
          style={Styles.spacelist}
          // numColumns={2}
          //   horizontal
          contentContainerStyle={[GlobalStyle.list]}
          data={[1, 22, 3]}
          // loading={reduxState.loading}
          renderItem={renderBooking}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Store not found',
          }}
          // onRefreshLoading={reduxState.loading}
          // onRefreshHandler={() => onRefreshHandler()}
          // onEndReached={onEndReached}
          // onEndReachedThreshold={0.1}
          // maxToRenderPerBatch={10}
          // windowSize={10}
        />
      </View>
    </Container>
  );
};

export default AllBooking;

const styles = StyleSheet.create({});
