import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {Container, PackageCard} from '../../../../../containers';
import {
  CButton,
  CheckBox,
  CList,
  CPagination,
  CText,
  ProfileCard,
  ProgressiveImage,
  RadioButton,
} from '../../../../../components';
import Styles from '../Myprofile.style';
import {themes} from '../../../../../theme/colors';
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
} from '../../../../../assets/images';
import GlobalStyle from '../../../../../assets/styling/GlobalStyle';
import {useNavigation} from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';

const PrivacyScreen = ({}) => {
  const navigation = useNavigation();
const [selectedLan , setSelectedLan] = useState(false)
  const headerProps = {
    ProgressiveImageHeader: true,
    backButtonIcon: true,

    headerTitle: 'Langugae',
    headerRight: false,
  };

  const SECTIONS = [
    {
      title: 'English',
      content: 'Lorem ipsum...',
    },
    {
      title: 'Germon',
      content: 'Lorem ipsum...',
    },
    {
        title: 'Arabic',
        content: 'Lorem ipsum...',
      },
  ];

  //  const  _renderSectionTitle = (section) => {
  //     return (
  //       <View style={styles.content}>
  //         <Text>{section.content}</Text>
  //       </View>
  //     );
  //   };

  const _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  const _renderContent = section => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const renderProfile = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
        <View style={Styles.ProfileCard}>
          <ProgressiveImage
            source={item?.img}
            resizeMode="contain"
            style={{width: 30, height: 30}}
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
              style={{width: 25, height: 25}}
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
          <CText style={Styles.title}>Select Language</CText>
          <RadioButton title="Abc" value={selectedLan} onChange={()=> setSelectedLan(!selectedLan)} containerStyles={Styles.containerStyles} myStyle2={Styles.myStyle2} />
        </View>
      </View>
    </Container>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({});
