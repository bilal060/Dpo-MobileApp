import React, {memo} from 'react';
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
} from '../../assets/images';
import GlobalStyle from '../../assets/styling/GlobalStyle';
import ToggleSwitch from '../cToggleSwitch/CToggleSwitch';
import {BASE_URL_IMG} from '../../config/webservices';

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
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Style.spaceContainer, mainContainer]}>
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
            <CText numberOfLines={1} style={GlobalStyle.contact}>{address}</CText>
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
          <View
            style={[
              GlobalStyle.row,
              {marginHorizontal: 10, marginVertical: 7},
            ]}>
            <>
              <ToggleSwitch size={'true'} isOn={true} label="Available" />
            </>
            <View style={[GlobalStyle.row, {marginHorizontal: 10}]}>
              <ProgressiveImage
                source={plugIcon}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />
              <ProgressiveImage
                source={lengthIcon}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />
              <ProgressiveImage
                source={docIcon}
                resizeMode="contain"
                style={{width: 17, height: 17, marginLeft: 7}}
              />
              <ProgressiveImage
                source={fuelIcon}
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
        )}
      </View>
    </TouchableOpacity>
  );
};

export default memo(SpaceCard);
