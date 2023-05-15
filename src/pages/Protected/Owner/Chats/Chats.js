import {FlatList, StyleSheet, Text, View , TouchableOpacity} from 'react-native';
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
import Styles from './Chats.style';
import {themes} from '../../../../theme/colors';
import {ManagerIcon, Notification, Profile} from '../../../../assets/images';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

const Chats = ({}) => {
  const navigation = useNavigation();

  const headerProps = {
    ProgressiveImageHeader: true,
    backButtonIcon: false,

    headerTitle: 'Messages',
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Notification,
    // rightPress: ()=> navigation.navigate("AddNewManager")
  };

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
    <CText style={Styles.activeMember}>{`All Managers`}</CText>
  );

  const renderProfile = ({item, index}) => {
    
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
        <View style={Styles.ProfileCard}>
          <ProgressiveImage
            source={Profile}
            resizeMode="contain"
            style={{width: 60, height: 60, borderRadius: 100}}
          />
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <CText style={Styles.messageName}>{`Total Managers`}</CText>
            <CText style={Styles.message}>{`Your reservation is done.`}</CText>
          </View>
          <View>
            <CText style={Styles.message}>{`4/27/23`}</CText>
            <CText style={Styles.manager}></CText>
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

export default Chats;

const styles = StyleSheet.create({});
