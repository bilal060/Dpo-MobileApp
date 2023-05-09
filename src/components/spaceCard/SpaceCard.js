import React, {memo} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {CText, ProgressiveImage, RadioButton} from '../index';
import Style from './SpaceCard.style';
import {
  CallColoured,
  FocusedBooking,
  FocusedSpace,
  LocationColored,
  Profile,
  SpaceImg,
  bookingIcon,
  docIcon,
  fuelIcon,
  lengthIcon,
  plugIcon,
  rateIcon,
} from '../../assets/images';
import GlobalStyle from '../../assets/styling/GlobalStyle';
import ToggleSwitch from '../cToggleSwitch/CToggleSwitch';

const SpaceCard = ({
  name = 'Belmont, North Carolina',
  phone = '+1 012 3456 789',
  address = 'Belmont, North Carolina',
}) => {
  return (
    <View style={Style.spaceContainer}>
      <ProgressiveImage
        resizeMode="cover"
        source={SpaceImg}
        style={{width: '100%', height: '50%'}}
      />
      <View>
        <View
          style={{
            paddingHorizontal: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#E7E6E9',
            padding: 4,
          }}>
          <CText style={Style.ProfileName}>{name}</CText>
          <View
            style={[
              GlobalStyle.row,
              {alignItems: 'center', marginVertical: 4},
            ]}>
            <View style={[GlobalStyle.row, {width: '45%'}]}>
              <ProgressiveImage
                source={CallColoured}
                resizeMode="contain"
                style={{width: 12, height: 12}}
              />
              <CText style={GlobalStyle.contact}>{phone}</CText>
            </View>
            <View style={[GlobalStyle.row, {width: '45%'}]}>
              <ProgressiveImage
                source={CallColoured}
                resizeMode="contain"
                style={{width: 12, height: 12}}
              />
              <CText style={GlobalStyle.contact}>{phone}</CText>
            </View>
          </View>
          <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
            <ProgressiveImage
              source={LocationColored}
              resizeMode="contain"
              style={{width: 12, height: 12}}
            />
            <CText style={GlobalStyle.contact}>{address}</CText>
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
              <CText style={[Style.place, {flex: 1, marginLeft: -50}]}>
                Car Parking
              </CText>
            </View>
            <View
              style={[GlobalStyle.row, {width: '45%', alignItems: 'center'}]}>
              <ProgressiveImage
                source={rateIcon}
                resizeMode="contain"
                style={{width: 12, height: 12}}
              />
              <CText style={[GlobalStyle.contact]}>Rate :</CText>
              <CText style={[Style.place, {flex: 1, marginLeft: -30}]}>
                $50
              </CText>
            </View>
          </View>
        </View>
        <View
          style={[GlobalStyle.row, {marginHorizontal: 10, marginVertical: 10}]}>
          <>
            <ToggleSwitch size={'true'} isOn={true} label="Available" />
          </>
          <View style={[GlobalStyle.row, {marginHorizontal: 10, }]}>
            <ProgressiveImage
              source={plugIcon}
              resizeMode="contain"
              style={{width: 17, height: 17 , marginLeft:7}}
            />
            <ProgressiveImage
              source={lengthIcon}
              resizeMode="contain"
              style={{width: 17, height: 17 , marginLeft:7}}
            />
            <ProgressiveImage
              source={docIcon}
              resizeMode="contain"
              style={{width: 17, height: 17 , marginLeft:7}}
            />
            <ProgressiveImage
              source={fuelIcon}
              resizeMode="contain"
              style={{width: 17, height: 17 , marginLeft:7}}
            />

<ProgressiveImage
              source={fuelIcon}
              resizeMode="contain"
              style={{width: 17, height: 17 , marginLeft:7}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(SpaceCard);
