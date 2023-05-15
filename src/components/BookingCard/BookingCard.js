// Example of Collapsible/Accordion/Expandable List View in React Native
// https://aboutreact.com/collapsible-accordion-expandable-view/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './BookingCard.styles';
// import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

// import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

// import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
import {Profile} from '../../assets/images';
import ProgressiveImage from '../progressiveImage/ProgressiveImage';
import CText from '../cText/CText';
import CIcon from '../cIcon/CIcon';
import GlobalStyle from '../../assets/styling/GlobalStyle';

// Dummy content to show
// You can also use dynamic data by calling web service
const CONTENT = [
  {
    title: 'Terms and Conditions',
    content: `  The following terms and conditions, togethe with any referenced documents form a legal 
        agreement between you and your employer, employees,
        agents, contractors and any other entity on whose 
        behalf you accept these terms`,
  },
  {
    title: 'Privacy Policy',
    content: `A Privacy Policy agreement is the agreement where you specify if you collect personal data from your users,
       what kind of personal data you collect and what you do
       with that data.`,
  },
  {
    title: 'Return Policy',
    content: `  'Our Return & Refund Policy template lets you get 
        started with a Return and Refund Policy agreement. 
        This template is free to download and use. According to
        TrueShip study, over 60% of customers review a Return/Refund
        Policy before they make a purchasing decision.'`,
  },
];

//To make the selector (Something like tabs)
const SELECTORS = [
  {title: 'T&C', value: 0},
  {title: 'Privacy Policy', value: 1},
  {title: 'Return Policy', value: 2},
  {title: 'Reset all'},
];

const BookingCard = () => {
  // Default active selector
  const [activeSections, setActiveSections] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = sections => {
    // Setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    // Accordion header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    // Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{textAlign: 'center'}}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/*Code for Single Collapsible Ends*/}

        {/* <View
            style={{
              backgroundColor: '#000',
              height: 1,
              marginTop: 10,
            }}
          /> */}
        <TouchableOpacity onPress={toggleExpanded}>
          <View style={styles.header}>
            <ProgressiveImage
              source={Profile}
              style={{width: 40, height: 40}}
              resizeMode="contain"
            />
            <View>
              <CText style={styles.titleHeaindg}>Full Name</CText>
              <CText style={styles.nameHeaindg}>Alexander Franks</CText>
            </View>
            <View>
              <CText style={styles.titleHeaindg}>Slot Booked</CText>
              <CText style={styles.nameHeaindg}>1 Hour Ago</CText>
            </View>
            <View>
              <CIcon
                type="AntDesign"
                name={collapsed ? 'up' : 'down'}
                size={20}
                color="7D8695"
              />
            </View>
            {/*Heading of Single Collapsible*/}
          </View>
        </TouchableOpacity>
        {/*Content of Single Collapsible*/}
        <Collapsible collapsed={collapsed} align="center">
          <>
            <View style={[styles.header, {marginTop: -20}]}>
              <View>
                <CText style={styles.titleHeaindg}>Contact No.</CText>
                <CText style={styles.nameHeaindg}>+1 012 345 6789</CText>
              </View>
              <View>
                <CText style={styles.titleHeaindg}>Space Type</CText>
                <CText style={styles.nameHeaindg}>Truck Parking</CText>
              </View>
              <View>
                <CText style={styles.titleHeaindg}>Total Amount</CText>
                <CText style={styles.nameHeaindg}>$5</CText>
              </View>

              {/*Heading of Single Collapsible*/}
            </View>
            <View style={[styles.header, {marginTop: -20}]}>
              <View>
                <CText style={styles.titleHeaindg}>Booking From</CText>
                <CText style={styles.nameHeaindg}>Alexander Franks</CText>
              </View>
              <View>
                <CText style={styles.titleHeaindg}>Booking To</CText>
                <CText style={styles.nameHeaindg}>12:30 PM</CText>
              </View>
              <View>
                <CText style={styles.titleHeaindg}>Status</CText>
                                  <CText style={GlobalStyle.activeCard}>{'Active'}</CText>

              </View>

            </View>
          </>
        </Collapsible>
        {/* <View style={styles.multipleToggle}>
            <Text
              style={styles.multipleToggle__title}
            >
              Multiple Expand Allowed?
            </Text>
            <Switch
              value={multipleSelect}
              onValueChange={(multipleSelect) =>
                setMultipleSelect(multipleSelect)
              }
            />
          </View> */}

        {/*Code for Accordion/Expandable List starts here*/}
        {/* <Accordion
            activeSections={activeSections}
            // For any default active section
            sections={CONTENT}
            // Title and content of accordion
            touchableComponent={TouchableOpacity}
            // Which type of touchable component you want
            // It can be the following Touchables
            // TouchableHighlight, TouchableNativeFeedback
            // TouchableOpacity , TouchableWithoutFeedback
            expandMultiple={multipleSelect}
            // If you want to expand multiple at a time
            renderHeader={renderHeader}
            // Header Component(View) to render
            renderContent={renderContent}
            // Content Component(View) to render
            duration={400}
            // Duration for Collapse and expand
            onChange={setSections}
            // Setting the state of active sections
          /> */}
        {/*Code for Accordion/Expandable List ends here*/}
      </ScrollView>
    </View>
  );
};

export default BookingCard;
