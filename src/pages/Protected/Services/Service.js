import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Container} from '../../../containers';
import {CButton, CList, CPagination, CText} from '../../../components';
import Styles from './Service.style';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
import {themes} from '../../../theme/colors';
import {serviceData} from '../../../utils/asyncStorage/Constants';

const Service = ({navigation}) => {
  const headerProps = {
    ProgressiveImageHeader: false,
    headerLeft: true,
    backBtnColor: themes.light.colors.fontLowColor,
    headerTransparentStyle: Styles.headerTransparentStyle,
    headerTitleStyle: Styles.headerTitleStyle,
    headerTitle: 'Book a Service',
    headerRight: true,
  };

  
  return (
    <Container bottomSpace edges={['left', 'right']} headerProps={headerProps}>
      <View style={Styles.container}>
        <CPagination />
        <View style={{paddingHorizontal: 30, paddingVertical: 25}}>
          <CText style={Styles.heading}>Services</CText>
          <CText style={Styles.subheading}>
            Checkout our services provided by one expert vendors and select the
            needed one.
          </CText>
        </View>
        {serviceData &&
          serviceData.map(({title}) => (
            <CButton
              onPress={() => navigation.navigate(title)}
              buttonStyle={Styles.buttonStyle}
              title={title}
              buttonText={Styles.buttonText}
              iconType="left"
              iconColor={themes.light.colors.secondary2dark}
              iconStyle={Styles.iconStyle}
              iconSize={25}
            />
          ))}
      </View>
    </Container>
  );
};

export default Service;

const styles = StyleSheet.create({});
