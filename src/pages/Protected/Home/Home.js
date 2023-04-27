import {StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from '../../../containers';
import {CList, CText, ProgressiveImage} from '../../../components';
import {
  Cart,
  Events,
  Google,
  Hub,
  Marketplace,
  Profile,
  Services,
} from '../../../assets/images';
import Styles from './Home.styles';
import GlobalStyle from '../../../assets/styling/GlobalStyle';
const Home = ({navigation}) => {
  const headerProps = {
    headerTitle: 'Store',
    showCart: true,
    ProgressiveImageHeader: false,
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
      <TouchableOpacity onPress={item.onPress} style={{flexDirection: 'column', alignItems: 'center'}}>
        <View style={Styles.menu}>
          <ProgressiveImage
            source={item.img}
            style={{height: 40, width: 40}}
            resizeMode={'contain'}
          />
        </View>
        <CText style={Styles.menuName}>{item?.title}</CText>
      </TouchableOpacity>
    );
  };
  return (
    <Container
      bottomSpace
      edges={['left', 'right']}
      //  headerProps={headerProps}
    >
      <View style={Styles.container}>
        <View style={Styles.headerContainer}>
          <ProgressiveImage
            source={Profile}
            style={{height: 40, width: 40}}
            resizeMode={'contain'}
          />
          <ProgressiveImage
            source={Cart}
            style={{height: 40, width: 40}}
            resizeMode={'contain'}
          />
        </View>
        <CText style={Styles.mainHeading}>Welcome </CText>
        <CText style={Styles.subHeading}>What do you need to do? </CText>
        <CList
          style={Styles.list}
          numColumns={2}
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
