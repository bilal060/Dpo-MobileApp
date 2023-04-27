import React, {Fragment} from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Icons from "../../assets/icons/CustomIcon";
import GlobalStyle from '../../assets/styling/GlobalStyle';
import {themes} from '../../theme/colors';
import MaskInput from 'react-native-mask-input';
import CText from '../cText/CText';
import CIcon from '../cIcon/CIcon';
TextInput.defaultProps = {
  ...(TextInput.defaultProps || {}),
  allowFontScaling: false,
};

const CInput = React.forwardRef((props, ref) => {
  const {
    inputContainerStyle,
    inputInnerContainerStyle,
    inputLabel,
    inputLabelStyle,

    type,

    leftIconName,
    toggleLeftIconFunc,
    leftIconButtonStyle,
    iconStyle,
    inputErrorStyle,
    error,
    toggleRightIconFunc,
    rightIconButtonStyle,
    rightIconName,
    rightButton,
    style,
    value,

    secureTextEntry = false,
    leftIconType,
    leftIconNAme,
    leftIconColor,
    leftIconeSize,
    rightIconType,
    rightIconeSize,
    rightIconeColor
  } = props;

  const renderLabel = () => {
    return (
      <CText style={[{...GlobalStyle.inputLabel, ...inputLabelStyle}]}>
        {inputLabel}
      </CText>
    );
  };

  const renderLeftIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={toggleLeftIconFunc}
        style={{
          ...GlobalStyle.inputLeftIconButton,
          ...leftIconButtonStyle,
        }}>
        <CIcon
          type={leftIconType}
          name={leftIconNAme}
          color={leftIconColor}
          size={leftIconeSize}
          style={{...GlobalStyle.inputIcon, ...iconStyle}}
        />
      </TouchableOpacity>
    );
  };

  const renderRightIcon = () => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={toggleRightIconFunc}
        style={{
          ...GlobalStyle.inputRightIconButton,
          ...rightIconButtonStyle,
        }}>
        <CIcon
          type={rightIconType}
          name={rightIconName}
          color={rightIconeColor}
          size={rightIconeSize}
          style={{...GlobalStyle.inputIcon, ...iconStyle}}
        />

        {/* <AntDesign
                    name={rightIconName}
                    style={{ ...GlobalStyle.inputIcon, ...iconStyle }}
                /> */}
      </TouchableOpacity>
    );
  };

  const renderErrorView = () => {
    return (
      <CText style={{...GlobalStyle.errorTextStyle, ...inputErrorStyle}}>
        {error}
      </CText>
    );
  };

  const renderInputView = () => {
    return (
      <MaskInput
        ref={ref}
        maskChar="x"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={themes['light'].colors.gray4}
        style={[{...GlobalStyle.inputStyle, ...style}]}
        autoCapitalize="none"
        value={value}
        {...props}
      />
    );
  };

  return (
    <View style={{...GlobalStyle.inputContainer, ...inputContainerStyle}}>
      {inputLabel ? renderLabel() : null}
      <View
        style={{
          ...GlobalStyle.inputInnerContainer,
          ...inputInnerContainerStyle,
          ...(error && GlobalStyle.errorBorder),
        }}>
        {leftIconType ? renderLeftIcon() : null}
        {type !== 'view' ? renderInputView() : null}
        {rightIconName ? renderRightIcon() : null}
      </View>
      {error ? renderErrorView() : null}
    </View>
  );
});

CInput.defaultProps = {
  inputContainerStyle: {},
  inputLabelStyle: {},
  iconButtonStyle: {},
  inputInnerContainerStyle: {},
  iconStyle: {},
  inputErrorStyle: {},
  toggleIconFunc: () => null,

  toggleRightIconFunc: () => null,
  rightButton: () => null,
  rightIconButtonStyle: {},
  rightIconName: '',

  toggleLeftIconFunc: () => null,
  leftIconButtonStyle: {},
  leftIconName: '',

  inputLabel: '',
  error: '',
};

export default React.memo(CInput);
