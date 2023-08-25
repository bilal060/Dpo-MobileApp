import React, {memo, useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {CText, ProgressiveImage, RadioButton} from '../index';
import Style from './SpaceCard.style';
import {
  CallColoured,
  FocusedBooking,
  threeDots,
  LocationColored,
  Profile,
  SpaceImg,
  bookingIcon,
  docIcon,
  fuelIcon,
  lengthIcon,
  plugIcon,
  rateIcon,
  Camera,
  isCustomer,
} from '../../assets/images';
import GlobalStyle from '../../assets/styling/GlobalStyle';
import ToggleSwitch from '../cToggleSwitch/CToggleSwitch';
import {BASE_URL_IMG} from '../../config/webservices';
import {Rating, AirbnbRating} from 'react-native-ratings';

const SpaceCard = ({
  name = 'Belmont, North Carolina',
  phone = '+1 012 3456 789',
  address = 'Belmont, North Carolina',
  mainContainer,
  onPress,
  imgData,
  ratePrize = '0',
  img,
  mapView,
  imgStyles,
}) => {
  const renderItem = ({item}) => {
    return (
      <ProgressiveImage
        resizeMode="cover"
        source={{uri: `${BASE_URL_IMG}${item}`}}
        style={{
          width: 50,
          height: 50,
          marginHorizontal: 5,
          marginVertical: 5,
          borderRadius: 5,
        }}
      />
    );
  };
  const renderFooter = () => {
    return (
      <ProgressiveImage
        resizeMode="cover"
        source={Camera}
        style={{
          width: 50,
          height: 50,
          marginHorizontal: 5,
          marginVertical: 5,
          borderRadius: 5,
        }}
      />
    );
  };

  const [isOn, setIsOn] = useState(false);
  const [toggleState, setToggleState] = useState(item.available);
const dispatch = useDispatch()

  const handleToggle = async () => {
    const payload = {
      spaceId : item?._id,
      availability: !toggleState
    }
    try {
        setToggleState(!toggleState);

      dispatch(change_availablity(payload , response))

      
    
    } catch (error) {
      // Handle error if needed
      console.error('Error updating toggle status:', error);
    }
  };
  const response = (res) => {
    console.log("🚀 ~ file: SpaceCard.js:93 ~ response ~ res:", res)
     onToggle({ ...item, available: !toggleState });
  }

  return (
    <>
    <TouchableOpacity
        disabled={toggleState}
      onPress={onPress}
        style={[Style.spaceContainer, mainContainer , {opacity:toggleState ? 0.5 :1}]}>
      {!img ? (
        <ProgressiveImage
          resizeMode="cover"
          source={SpaceImg}
          style={[{width: '100%', height: '50%'}, imgStyles]}
        />
      ) : (
        <ProgressiveImage
          resizeMode="cover"
          source={{uri: img}}
          style={[{width: '100%', height: '50%'}, imgStyles]}
        />
      )}
      <View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#E7E6E9',
            padding: 4,
          }}>
          {imgData && (
            <FlatList
              data={imgData}
              nestedScrollEnabled
              renderItem={renderItem}
              ListFooterComponent={renderFooter}
              horizontal
            />
          )}
          <CText style={Style.ProfileName}>{name}</CText>
          <View
            style={[
              GlobalStyle.row,
              {alignItems: 'center', marginVertical: 5},
            ]}>
            <View style={[GlobalStyle.row, {width: '45%'}]}>
              <ProgressiveImage
                source={CallColoured}
                resizeMode="contain"
                style={{width: 12, height: 12}}
              />
              <CText style={GlobalStyle.contact}>{phone}</CText>
            </View>

            {!mapView && (
              <View
                style={[GlobalStyle.row, {width: '45%', alignItems: 'center'}]}>
                <ProgressiveImage
                  source={rateIcon}
                  resizeMode="contain"
                  style={{width: 12, height: 12}}
                />
                <CText style={[GlobalStyle.contact]}>Rate :</CText>
                <CText style={[Style.place, {flex: 1, marginLeft: -30}]}>
                  {'$ ' + ratePrize}
                </CText>
              </View>
            )}
          </View>
          {mapView && (
            <View
              style={[GlobalStyle.row, {width: '45%', alignItems: 'center'}]}>
              <ProgressiveImage
                source={rateIcon}
                resizeMode="contain"
                style={{width: 12, height: 12}}
              />
              <CText style={[GlobalStyle.contact]}>Rate :</CText>
              <CText style={[Style.place, {flex: 1, marginLeft: 0}]}>
                {'$ ' + ratePrize}
              </CText>
            </View>
          )}

          <View
            style={[
              GlobalStyle.row,
              {alignItems: 'center', marginVertical: 5},
            ]}>
            <ProgressiveImage
              source={LocationColored}
              resizeMode="contain"
              style={{width: 12, height: 12}}
            />
            <CText numberOfLines={1} style={GlobalStyle.contact}>
              {address}
            </CText>
          </View>
          <View
            style={[
              GlobalStyle.row,
              {alignItems: 'center', marginVertical: 4},
            ]}>
            <View
              style={[GlobalStyle.row, {width: '55%', alignItems: 'center'}]}>
              <ProgressiveImage
                source={bookingIcon}
                resizeMode="contain"
                style={{width: 11, height: 11}}
              />
              <CText style={[GlobalStyle.contact]}>Type :</CText>
              <CText style={[Style.place, {flex: 1, marginLeft: -10}]}>
                Car Parking
              </CText>
            </View>
          </View>
        </View>
        {!mapView && (
            <>
            
          <View
            style={[
              GlobalStyle.row,
              {marginHorizontal: 10, marginVertical: 7},
            ]}>
            <>
                {!isCustomer ? (
                <ToggleSwitch
                  disabled={toggleState}
                  size={'true'}
                    isOn={toggleState}
                  label="Available"
                    onPress={handleToggle}
                />
              ) : (
                <>
                  <Rating
                    type="star"
                    isDisabled={true}
                    selectedColor="yellow"
                    ratingCount={1}
                    count={1}
                    minValue={1}
                    defaultRating={5}
                    imageSize={20}
                    // showRating
                    // onFinishRating={this.ratingCompleted}
                  />
                  <CText style={[GlobalStyle.contact]}>4.0</CText>
                </>
              )}
            </>
            <View style={[GlobalStyle.row, {marginHorizontal: 10}]}>
              <ProgressiveImage
                  source={paidStaff ? plugIcon : FplugIcon}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />
              <ProgressiveImage
                  source={paidSecurity ? lengthIcon : FlengthIcon}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />
              <ProgressiveImage
                  source={ownerSite ? docIcon : FdocIcon}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />
              <ProgressiveImage
                  source={fuel ? fuelIcon : FfuelIcon}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />

              <ProgressiveImage
                source={threeDots}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />
                
              </View>
              
            </View>
            
            </>

        )}
          
      </View>

    </TouchableOpacity>
    </>
  );
};

export default memo(SpaceCard);
