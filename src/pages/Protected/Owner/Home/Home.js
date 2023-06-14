// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React, {useEffect, useMemo, useState} from 'react';
// import {Container} from '../../../../containers';
// import {
//   BookingCard,
//   CList,
//   CText,
//   ProgressiveImage,
//   SpaceCard,
// } from '../../../../components';
// import {
//   Cart,
//   Events,
//   Google,
//   Hub,
//   Marketplace,
//   Notification,
//   Profile,
//   Services,
//   filterIcon,
// } from '../../../../assets/images';
// import Styles from './Home.styles';
// import GlobalStyle from '../../../../assets/styling/GlobalStyle';
// import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
// import DatePicker from 'react-native-modern-datepicker';
// import {useDispatch, useSelector} from 'react-redux';
// import {
//   getAllBooking,
//   getAllSpaces,
//   getAllUserSpaces,
// } from '../../../../redux/actions/Root.Action';

// const Home = ({navigation}) => {
//   const dispatch = useDispatch();
//   const [spaces, setSpaces] = useState([]);
//   console.log("🚀 ~ file: Home.js:35 ~ Home ~ spaces:", spaces)
//   const reduxState = useSelector(({auth, language, root}) => {
//     return {
//       spaces: root?.userSpaces,
//       userRole: auth?.user?.role,
//       loading: root?.userSpacesLoading,
//       userId: auth?.user?._id,
//     };
//   });

//   useEffect(() => {
//     async function fetchData() {
//       console.log('=============', 1);
//       dispatch(getAllUserSpaces(reduxState?.userId, callBack));
//       // dispatch(getAllBooking(reduxState?.userId, callBack));

//       // You can await here
//       // ...
//     }
//     fetchData();
//   }, []);
//   const callBack = res => {
//     setSpaces(res?.spaces);
//   };

//
//   const headerProps = {
//     headerTitle: 'Home',
//     backButtonIcon: false,
//     ProgressiveImageHeader: true,
//     headerRight: true,
//     headerRightImg: false,
//     headerRightImg: Profile,
//     rightPress: () => navigation.navigate('Profile'),
//   };
//   const listData = [
//     {
//       img: Services,
//       title: 'Book A Service',
//       onPress: () => navigation.navigate('Service'),
//     },
//     {
//       img: Marketplace,
//       title: 'Marketplace',
//     },
//     {
//       img: Hub,
//       title: 'HUB',
//     },
//     {
//       img: Events,
//       title: 'Events',
//     },
//   ];
//   const renderItem = ({item}) => {
//     return <SpaceCard />;
//   };
//   const renderBooking = ({item}) => {
//     return <BookingCard />;
//   };
//   return (
//     <Container
//       bottomSpace
//       edges={['left', 'right']}
//       headerProps={headerProps}
//       scrollView>
//       <View style={Styles.container}>
//         <CText style={Styles.mainHeading}>My Spaces</CText>
//         <View style={GlobalStyle.row}>
//           <View style={[GlobalStyle.row]}>
//             <CText style={Styles.subHeading}>Total Spaces:</CText>
//             <CText style={Styles.spaceTotal}>{spaces?.length}</CText>
//           </View>
//           <View>
//             <CText style={Styles.view}>View All</CText>
//           </View>
//         </View>
//         <CList
//           style={Styles.list}
//           horizontal
//           data={spaces}
//           extraData={spaces}
//           // loading={reduxState.loading}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//           emptyOptions={{
//             // icon: require('../../assets/images/empty.png'),
//             text: 'Store not found',
//           }}
//         />
//         <View>
//           <View
//             style={[
//               GlobalStyle.row,
//               {alignItems: 'center', alignContent: 'center'},
//             ]}>
//             <CText style={Styles.mainHeading}>Booking History</CText>

//             <CText style={Styles.view}>View All</CText>
//           </View>

//           {/* <CList
//             style={Styles.list}
//             data={listData}
//             // loading={reduxState.loading}
//             renderItem={renderBooking}
//             keyExtractor={(item, index) => index.toString()}
//             emptyOptions={{
//               // icon: require('../../assets/images/empty.png'),
//               text: 'Store not found',
//             }}
//           /> */}
//         </View>
//         <View
//           style={[
//             GlobalStyle.row,
//             {alignItems: 'center', alignContent: 'center', marginVertical: 10},
//           ]}>
//           <CText style={Styles.mainHeading}>My Earnings</CText>

//           <ProgressiveImage
//             source={filterIcon}
//             resizeMode="contain"
//             style={{width: 25, height: 25, marginTop: 10}}
//           />
//         </View>
//         <View style={Styles.BarChart}>
//           {/* <BarChart
//             width={330}
//             data={barData}
//             barWidth={14}
//             isAnimated={true}
//             height={150}
//             maxValue={1000}
//             initialSpacing={3}
//             // stepHeight={10}
//             // stepValue={6}
//             // spacing={10}
//             noOfSections={4}
//             frontColor="lightgray"
//             yAxisThickness={0}
//             xAxisThickness={0}
//           /> */}
//         </View>
//         <View
//           style={[
//             GlobalStyle.row,
//             {alignItems: 'center', alignContent: 'center', marginVertical: 10},
//           ]}>
//           <>
//             <CText style={Styles.mainHeading}>Calendar </CText>
//           </>
//           <>
//             {/* <CText style={[Styles.subHeading ,{flex:1 , marginLeft:20, paddingTop  :15}]}>May, 2023</CText> */}
//           </>

//           {/* <ProgressiveImage
//             source={filterIcon}
//             resizeMode="contain"
//             style={{width: 25, height: 25, marginTop: 10}}
//           /> */}
//         </View>
//         <View style={Styles.Calender}>
//           {/* <DatePicker
//             options={{
//               backgroundColor: '#FFFFF',
//               textHeaderColor: '#707070',
//               textDefaultColor: '#707070',
//               selectedTextColor: '#fff',
//               mainColor: '#0064FA',
//               textSecondaryColor: '#707070',
//               borderColor: 'rgba(122, 146, 165, 0.1)',
//             }}
//             current="2023-05-09"
//             selected="2023-05-09"
//             mode="calendar"
//             minuteInterval={30}
//             style={{borderRadius: 10}}
//           /> */}
//         </View>
//       </View>
//     </Container>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../../../../containers';

import {
  BookingCard,
  CList,
  CText,
  ProgressiveImage,
  SpaceCard,
} from '../../../../components';
import {
  Profile,
  filterIcon,} from '../../../../assets/images';
import Styles from './Home.styles';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import DatePicker from 'react-native-modern-datepicker';
import {login, verifyOTP} from '../../../../redux/actions/Auth.action';
import { getSpacsss } from '../../../../redux/actions/Root.Action';


const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [spaces, setSpaces] = useState([]);
  console.log('🚀 ~ file: Home.js:35 ~ Home ~ spaces:', spaces);
  const reduxState = useSelector(({auth, language, root}) => {
    console.log('🚀 ~ file: Home.js:260 ~ reduxState ~ auth:', auth);
    return {
      spaces: root?.userSpaces,
      userRole: auth?.user?.role,
      loading: root?.userSpacesLoading,
      userId: auth?.user?._id,
    };
  });
  console.log("🚀 ~ file: Home.js:262 ~ reduxState ~ reduxState:", reduxState?.userId)



  useEffect(() => {
    dispatch(getSpacsss(reduxState?.userId , callBack))
    // dispatch(getAllBooking);
  }, []);

  const callBack = res => {
    setSpaces(res?.spaces);
  };

  const headerProps = {
    headerTitle: 'Home',
    backButtonIcon: false,
    ProgressiveImageHeader: true,
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Profile,
    rightPress: () => navigation.navigate('Profile'),
  };

  const renderItem = ({item}) => {
    return <SpaceCard />;
  };

  const renderBooking = ({item}) => {
    return <BookingCard />;
  };
  const barData = [
    {value: 500, label: 'Jan', frontColor: '#177AD5'},
    {value: 700, label: 'Feb', frontColor: '#177AD5'},
    {value: 630, label: 'Mar', frontColor: '#177AD5'},
    {value: 270, label: 'Apr', frontColor: '#177AD5'},
    {value: 520, label: 'May', frontColor: '#177AD5'},
    {value: 710, label: 'June', frontColor: '#177AD5'},
    {value: 180, label: 'July', frontColor: '#177AD5'},
    {value: 950, label: 'Aug', frontColor: '#177AD5'},
    {value: 800, label: 'Sep', frontColor: '#177AD5'},
    {value: 450, label: 'Oct', frontColor: '#177AD5'},
    {value: 830, label: 'Nov', frontColor: '#177AD5'},
    {value: 100, label: 'Dec', frontColor: '#177AD5'},
  ];

  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      headerProps={headerProps}
      scrollView>
      <View style={Styles.container}>
        <CText style={Styles.mainHeading}>My Spaces</CText>
        <View style={GlobalStyle.row}>
          <View style={[GlobalStyle.row]}>
            <CText style={Styles.subHeading}>Total Spaces:</CText>
            <CText style={Styles.spaceTotal}>{spaces?.length}</CText>
          </View>
          <View>
            <CText style={Styles.view}>View All</CText>
          </View>
        </View>
        <CList
          style={Styles.list}
          horizontal
          data={spaces}
          extraData={spaces}
          // loading={reduxState.loading}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Store not found',
          }}
        />
        <View
          style={[
            GlobalStyle.row,
            {alignItems: 'center', alignContent: 'center'},
          ]}>
          <CText style={Styles.mainHeading}>Booking History</CText>

          <CText style={Styles.view}>View All</CText>
        </View>
        <CList
          style={Styles.list}
          data={spaces}
          extraData={spaces}
          // loading={reduxState.loading}
          renderItem={renderBooking}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Store not found',
          }}
        />
        <View
          style={[
            GlobalStyle.row,
            {alignItems: 'center', alignContent: 'center', marginVertical: 10},
          ]}>
          <CText style={Styles.mainHeading}>My Earnings</CText>

          <ProgressiveImage
            source={filterIcon}
            resizeMode="contain"
            style={{width: 25, height: 25, marginTop: 10}}
          />
        </View>
        <View style={Styles.BarChart}>
          <BarChart
            width={330}
            data={barData}
            barWidth={14}
            isAnimated={true}
            height={150}
            maxValue={1000}
            initialSpacing={3}
            // stepHeight={10}
            // stepValue={6}
            // spacing={10}
            noOfSections={4}
            frontColor="lightgray"
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </View>
        <View style={Styles.Calender}>
          <DatePicker
            options={{
              backgroundColor: '#FFFFF',
              textHeaderColor: '#707070',
              textDefaultColor: '#707070',
              selectedTextColor: '#fff',
              mainColor: '#0064FA',
              textSecondaryColor: '#707070',
              borderColor: 'rgba(122, 146, 165, 0.1)',
            }}
            current="2023-05-09"
            selected="2023-05-09"
            mode="calendar"
            minuteInterval={30}
            style={{borderRadius: 10}}
          />
        </View>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
