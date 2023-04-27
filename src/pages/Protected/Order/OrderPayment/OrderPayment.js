import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container, PackageCard} from '../../../../containers';
import {
  CButton,
  CheckBox,
  CInput,
  CList,
  CPagination,
  CText,
  ProgressiveImage,
  RadioButton,
} from '../../../../components';
import Styles from '../Order.style';
import {themes} from '../../../../theme/colors';

const OrderPayment = ({navigation}) => {
  const headerProps = {
    ProgressiveImageHeader: false,
    headerLeft: true,
    backBtnColor: themes.light.colors.fontLowColor,
    headerTransparentStyle: Styles.headerTransparentStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTitle: 'UNIHUB Checkout',
    headerRight: true,
  };

  const timeSlot = ['09 :00', '10 :00', '11 :00', '12 :00', '01 :00'];

  const renderTimeSlot = ({item, index}) => {
    return (
      <View style={Styles.timeSlotView}>
        <View>
          <CText style={Styles.timeSlot}>{`Time Slot ${index}`}</CText>
          <CText style={Styles.time}>{` ${item}`}</CText>
        </View>
        <View>
          <RadioButton />
        </View>
      </View>
    );
  };

  return (
    <Container
      scrollView
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}>
      <View style={Styles.container}>
        <CPagination />
        <View style={{paddingHorizontal: 30, paddingVertical: 25}}>
          <CText style={Styles.heading}>Payment </CText>
          <CText style={Styles.subheading}>Tell us a bit about yourself</CText>
          <View style={Styles.sheduleCard}>
            <View style={{paddingVertical: 25}}>
              <CText style={Styles.heading}>Booking Summary</CText>
              <CText style={Styles.subheading}>
                Confirm your booking details
              </CText>
              <View style={Styles.sheduleCard}>
                <CText style={Styles.selectText}>Ensuite / Studio</CText>

                <CText style={Styles.selectTimeText}>
                  29 December 2022 at 10:00
                </CText>
                <CText style={Styles.selectTimeText}>Location 1</CText>

                <CText style={[Styles.selectTimeText, {marginTop: 20}]}>
                  Staff Member #1
                </CText>

                <CText style={Styles.timeSummary}>2 hours</CText>
                {/* <FlatList data={timeSlot} renderItem={renderTimeSlot} /> */}
                <CText style={Styles.prize}>$60</CText>
                <CButton
                  title={'Pay Now'}
                  iconType="left"
                  onPress={() => navigation.navigate('OrderUserDetails')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default OrderPayment;

const styles = StyleSheet.create({});
