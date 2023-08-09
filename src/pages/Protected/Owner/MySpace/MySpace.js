import {StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
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
  LocationColored,
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
import {getAllSpaces, getSpacesByCategories, getSpacesByCategory, getSpacsss} from '../../../../redux/actions/Root.Action';
import {BASE_URL, BASE_URL_IMG} from '../../../../config/webservices';
import MapView, {Marker, Callout} from 'react-native-maps';

const MySpace = ({navigation, route}) => {
  
  console.log('🚀 ~ file: MySpace.js:39 ~ MySpace ~ route:', route?.params);
  const {name  , _id} = route?.params || {}
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
  console.log('🚀 ~ file: MySpace.js:54 ~ MySpace ~ isCustomer:', isCustomer);
  const [spaces, setSpaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const [account, setAccount] = useState('Grid View');
  const headerProps = {
    headerTitle: name || 'My Spaces',
    backButtonIcon: false,
    ProgressiveImageHeader: true,
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Notification,
    rightPress: () => navigation.navigate('Profile'),
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
    console.log("🚀 ~ file: MySpace.js:90 ~ renderItem ~ item:", item)
    var convertedFilePath = `${BASE_URL_IMG}${item?.images?.[0]}`.replace(
      /\\/g,
      '/',
    );
    
    const handleToggle = (updatedCard) => {
      const updatedData = spaces.map((card) =>
        card._id === updatedCard._id ? updatedCard : card
      );
      setSpaces(updatedData);
    };

    return (
      <SpaceCard
        mainContainer={Styles.mainContainer}
        name={item?.description}
        phone={item?.contact}
        ratePrize={item?.rate_day}
        address={item?.location?.address || item?.address}
        img={convertedFilePath}
        item={item}
        onPress={() => navigation.navigate('SpaceDetails', {item})}
        isCustomer={isCustomer}
        onToggle={handleToggle}


      />
    );
  };
  const renderVerticalItem = ({item}) => {
    var convertedFilePath = `${BASE_URL_IMG}${item?.images?.[0]}`.replace(
      /\\/g,
      '/',
    );

    return (
      <SpaceCard
        mainContainer={Styles.mainContainer2}
        name={item?.description}
        phone={item?.contact}
        ratePrize={item?.rate_day}
        address={item?.address}
        img={convertedFilePath}
        mapView
        item={item}

        imgStyles={{width: 100, height: '100%'}}
        onPress={() => navigation.navigate('SpaceDetails', {item})}
        isCustomer={isCustomer}
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
  }, []);
  const allSpaces = () => {
    if (isCustomer) {
      if(_id){
        dispatch(getSpacesByCategory(_id, callBack));

      } else {

        dispatch(getAllSpaces('', callBack));

      }
    } else {
      dispatch(getSpacsss(reduxState?.userId, callBack));
    }
  };
  const callBack = res => {
    console.log("🚀 ~ file: MySpace.js:154 ~ callBack ~ res:", res)
    setSpaces(res);
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
                latitude: 24.8651,
                longitude: 67.077643,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
              }}
              minZoomLevel={5}
              style={{flex: 1, height: 400}}>
              {spaces.map(item => {
                console.log(
                  '🚀 ~ file: MySpace.js:231 ~ MySpace ~ item:',
                  item,
                );
                var convertedFilePath2 =
                  `${BASE_URL_IMG}${item?.images?.[0]}`.replace(/\\/g, '/');
                console.log(
                  '🚀 ~ file: MySpace.js:237 ~ MySpace ~ convertedFilePath2:',
                  convertedFilePath2,
                );

                return (
                  <Marker
                    onPress={evt => setSelectedPlace(item)}
                    calloutVisible={
                      selectedPlace && selectedPlace.id === item.id
                    }
                    coordinate={{
                      latitude: item?.location?.coordinates?.[1],

                      longitude: item?.location?.coordinates?.[0],
                      latitudeDelta: 0.04,
                      longitudeDelta: 0.05,
                    }}>
                    <ProgressiveImage
                      resizeMode={'contain'}
                      style={{
                        ...GlobalStyle.inputIcon,
                        width: 30,
                        height: 30,
                      }}
                      source={MarkerImage}
                    />
                    <Callout 
                       onPress={() => navigation.navigate('SpaceDetails', {item})} 
                    style={{width: 200, height: 130}}>
                        <View  style={{
                                width: 100,
                                height: 70,
                              }}>
                          {item?.images?.[0] && (
                            <ProgressiveImage
                              resizeMode="contain"
                              style={{
                                width: 100,
                                height: 70,
                              }}
                              source={Profile}
                            />
                          )}
                        </View>
                        
                        <View style={{flexDirection: 'row'}}>
                          <CText numberOfLines={1} style={Styles.addCardText}>
                            Address :
                          </CText>
                          <CText numberOfLines={1} style={Styles.cardText}>
                            {item?.address}
                          </CText>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <CText numberOfLines={1} style={Styles.addCardText}>
                            Space Name :
                          </CText>
                          <CText numberOfLines={1} style={Styles.cardText}>
                            {item?.description}
                          </CText>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <CText numberOfLines={1} style={Styles.addCardText}>
                            Price :
                          </CText>
                          <CText numberOfLines={1} style={Styles.cardText}>
                            {item?.rate_hour}
                          </CText>
                        </View> 
                        

                        {/* <View style={{flexDirection: 'row'}}>
                          <CText numberOfLines={2} style={Styles.addCardText}}>
                            Address:
                          </CText>
                          <CText numberOfLines={2} style={Styles.addCardText}}>
                            {item?.address}
                          </CText>
                        </View>

                        {/* <Image
                  resizeMode="cover"
                  style={{ width: 100, height: 100 }}
                  source={item.image}
                /> */}
                    </Callout>
                  </Marker>
                );
              })}
              {/* {selectedPlace && (
                <View style={{position: 'absolute', bottom: 20, left: 20 , backgroundColor:"red"}}>
                  {/* <Image
                    resizeMode="cover"
                    style={{width: 100, height: 100}}
                    source={selectedPlace?.image}
                  /> */}
            </MapView>
            {/* <CList
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
            /> */}
          </>
        )}
      </View>
    </Container>
  );
};

export default MySpace;

const styles = StyleSheet.create({});
