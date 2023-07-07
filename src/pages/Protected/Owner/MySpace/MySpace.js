import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
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
  Cart,
  Events,
  FGirdView,
  FMapView,
  GirdView,
  Google,
  Hub,
  MapViewImage,
  MarkerImage,
  Marketplace,
  Notification,
  Profile,
  Services,
  filterIcon,
} from '../../../../assets/images';
import Styles from './MySpace.style';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import DatePicker from 'react-native-modern-datepicker';
import {useDispatch, useSelector} from 'react-redux';
import {getAllSpaces, getSpacsss} from '../../../../redux/actions/Root.Action';
import {BASE_URL, BASE_URL_IMG} from '../../../../config/webservices';
import MapView, {Marker} from 'react-native-maps';

const MySpace = ({navigation , route}) => {
  console.log("🚀 ~ file: MySpace.js:39 ~ MySpace ~ route:", route?.params)
  const fullName = useRef(null);
  const dispatch = useDispatch();
  const reduxState = useSelector(({auth, language, root}) => {
    console.log('rootrootroot', root?.spaces, auth);
    return {
      spaces: root?.spaces,
      userRole: auth?.user?.role,
      loading: root?.spacesLoading,
      userId: auth?.user?._id,

    };
  });

  const isCustomer = reduxState?.userRole === 'Customer';
  const [spaces, setSpaces] = useState([]);

  const [account, setAccount] = useState('Grid View');
  const headerProps = {
    headerTitle:  route?.params || 'My Spaces',
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
      <SpaceCard
        mainContainer={Styles.mainContainer}
        name={item?.description}
        phone={item?.contact}
        ratePrize={item?.rate_day}
        address={item?.location?.address}
        img={`${BASE_URL_IMG}${item?.images?.[0]}`}
        onPress={() => navigation.navigate('SpaceDetails', {item})}
      />
    );
  };
  const renderVerticalItem = ({item}) => {
    console.log("🚀 ~ file: MySpace.js:98 ~ renderVerticalItem ~ item:", item)
    return (
      <SpaceCard
        mainContainer={Styles.mainContainer2}
        name={item?.description}
        phone={item?.contact}
        ratePrize={item?.rate_day}
        address={item?.location?.address}
        img={`${BASE_URL_IMG}${item?.images?.[0]}`}
        mapView
        imgStyles={{width: 100, height: '100%'}}
        onPress={() => navigation.navigate('SpaceDetails', {item})}
      />
    );
  };
  const renderBooking = ({item}) => {
    return <BookingCard />;
  };
  const data = [
    {name: 'Grid View', image: GirdView, activeImg: FGirdView},
    {name: 'Map View', image: FMapView, activeImg: MapViewImage},
  ];

  useEffect(() => {
    allSpaces();
  }, [spaces]);
  const allSpaces = () => {
    if (isCustomer) {
      dispatch(getAllSpaces('', callBack));
    } else {
      dispatch(getSpacsss(reduxState?.userId , callBack))


    }
  };
  const callBack = res => {
    setSpaces(res?.spaces);
  };

  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}
      scrollView>
      <View style={Styles.container}>
        {isCustomer && (
          <CText
            style={[Styles.mainHeading, {marginBottom: 30, marginTop: -20}]}>
            My Spaces
          </CText>
        )}

        {!isCustomer ? (
          <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
            <CText style={Styles.mainHeading}>My Spaces</CText>

            <View style={[GlobalStyle.row]}>
              <CText style={Styles.subHeading}>Total Spaces:</CText>
              <CText style={Styles.spaceTotal}>{spaces?.length}</CText>
            </View>
          </View>
        ) : (
          <View style={Styles.typesView}>
            {data?.map(e => (
              <TouchableOpacity
                onPress={() => setAccount(e.name)}
                style={
                  account === e?.name ? Styles.activeUser : Styles.unactiveUser
                }>
                <ProgressiveImage
                  resizeMode={'contain'}
                  style={{
                    ...GlobalStyle.inputIcon,
                    ...Styles.inputIcon,
                  }}
                  source={account == e.name ? e?.activeImg : e?.image}
                />
                <CText
                  style={
                    account === e.name ? Styles.activeText : Styles.unActiveText
                  }>
                  {e?.name}
                </CText>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {account === 'Grid View' ? (
          <CList
            style={Styles.spacelist}
            // numColumns={2}
            //   horizontal
            // contentContainerStyle={[GlobalStyle.list, ]}
            data={spaces}
            loading={reduxState.loading}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Spaces not found',
            }}
            onRefreshLoading={reduxState.loading}
            onRefreshHandler={() => allSpaces()}
            // onEndReached={onEndReached}
            // onEndReachedThreshold={0.1}
            // maxToRenderPerBatch={10}
            // windowSize={10}
          />
        ) : (
          <>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              minZoomLevel={20}
              style={{flex: 1, height: 200}}>
              <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
                <ProgressiveImage
                  resizeMode={'contain'}
                  style={{
                    ...GlobalStyle.inputIcon,
                    width: 30,
                    height: 30,
                  }}
                  source={MarkerImage}
                />
              </Marker>
              <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
                <ProgressiveImage
                  resizeMode={'contain'}
                  style={{
                    ...GlobalStyle.inputIcon,
                    width: 30,
                    height: 30,
                  }}
                  source={MarkerImage}
                />
              </Marker>
              <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
                <ProgressiveImage
                  resizeMode={'contain'}
                  style={{
                    ...GlobalStyle.inputIcon,
                    width: 30,
                    height: 30,
                  }}
                  source={MarkerImage}
                />
              </Marker>
              <Marker coordinate={{latitude: 37.145, longitude: -122.123}}>
                <ProgressiveImage
                  resizeMode={'contain'}
                  style={{
                    ...GlobalStyle.inputIcon,
                    width: 30,
                    height: 30,
                  }}
                  source={MarkerImage}
                />
              </Marker>
            </MapView>
            <CList
              style={Styles.spacelist}
              // numColumns={2}
              //   horizontal
              // contentContainerStyle={[GlobalStyle.list, ]}
              data={spaces}
              loading={reduxState.loading}
              renderItem={renderVerticalItem}
              keyExtractor={(item, index) => index.toString()}
              emptyOptions={{
                // icon: require('../../assets/images/empty.png'),
                text: 'Spaces not found',
              }}
              onRefreshLoading={reduxState.loading}
              onRefreshHandler={() => allSpaces()}
              // onEndReached={onEndReached}
              // onEndReachedThreshold={0.1}
              // maxToRenderPerBatch={10}
              // windowSize={10}
            />
          </>
        )}
      </View>
    </Container>
  );
};

export default MySpace;

const styles = StyleSheet.create({});
