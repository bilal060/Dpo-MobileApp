import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Platform, StatusBar} from 'react-native';
import {CIcon, CLoading, CText, ProgressiveImage} from '../../components';
import Styles from './TabBar.style';
import {SafeAreaView} from '../index';
import {MappedElement} from '../../utils/methods';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Chat,
  FocusedChat,
  FocusedHome,
  FocusedOctions,
  Focusedplace,
  FocusedUser,
  Home,
  Octicons,
  Place,
  User,
} from '../../assets/images';
const TabBar = ({state}) => {
  const routes = [
    {img: Home, img2: FocusedHome},
    {img: Place, img2: Focusedplace},
    {img: Octicons, img2: FocusedOctions},

    {img: Chat, img2: FocusedChat},
    {img: User, img2: FocusedUser},
  ];

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={Styles.tabContainer}>
      <View style={Styles.tabInnerContainer}>
        <MappedElement
          data={routes}
          renderElement={(route, i) => {
            return (
              <TouchableOpacity key={i} style={Styles.tab}>
                <ProgressiveImage
                  source={state?.index === i ? route?.img2 : route.img}
                  style={Styles.tabIcon}
                  resizeMode="contain"
                />
                <CText style={Styles.tabText}>{route?.name}</CText>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default TabBar;
