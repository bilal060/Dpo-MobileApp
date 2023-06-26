import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {Container} from '../../../../../containers';
import {
  BookingCard,
  CButton,
  CInput,
  CList,
  CText,
  DateTimePicker,
  ProfileCard,
  ProgressiveImage,
  SpaceCard,
} from '../../../../../components';
import {
  CNameIcon,
  CallColoured,
  Cart,
  Events,
  Google,
  Hub,
  LocationColored,
  Marketplace,
  Notification,
  Profile,
  Services,
  filterIcon,
} from '../../../../../assets/images';
import Styles from '../MySpace.style';
import GlobalStyle from '../../../../../assets/styling/GlobalStyle';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {BASE_URL, BASE_URL_IMG} from '../../../../../config/webservices';
import {useDispatch, useSelector} from 'react-redux';
import {createBooking} from '../../../../../redux/actions/Root.Action';
import moment from 'moment';
import { handleError } from '../../../../../utils/methods';

const SpaceDetails = ({navigation, route}) => {
  const reduxState = useSelector(({auth, language, root}) => {
    console.log('rootrootroot', root?.spaces, auth);
    return {
      spaces: root?.spaces,
      userRole: auth?.user?.role,
      loading: root?.bookingLoading,
      userId: auth?.user?._id,
    };
  });
  const dispatch = useDispatch();
  const {item} = route?.params || {};
  const isCustomer = reduxState?.userRole === 'Customer';

  const fullName = useRef(null);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [prize, updatedPrize] = useState();
  const headerProps = {
    headerTitle: 'My Space',
    backButtonIcon: false,
    ProgressiveImageHeader: true,
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Notification,
  };
  const listData = [
    {
      img: Services,
      title: 'Book A Service',
      onPress: () => navigation.navigate('Service'),
    },
    {
      img: Marketplace,
      title: 'Marketplace',
    },
    {
      img: Hub,
      title: 'HUB',
    },
    {
      img: Events,
      title: 'Events',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <SpaceCard mainContainer={Styles.mainContainer} imgData={listData} />
    );
  };
  const reverseSlot = () => {
    if(!startTime && !endTime){
      handleError("Please Select  time")
    } else if(!prize){
      handleError("Please enter price")

    } else {
      navigation.navigate('AddVechile', {
        price: prize,
        spaceId: item?._id,
        startTime:startTime,
        endTime:endTime
      });
    }
    

    // const sTIme = `${
    //   moment(startTime).format('LT').split(' ')[0].split(':')[0]
    // }${':'}${moment(startTime).format('LT').split(' ')[0].split(':')[1]}`;
    // const eTIme = `${
    //   moment(endTime).format('LT').split(' ')[0].split(':')[0]
    // }${':'}${moment(endTime).format('LT').split(' ')[0].split(':')[1]}`;

    // console.log('🚀 ~ file: SpaceDetails.js:89 ~ reverseSlot ~ sTIme:', sTIme);
    // const payload = {
    //   from: sTIme,
    //   to: eTIme,
    //   price: '200',
    //   spaceId: item?._id,
    //   userId: reduxState?.userId,
    // };
    // dispatch(createBooking(payload, handleBack));
  };
  const handleBack = res => {
    navigation.navigate('AddVechile');
    console.log('🚀 ~ file: SpaceDetails.js:98 ~ handleBack ~ res:', res);
  };
  const renderBooking = ({item}) => {
    return (
      <View style={[GlobalStyle.row, Styles.profileCard]}>
        <View>
          <ProgressiveImage
            source={Profile}
            resizeMode="contain"
            style={{width: 55, height: 55}}
          />
        </View>
        <View style={GlobalStyle.profileDetailsView}>
          <CText style={GlobalStyle.ProfileName}>{'Tony Stark'}</CText>
          <View style={[GlobalStyle.row, {flex: 1, alignItems: 'center'}]}>
            <ProgressiveImage
              source={LocationColored}
              resizeMode="contain"
              style={{width: 15, height: 15}}
            />
            <CText style={GlobalStyle.contact}>{'+1 012 3456 789'}</CText>
          </View>
          <View
            style={[
              GlobalStyle.row,
              {flex: 1, alignItems: 'center', paddingBottom: 20},
            ]}>
            <ProgressiveImage
              source={CallColoured}
              resizeMode="contain"
              style={{width: 15, height: 15}}
            />
            <CText style={GlobalStyle.contact}>{'09:00 am to 05:00 pm'}</CText>
          </View>
        </View>
      </View>
    );
  };

  const renderCustomerReviews = ({item}) => {
    return (
      <>
        <View style={[GlobalStyle.row, Styles.profileCard]}>
          <View>
            <ProgressiveImage
              source={Profile}
              resizeMode="contain"
              style={{width: 55, height: 55}}
            />
          </View>
          <View
            style={[
              GlobalStyle.profileDetailsView,
              {height: 60, borderBottomWidth: 0},
            ]}>
            <View style={[GlobalStyle.row, GlobalStyle.alignItems]}>
              <CText style={GlobalStyle.ProfileName}>{'Tony Stark'}</CText>
              <CText style={Styles.reviewDate}>{'12-05.2023'}</CText>
            </View>
            <View>
              <View style={Styles.ratingView}>
                <CText style={Styles.rating}>4.0</CText>
                <Rating type="star" ratingCount={5} imageSize={15} />
              </View>
            </View>
          </View>
        </View>
        <CText style={Styles.reviews}>
          {
            'Lorem ipsum dolor sit amet consectetur. Et in cursus egestas ipsum scelerisque cursus a vestibulum. Fringilla non semper purus vestibulum tortor faucibus. Pretium varius elit quis et.'
          }
        </CText>
        <View style={Styles.border} />
      </>
    );
  };
  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}
      scrollView>
      <View style={Styles.container}>
        {!isCustomer && (
          <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
            <CText style={Styles.mainHeading}>My Spaces</CText>

            <View style={[GlobalStyle.row]}>
              {/* <CText style={Styles.subHeading}>Total Spaces:</CText> */}
              {/* <CText style={Styles.spaceTotal}>205</CText> */}
            </View>
          </View>
        )}

        <SpaceCard
          name={item?.description}
          phone={item?.contact}
          ratePrize={item?.rate_day}
          address={item?.location?.address}
          img={`${BASE_URL_IMG}${item?.images?.[0]}`}
          mainContainer={Styles.mainPlaceContainer}
          imgData={item?.images}
        />
        {isCustomer ? (
          <View style={Styles.reverseSlot}>
            <CText style={Styles.selectTime}>Select Time</CText>
            <View style={Styles.timevIew}>
              <DateTimePicker
                mode="time"
                value={startTime}
                onChange={setStartTime}
                placeHolder={`00 : 00`}
                inputContainer={Styles.inputContainer}
                selectButtonText={Styles.selectButtonText}
                selectContainer={Styles.selectContainer}
              />
              <CText>To</CText>
              <DateTimePicker
                mode="time"
                value={endTime}
                onChange={setEndTime}
                placeHolder={'00 : 00'}
                inputContainer={Styles.inputContainer}
                selectButtonText={Styles.selectButtonText}
                selectContainer={Styles.selectContainer}
              />
            </View>
            <CInput
              placeholder={'Prize'}
              value={prize}
              onChangeText={updatedPrize}
              sec
              // leftIconNAme={Pri}
              returnKeyType="next"
              onSubmitEditing={() => {}}
            />

            <CButton title="Reserve Slot" onPress={() => reverseSlot()} />
          </View>
        ) : null}

        <View>
          <View
            style={[
              GlobalStyle.row,
              {alignItems: 'center', alignContent: 'center'},
            ]}>
            <CText style={Styles.mainHeading}>All Managers</CText>
          </View>

          <CList
            style={[
              Styles.list,
              {
                backgroundColor:
                  item?.managers.length > 0 ? '#FFF' : 'transparent',
                marginBottom: 10,
                borderRadius: 10,
                marginTop: item?.managers.length > 0 ? 10 : -50,
                elevation: item?.managers.length > 0 ? 5 : 0,
              },
            ]}
            data={item?.managers}
            // loading={reduxState.loading}
            renderItem={renderBooking}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Managers not found',
            }}
          />
        </View>

        <View>
          <View
            style={[
              GlobalStyle.row,
              {alignItems: 'center', alignContent: 'center'},
            ]}>
            <CText style={Styles.mainHeading}>Customers Reviews </CText>
          </View>

          <CList
            style={[
              Styles.list,
              {
                backgroundColor:
                  item?.managers.length > 0 ? '#FFF' : 'transparent',
                marginBottom: 30,
                borderRadius: 10,
                marginTop: item?.managers.length > 0 ? 10 : -50,
                elevation: item?.managers.length > 0 ? 5 : 0,
                paddingBottom: 20,
              },
            ]}
            data={item?.reviews}
            // loading={reduxState.loading}
            renderItem={renderCustomerReviews}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'No Any Reviews',
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default SpaceDetails;

const styles = StyleSheet.create({});
