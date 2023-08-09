import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const SkeletonPlaceholderComponent = ({layout, isAtom , SkelonStyle, loading, children}) => {
  return (
    <View style={styles.container}>
      <ShimmerPlaceHolder
        autoRun={true}
        visible={loading}
        style={styles.skeleton}
      >
        {children}
      </ShimmerPlaceHolder>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skeleton: {
    width: 200,
    height: 30,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  }
})
export default SkeletonPlaceholderComponent
