import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, { useRef } from 'react';
import {Container, PackageCard} from '../../../../containers';
import {
  CButton,
  CheckBox,
  CInput,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../components';
import Styles from './Managers.styles';
import {themes} from '../../../../theme/colors';
import {CNameIcon, ManagerIcon, TimeIcon} from '../../../../assets/images';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';

const Managers = ({navigation}) => {
  const type = useRef(null);
  const sort = useRef(null);
  const headerProps = {
    ProgressiveImageHeader: true,
    headerLeft: true,
    backBtnColor: themes.light.colors.fontLowColor,
    headerTransparentStyle: Styles.headerTransparentStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTitle: 'My Managers',
    headerRight: true,
    backButtonIcon: false,
    headerRight: true,
    rightPress: ()=> navigation.navigate("AddNewManager")
  };

  const timeSlot = ['09 :00', '10 :00'];
  const data = [
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: false,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      name: 'Tony Stark',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      active: false,
    },
  ];

  const renderTimeSlot = ({item, index}) => {
    return (
      <View style={Styles.memberCard}>
        <View style={GlobalStyle.row}>
          <CText style={Styles.manager}>{`Total Managers`}</CText>
          <ProgressiveImage
            source={ManagerIcon}
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
          />
        </View>

        <View>
          <CText style={Styles.activeMember}>{`14`}</CText>
        </View>
      </View>
    );
  };

  const renderListHeader = () => (
    <CText style={Styles.mainHeading}>{`All Managers`}</CText>
  );

  const renderProfile = ({item, index}) => {
    return (
      <View style={Styles.ProfileCard}>
        <ProfileCard
          name={item.name}
          address={item?.address}
          active={item?.active}
          phone={item?.phone}
        />
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
        <View style={{paddingHorizontal: 20, paddingVertical: 25}}>
        <View style={[GlobalStyle.row, {alignItems: 'center'}]}>
          <CText style={Styles.mainHeading}>Booking History</CText>
        </View>
        <CInput
          ref={type}
          placeholder={'Select Branch'}
          // value={values.fuel}
          // onChangeText={handleChange('fuel')}
          // error={errors.fuel}
          sec
          inputInnerContainerStyle={Styles.inputInnerContainerStyle}
          type="view"
          leftIconNAme={CNameIcon}
          returnKeyType="next"
        />
        <CInput
          ref={type}
          placeholder={'Select Time Slot'}
          // value={values.fuel}
          // onChangeText={handleChange('fuel')}
          // error={errors.fuel}
          inputInnerContainerStyle={Styles.inputInnerContainerStyle}
        
          sec
          type="view"
          leftIconNAme={TimeIcon}
          returnKeyType="next"
        />
          {/* <FlatList
            data={timeSlot}
            renderItem={renderTimeSlot}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> */}
          <FlatList
            ListHeaderComponent={renderListHeader}
            ListHeaderComponentStyle={Styles.listHeader}
            data={data}
            extraData={data}
            renderItem={renderProfile}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Container>
  );
};

export default Managers;

const styles = StyleSheet.create({});
