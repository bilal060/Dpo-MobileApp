import { Booking, Explore, FPaymentHistory,  TruckIcon , FocusedBooking, FocusedExplore, FocusedHome, FocusedMessage, FocusedSetting, Home, Message, PaymentHistory, Setting, Truck, FTruckIcon } from "../assets/images";

export const customerRoutes = [
    {
      name: 'Home',
      key: 'home',
      icon: 'home',
      onPress: () => navigation.navigate('Home'),
      fontSize: 32,
      marginTop: -40,
      type: 'antdesign',
      img: Home,
      img2: FocusedHome,
    },
    {
      name: 'Cart',
      key: 'cart',
      icon: 'shopping-basket',
      onPress: () =>
        navigation.navigate('Booking', {
          screen: 'Booking',
          initial: false,
        }),
      // onPress: () =>  navigation.navigate('Cart'),
      fontSize: 30,
      type: 'fontisto',
      img: Booking,
      img2: FocusedBooking,
    },
    {
      name: 'Search',
      key: 'store',
      icon: 'search1',
      onPress: () =>
        navigation.navigate('Payment', {
          screen: 'Payment',
          initial: false,
        }),
      fontSize: 30,
      type: 'antdesign',
      img: PaymentHistory,
      img2: FPaymentHistory,
    },
    {
      name: 'Location',
      key: 'location',
      icon: 'location-outline',
      onPress: () => navigation.navigate('Chats'),
      fontSize: 30,
      type: 'ionicon',
      img: Message,
      img2: FocusedMessage,
    },
    {
      name: 'Profile',
      key: 'profile',
      icon: 'user',
      onPress: () => navigation.navigate('Profile'),
      fontSize: 30,
      type: 'antdesign',
      img: Setting,
      img2: FocusedSetting,
    },
  ];


  export const truckDriverRoutes = [
    {
      name: 'Home',
      key: 'home',
      icon: 'home',
      onPress: () => navigation.navigate('Home'),
      fontSize: 32,
      marginTop: -40,
      type: 'antdesign',
      img: Home,
      img2: FocusedHome,
      navigate:"Home"
    },
    {
      name: 'Cart',
      key: 'cart',
      icon: 'shopping-basket',
      onPress: () =>
        navigation.navigate('Booking', {
          screen: 'Booking',
          initial: false,
        }),
      // onPress: () =>  navigation.navigate('Cart'),
      fontSize: 30,
      type: 'fontisto',
      img: Booking,
      img2: FocusedBooking,
      navigate:"Booking"

    },
    {
        name: 'Search',
        key: 'store',
        icon: 'search1',
        onPress: () =>
          navigation.navigate('Payment', {
            screen: 'Payment',
            initial: false,
          }),
        fontSize: 30,
        type: 'antdesign',
        img:    TruckIcon ,
        img2: FTruckIcon,
        navigate:"Payment"
        
      },
    {
      name: 'Search',
      key: 'store',
      icon: 'search1',
      onPress: () =>
        navigation.navigate('Payment', {
          screen: 'Payment',
          initial: false,
        }),
      fontSize: 30,
      type: 'antdesign',
      img: Explore,
      img2: FocusedExplore,
      navigate:"Payment"
      
    },
    {
      name: 'Location',
      key: 'location',
      icon: 'location-outline',
      onPress: () => navigation.navigate('Chats'),
      fontSize: 30,
      type: 'ionicon',
      img: Message,
      img2: FocusedMessage,
      navigate:"Chats"

    },
    {
      name: 'Profile',
      key: 'profile',
      icon: 'user',
      onPress: () => navigation.navigate('Profile'),
      fontSize: 30,
      type: 'antdesign',
      img: Setting,
      img2: FocusedSetting,
      navigate:"Profile"

    },
  ];