import React, {Fragment} from 'react';
import {TouchableOpacity, ActivityIndicator, Animated} from 'react-native';
import styles from './CButtonTrans.style';
import {themes} from '../../theme/colors';
import CIcon from '../cIcon/CIcon';
import { useTranslation } from 'react-i18next';
// import Icon from '../../assets/icons/CustomIcon';

const CButtonTrans = props => {
  const {t,} = useTranslation();

  const {
    title,
    children,
    loading,
    disabled,
    loaderProps,
    buttonText,
    activeOpacity,
    onPress,
    buttonStyle,
    theme,
    colorType,
    type,
    iconType = 'custom',
    iconName,
    iconStyle = {},
    iconSize=22,
    iconColor =themes.light.colors.tertiary
  } = props;

  let backgroundColor = colorType;
  let borderColor = colorType;
  let textColor = colorType;

  if (type === 'without_outline') {
    backgroundColor = 'tertiary';
  } else if (type === 'outline') {
    backgroundColor = 'secondary';
  } else {
    textColor = 'tertiary';
  }
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.buttonStyle,
        {color: '#0064FA'},
        (disabled || loading) && {opacity: 0.5},
        buttonStyle,
      ]}>
      
      {title ? (
        <Fragment>
          <Animated.Text
            style={[
              styles.buttonText,
              buttonText,
            ]}>
            {t(title)}
          </Animated.Text>
          {iconType === 'custom' && iconName
            ? null
            : null}
        </Fragment>
      ) : (
        children
      )}
      
      {loading ? (
        <ActivityIndicator {...loaderProps} style={{marginLeft: 10}} />
      ) : null}
    </TouchableOpacity>
  );
};

CButtonTrans.defaultProps = {
  title: '',
  onPress: () => null,
  colorType: themes.light.colors.secondary4,
  type: 'normal',
  activeOpacity: 0.5,
  loading: false,
  disabled: false,
  loaderProps: {
    size: 20,
    color: themes['light'].colors.tertiary,
  },
};

export default React.memo(CButtonTrans);
