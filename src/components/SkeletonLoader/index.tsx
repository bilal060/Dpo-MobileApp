import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {CustomViewStyle} from 'react-native-skeleton-content-nonexpo/lib/Constants';

type Props = {
  loading: boolean;
  layout: CustomViewStyle[];
  children: React.ReactChild;
  isAtom?: boolean;
};
export const SkeletonLoader: FC<Props> = ({
  loading,
  layout,
  children,
  isAtom,
}) => {
  return (
    <SkeletonContent
      isLoading={loading}
      layout={layout}
      containerStyle={[styles.container, isAtom && {flex: undefined}] as any}>
      {children}
    </SkeletonContent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
  },
});
