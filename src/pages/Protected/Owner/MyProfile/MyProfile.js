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
  BNotification,
  ChangePass,
  EditProfile,
  Faq,
  Language,
  Logout,
  ManagerIcon,
  Notification,
  Payment,
  Privacy,
  Profile,
  Rating,
} from '../../../../assets/images';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {useNavigation} from '@react-navigation/native';

const MyProfile = ({}) => {
  const navigation = useNavigation();

  const headerProps = {
    ProgressiveImageHeader: false,
    backButtonIcon: false,

    headerTile: 'Setting',
    headerRight: true,
    headerRightImg: false,
    backButtonIcon: true,
    headerTransparentStyle: Styles.headerTransparentStyle,
    headerTitleText: Styles.headerTitleText,
    headerRightImg: Profile,
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
      img: Payment,
      address: 'Payment History',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      img: ChangePass,
      address: 'Change Password',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      img: BNotification,
      address: 'Notifications',
      phone: '+1 012 3456 789',
      active: true,
    },
  ];
  const supportdata = [
    {
      img: Faq,
      address: 'FAQs',
      phone: '+1 012 3456 789',
      active: true,
      navigation: 'EditProfile',
    },

    {
      img: Privacy,
      address: 'Privacy Policy',
      phone: '+1 012 3456 789',
      active: true,
    },
    {
      img: Rating,
      address: 'Rate This App',
      phone: '+1 012 3456 789',
      active: true,
    },
  ];
  const prefrencedata = [
    {
      img: Language,
      address: 'Language',
      phone: '+1 012 3456 789',
      active: true,
      navigation: 'EditProfile',
    },

    {
      img: Logout,
      address: 'Log Out',
      phone: '+1 012 3456 789',
      active: false,
    },
  ];

  const renderProfile = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item?.navigation)}>
        <View style={Styles.ProfileCard}>
          <ProgressiveImage
            source={item?.img}
            resizeMode="contain"
            style={{width: 22, height: 22}}
          />
          <View style={{flex: 1, paddingHorizontal: 10, paddingLeft: 20}}>
            <CText
              style={
                item.address === 'Log Out' ? Styles.logout : Styles.messageName
              }>
              {item?.address}
            </CText>
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
          <CText style={Styles.profileName}>{`Your Account`}</CText>

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

          <CText style={Styles.profileName}>{`Support`}</CText>

          <CList
            style={Styles.spacelist}
            // numColumns={2}
            //   horizontal
            // contentContainerStyle={[GlobalStyle.list, ]}
            data={supportdata}
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

          <CText style={Styles.profileName}>{`Preferences`}</CText>

          <CList
            style={Styles.spacelist}
            // numColumns={2}
            //   horizontal
            // contentContainerStyle={[GlobalStyle.list, ]}
            data={prefrencedata}
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
