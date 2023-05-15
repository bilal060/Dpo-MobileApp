import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {Container} from '../../../../../containers';
import {
  BookingCard,
  CInput,
  CList,
  CText,
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

const SpaceDetails = ({navigation}) => {
  const fullName = useRef(null);
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
        <View style={[GlobalStyle.row, Styles.profileCard ,]}>
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
              {height: 60, borderBottomWidth: 0 },
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
        <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
          <CText style={Styles.mainHeading}>My Spaces</CText>

          <View style={[GlobalStyle.row]}>
            <CText style={Styles.subHeading}>Total Spaces:</CText>
            <CText style={Styles.spaceTotal}>205</CText>
          </View>
        </View>

        <SpaceCard mainContainer={Styles.mainPlaceContainer} imgData={listData} />

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
                backgroundColor: '#FFF',
                marginBottom: 10,
                borderRadius: 10,
                marginTop: 10,
                elevation: 5,
              },
            ]}
            data={listData}
            // loading={reduxState.loading}
            renderItem={renderBooking}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Store not found',
            }}
          />
        </View>

        <View>
          <View
            style={[
              GlobalStyle.row,
              {alignItems: 'center', alignContent: 'center' , },
            ]}>
            <CText style={Styles.mainHeading}>Customers Reviews </CText>
          </View>

          <CList
            style={[
              Styles.list,
              {
                backgroundColor: '#FFF',
                marginBottom: 30,
                borderRadius: 10,
                marginTop: 15,
                elevation: 5,
                paddingBottom:20

              },
            ]}
            data={listData}
            // loading={reduxState.loading}
            renderItem={renderCustomerReviews}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Store not found',
            }}
          />
        </View>
      </View>
    </Container>
  );
};

export default SpaceDetails;

const styles = StyleSheet.create({});
