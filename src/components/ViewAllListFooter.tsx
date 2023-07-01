import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Text from './common/Text';
import {commonStyles} from '../styles/commonStyles';

type Props = {
  isReachingEnd: boolean | undefined;
  isLoadingMore: boolean | undefined;
};

const ViewAllListFooter = ({isReachingEnd, isLoadingMore}: Props) => {
  return (
    <View style={[commonStyles.footerMb]}>
      {isLoadingMore && <ActivityIndicator size={'large'} />}
      {isReachingEnd && <Text textBaseColorType="black">No more data</Text>}
    </View>
  );
};

export default ViewAllListFooter;
