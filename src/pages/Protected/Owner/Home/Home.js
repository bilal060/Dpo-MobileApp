import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from '../../../../containers';
import {CList, CText, ProgressiveImage, SpaceCard} from '../../../../components';
import {
  Cart,
  Events,
  Google,
  Hub,
  Marketplace,
  Notification,
  Profile,
  Services,
} from '../../../../assets/images';
import Styles from './Home.styles';
import GlobalStyle from '../../../../assets/styling/GlobalStyle';
const Home = ({navigation}) => {
  const headerProps = {
    headerTitle: 'Home',
    backButtonIcon: false,
    ProgressiveImageHeader: true,
    headerRight: true,
    headerRightImg: false,
    headerRightImg: Notification,
  };
  const listData = [
    {
      img: Services,
      title: 'Book A Service',
      onPress: () => navigation.navigate('Service'),
    },
    {
      img: Marketplace,
      title: 'Marketplace',
    },
    {
      img: Hub,
      title: 'HUB',
    },
    {
      img: Events,
      title: 'Events',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <SpaceCard />
      // <TouchableOpacity
      //   onPress={item.onPress}
      //   style={{flexDirection: 'column', alignItems: 'center'}}>
      //   <View style={Styles.menu}>
      //     <ProgressiveImage
      //       source={item.img}
      //       style={{height: 40, width: 40}}
      //       resizeMode={'contain'}
      //     />
      //   </View>
      //   <CText style={Styles.menuName}>{item?.title}</CText>
      // </TouchableOpacity>
    );
  };
  return (
    <Container bottomSpace edges={['left', 'right']} headerProps={headerProps}>
      <View style={Styles.container}>
        <CText style={Styles.mainHeading}>My Spaces</CText>
        <View style={GlobalStyle.row}>
          <View style={[GlobalStyle.row , {alignItems:"center" , alignContent:"center"}]}>
            <CText style={Styles.subHeading}>Total Spaces:</CText>
            <CText style={Styles.spaceTotal}>205</CText>
          </View>
          <View >
            <CText style={Styles.view}>View All</CText>
          </View>
        </View>
        <CList
          style={Styles.list}
          // numColumns={2}
          horizontal
          contentContainerStyle={[GlobalStyle.list, {marginBottom: 15}]}
          data={listData}
          // loading={reduxState.loading}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/empty.png'),
            text: 'Store not found',
          }}
          // onRefreshLoading={reduxState.loading}
          // onRefreshHandler={() => onRefreshHandler()}
          // onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          maxToRenderPerBatch={10}
          windowSize={10}
        />
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
