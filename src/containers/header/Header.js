import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import SafeAreaView from '../safeAreaView/SafeAreaView';
import {CText, CIcon, ProgressiveImage} from '../../components';
import {HeaderImg, LoginImg, Logo, Profile} from '../../assets/images';
import {themes as theme} from '../../theme/colors';
import GlobalStyle from '../../assets/styling/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const Header = props => {
  const {
    headerLeft = true,
    headerTitle = '',
    headerTitleElement,
    headerRight = false,
    ProgressiveImageHeader = true,
    backOnPress,
    style,
    showCart = false,
    hideBackButton = true,
    backButtonIcon = 'back-arrow',
    showCenterLogo = false,
    headerTitleStyle,
    goBackWithRoute,
    headerTransparentStyle,
    bgHeadeStyle,
    transparent,
    centerImage,
    backBtnColor,
  } = props;
  const navigation = useNavigation()

  const backPress = () => {
    if (backOnPress) {
      backOnPress();
    } else {
      navigation.goBack();
    }
  };

  const backButton = () => {
    return hideBackButton ? (
      <TouchableOpacity
        style={GlobalStyle.logostyles}
        onPress={() => backPress()}>
        <CIcon
          type="AntDesign"
          name="left"
          color={theme.light.colors.dark}
          size={20}
        />
      </TouchableOpacity>
    ) : null;
  };

  const centerLogo = () => {
    return (
      <View style={styles.headerLogo}>
        <ProgressiveImage
          style={styles.headerLogoImage}
          source={LoginImg}
          resizeMode="contain"
        />
      </View>
    );
  };
  const menuButton = () => {
    return (
      <View>
        <ProgressiveImage
          style={styles.profileImage}
          source={Profile}
          resizeMode="contain"
        />
      </View>
    );
  };
  const cartButton = () => {
    return (
      <TouchableOpacity
        style={[
          styles.headerCartButton,
          theme === 'light' && styles.headerCartLight,
        ]}
        // onPress={() => navigation.navigate('Cart')}
      >
        {  true > 0 && <View style={styles.headerCartBadge}>
                
            </View>}
        <CIcon
          type="AntDesign"
          name="shoppingcart"
          size={25}
          style={[styles.headerCartButtonIcon]}
        />
      </TouchableOpacity>
    );
  };

  const rightButton = () => {
    return hideBackButton ? (
      <TouchableOpacity
        style={GlobalStyle.logostyles}
        onPress={() => backPress()}>
        <CIcon
          type="MaterialIcons"
          name="arrow-back"
          color={theme.light.colors.backgroundColor}
          size={30}
        />
      </TouchableOpacity>
    ) : null;
  };
  return (
    <SafeAreaView
      style={[styles.headerStyle, transparent, headerTransparentStyle]}
      edges={['top']}>
      
        
          <View>
            <View style={[GlobalStyle.listItemActions]}>
              {true ? backButton() : menuButton()}
              {/* <CText style={GlobalStyle.toggleViewText}>{headerTitle}</CText> */}
              {/* {headerRight && rightButton()} */}
            </View>
            <View>
          {true && centerLogo()}

            </View>
          </View>
          
        
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: theme.light.colors.backgroundColor,
    paddingVertical:20,
    paddingHorizontal:10,
    height:170,
  },
  headerLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
  },
  headerLogoImage: {
    width: 100.6,
    height: 256.62,
    // marginTop: -50,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },

  subheaderView: {
    marginTop: 10,
    paddingBottom:10,
    marginHorizontal: 20,
    backgroundColor: '#FFF',
  },
  bgHeadeStyle: {
    width: width * 1,
    height: height * 0.45,
    marginTop: -30,
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  headerCartButton: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderColor: theme['light'].colors.lightBorderColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -25,
  },
  headerCartBadge: {
    backgroundColor: theme['light'].colors.primary,
    minWidth: 10,
    minHeight: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 5,
    zIndex: 1,
    padding: 3,
  },
  headerCartBadgeText: {
    fontSize: 8,
    color: theme['light'].colors.tertiary,
    borderRadius: 10,
    fontFamily: theme.font.regular,
  },
  headerCartButtonIcon: {
    marginTop: 6,
    marginLeft: -5,
    fontSize: 35,
    color: theme['light'].colors.primary,
  },
});
