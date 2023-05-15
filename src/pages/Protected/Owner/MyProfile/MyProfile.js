import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container, PackageCard} from '../../../../containers';
import {
  CButton,
  CheckBox,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../components';
import Styles from './Myprofile.style';
import {themes} from '../../../../theme/colors';
import {
    ArrowLeft,
  ChangePass,
  EditProfile,
  Faq,
  Logout,
  ManagerIcon,
  Notification,
  Payment,
  Privacy,
  Profile,
} from '../../../../assets/images';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

const MyProfile = ({}) => {
  const navigation = useNavigation();

  const headerProps = {
    ProgressiveImageHeader: true,
    backButtonIcon: false,

    headerTitle: 'Setting',
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Notification,
    // rightPress: ()=> navigation.navigate("AddNewManager")
  };

  const data = [
    {
      img: EditProfile,
      address: 'Edit Profile',
      phone: '+1 012 3456 789',
      active: true,
       navigation: 'EditProfile',
    },
    {
      img: ChangePass,
      address: 'Change Password',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      img: Payment,
      address: 'Payment History',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      img: Faq,
      address: 'FAQs',
      phone: '+1 012 3456 789',
      active: false,
      navigation: 'FAQs',

    },
    {
      img: Privacy,
      address: 'Privacy Policy',
      phone: '+1 012 3456 789',
      active: true,
      navigation:"Privacy"
    },
    {
      img: Logout,
      address: 'Log Out',
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
            source={item?.img}
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
    <CText style={Styles.activeMember}>{`All Managers`}</CText>
  );

  const renderProfile = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item?.navigation)}>
        <View style={Styles.ProfileCard}>
          <ProgressiveImage
            source={item?.img}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
          <View style={{flex: 1, paddingHorizontal: 10 , paddingLeft:20}}>
            <CText style={item.address=== 'Log Out' ?  Styles.logout : Styles.messageName}>{item?.address}</CText>
          </View>
          <View>
          <ProgressiveImage
            source={ArrowLeft}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
          </View>
        </View>
        <View style={Styles.bottomView} />
      </TouchableOpacity>
    );
  };

  return (
    <Container
      scrollView
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}>
      <View style={Styles.container}>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 25,
            backgroundColor: '#FFF',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignSelf: 'center',
              marginVertical: 10,
              flex: 1,
              alignItems: 'center',
            }}>
            <ProgressiveImage
              source={Profile}
              resizeMode="contain"
              style={{width: 100, height: 100, borderRadius: 10}}
            />
            <CText style={Styles.profileName}>{`Elvis Cadmora`}</CText>
            <CText style={Styles.profileEmail}>{`elviscadmora@email.com`}</CText>
            <CText style={Styles.profileContact}>{`+1 012 3456 789`}</CText>
          </View>
          <CList
            style={Styles.spacelist}
            // numColumns={2}
            //   horizontal
            // contentContainerStyle={[GlobalStyle.list, ]}
            data={data}
            // loading={reduxState.loading}
            renderItem={renderProfile}
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
      </View>
    </Container>
  );
};

export default MyProfile;

const styles = StyleSheet.create({});
