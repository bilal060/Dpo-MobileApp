import {FlatList, StyleSheet, Text, View , ScrollView} from 'react-native';
import React from 'react';
import {Container, PackageCard} from '../../../../../containers';
import {
  CButton,
  CheckBox,
  CIcon,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../../components';
import Styles from '../Chats.style';
import {ManagerIcon, Menu, Notification, Profile} from '../../../../../assets/images';
import GlobalStyle from '../../../../../assets/styling/GlobalStyle';
import {themes} from '../../../../../theme/colors';

const Managers = ({}) => {
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
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum ',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",
    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",

    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "reciver",


    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',

    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",


    },
    {
      name: 'Lorem ipsum dolor sit amet consectetur. Non dolor sit. Lorem ipsum',
      address: 'Belmont, North Carolina',
      phone: '+1 012 3456 789',
      type: "sender",

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

  const renderProfile = (item, index) => {
    console.log('itemitemitem', item);
    return (
        <View style={item?.type  === "sender" ?  Styles.reciverView : Styles.senderView}>
          
          <View style={{flex: 1, paddingHorizontal: 10}}>
            <CText style={ item?.type  === "sender" ?  Styles?.reviverMessageName  : Styles.senderMessageName}>{item.name}</CText>
          </View>
          <View>
            <CText style={ item?.type  === "sender" ?   Styles?.reciverDate : Styles.senderDate}>{`4/27/23`}</CText>
          </View>
        </View>
    );
  };

  return (
    <Container
      //   scrollView
      bottomSpace
      edges={['left', 'right']}
      style={Styles.container}
      //   headerProps={headerProps}
    >
      <View style={Styles.subcontainer}>
        <View style={Styles.messageHeader}>
          <CIcon
            type="AntDesign"
            name="left"
            color={themes.light.colors.tertiary}
            size={25}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <ProgressiveImage
              source={Profile}
              resizeMode="contain"
              style={{width: 45, height: 45, borderRadius: 100}}
            />
            <View style={{flex: 1, paddingHorizontal: 10, paddingLeft: 20}}>
              <>
                <CText style={Styles.profileName}>{`Martin Randolph`}</CText>
              </>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={Styles.onlineView} />
                <CText style={Styles.online}>{`Available`}</CText>
              </View>
            </View>
          </View>
          <View>
          <ProgressiveImage
              source={Menu}
              resizeMode="contain"
              style={{width: 25, height: 25,}}
            />
          </View>
        </View>
        <ScrollView style={Styles.chatlist}>
            
        <View style={{marginBottom:50}} >
          {data.map((item) => (
            renderProfile(item)
          ))}
          
          {/* <CList
            style={}
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
          /> */}
        </View>
        </ScrollView>

      </View>

      {/* <CList
            style={Styles.chatlist}
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
      </View> */}
    </Container>
  );
};

export default Managers;

const styles = StyleSheet.create({});
