import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Container} from '../../../../containers';
import {
  BookingCard,
  CInput,
  CList,
  CText,
  ProgressiveImage,
  SpaceCard,
} from '../../../../components';
import {
  Banner,
  Car,
  Carrier,
  ChargingStation,
  Crane,
  Forklift,
  GasStation,
  Inventory,
  PitStop,
  Profile,
  Towtruck,
  Van,
  Warehouse,
  Wrench,
} from '../../../../assets/images';
import Styles from './Explore.style';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';

import {SliderBox} from 'react-native-image-slider-box';

import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL_IMG} from '../../../../config/webservices';
import {get_all_category} from '../../../../redux/actions/Root.Action';
import SkeletonPlaceholderComponent from '../../../../components/SkeletonPlaceholder/SkeletonPlaceholder';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Explore = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [activeImg, setActiveImg] = useState(0);
  const [categories, setCategories] = useState([]);

  var isActive;

  const reduxState = useSelector(({auth, language, root}) => {
    console.log('🚀 ~ file: Explore.js:53 ~ reduxState ~ root:', root);
    return {
      userRole: auth?.user?.role,
      user: auth?.user,
    };
  });
  var convertedFilePath = `${BASE_URL_IMG}${reduxState?.user?.photo}`.replace(
    /\\/g,
    '/',
  );

  const images = [
    Banner,
    Banner,
    Banner,
    Banner,
    // Local image
  ];
  const listData = [
    {
      img: Van,
      title: 'Truck Parking',
    },
    {
      img: Car,
      title: 'Car Parking',
    },
    {
      img: Inventory,
      title: 'Temporary Storage',
    },
    {
      img: Inventory,
      title: 'Storage Unit',
    },
    {
      img: Warehouse,
      title: 'Warehouse',
    },
    {
      img: Carrier,
      title: 'Container Storage',
    },
    {
      img: Wrench,
      title: 'Mechanic',
    },
    {
      img: Towtruck,
      title: 'Tow Truck',
    },
    {
      img: Forklift,
      title: 'Lifter Service',
    },
    {
      img: Crane,
      title: 'Crane Service',
    },
    {
      img: GasStation,
      title: 'Fuel Station',
    },
    {
      img: ChargingStation,
      title: 'EV Charging Station',
    },
    // {
    //     img: PitStop,
    //     title: 'Tyre Shop',
    //   },
  ];
  const renderItem = ({item}) => {
    console.log('🚀 ~ file: Explore.js:117 ~ renderItem ~ item:', item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('MySpace', item)}
        style={Styles.iconView}>
        <ProgressiveImage
          style={Styles.icon}
          source={item?.img}
          resizeMode="contain"
        />
        <CText style={Styles.iconTitle}>{item?.title}</CText>
      </TouchableOpacity>
    );
  };

  const renderBooking = ({item}) => {
    return <BookingCard />;
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = () => {
    dispatch(get_all_category('', callBack));
  };
  const callBack = res => {
    console.log('🚀 ~ file: Explore.js:148 ~ callBack ~ res:', res?.data);
    const subcategories = res?.data.docs.flatMap(doc => doc.subcategories);

    const combinedArray = subcategories.map(costItem => {
      const match = listData.find(listItem => listItem.title === costItem.name);
      return {
        name: costItem.name,
        _id: costItem?._id,
        title: match ? match.title : '',
        img: match ? match.img : '',
      };
    });
    setCategories(combinedArray);
  };
  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      // loading={true}

      scrollView>
      <View style={Styles.container}>
        
          <View style={[GlobalStyle.row, Styles.headerView]}>
            <CInput
              placeholder={'Sort By'}
              // value={values.fuel}
              // onChangeText={handleChange('fuel')}
              // error={errors.fuel}
              sec
              inputInnerContainerStyle={Styles.inputInnerContainerStyle}
              //   type="view"
              //   leftIconNAme={FuelIcon}
              returnKeyType="next"
            />
            <ProgressiveImage
              style={Styles.profileImage}
              source={!reduxState?.user ? Profile : {uri: convertedFilePath}}
              resizeMode="contain"
            />
          </View>
          <SliderBox
            images={images}
            onCurrentImagePressed={index => {
              // setActiveImg(index);
              isActive = activeImg === index;
            }}
            currentImageEmitter={index => {
              setActiveImg(index);
              isActive = activeImg - 1 === index;
              console.log(
                '🚀 ~ file: Explore.js:134 ~ Explore ~ isActive:',
                isActive,
                index,
                activeImg - 1,
              );

              console.warn(`current pos is: ${index}`);
            }}
            resizeMethod={'resize'}
            resizeMode={'cover'}
            dotColor="rgba(255,255,225,1)"
            inactiveDotColor="rgba(63,128,225,1)"
            activeDotColor="rgba(255,255,225,1)"
            paginationBoxVerticalPadding={0}
            paginationBoxStyle={{
              position: 'absolute',
              left: 0,
              bottom: 5,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: isActive ? 25 : 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: -5,
              padding: 0,
              margin: 0,
              backgroundColor: '#000',
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: '90%',
              marginTop: 5,
              alignSelf: 'flex-start',
            }}
            imageLoadingColor="#2196F3"
          />
          <CText style={Styles.mainHeading}>All Categories</CText>
          {/* <SkeletonPlaceholderComponent
          loader={true}
          SkelonStyle={
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                  width={200}
                  height={20}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  width={150}
                  height={20}
                  borderRadius={4}
                  marginTop={10}
                />  
                <SkeletonPlaceholder.Item
                  width={100}
                  height={20}
                  borderRadius={4}
                  marginTop={10}
                />
                {/* Add more skeleton items as needed */}
              {/* </SkeletonPlaceholder>
            </View> */}
          {/* }> */}
          <CList
            style={Styles.list}
            //   horizontal
            numColumns={4}
            data={categories}
            // loading={reduxState.loading}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            emptyOptions={{
              // icon: require('../../assets/images/empty.png'),
              text: 'Store not found',
            }}
          />
          {/* </SkeletonPlaceholderComponent> */}
      </View>
    </Container>
  );
};

export default Explore;

const styles = StyleSheet.create({});
