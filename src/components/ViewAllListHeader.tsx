import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import {MainStackParamList} from '../types/navigation';
import IconC from './common/IconC';
import Text from './common/Text';

type Props = {
  nameCategory: string;
};

const ViewAllListHeader = ({nameCategory}: Props) => {
  const navigation =
    useNavigation<
      NativeStackScreenProps<MainStackParamList, 'ViewAllScreen'>['navigation']
    >();
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.itemsCenter,
        commonStyles.justifyBetween,
        commonStyles.footerMb,
      ]}>
      <IconC iconName="chevron-left" onPress={() => navigation.goBack()} />
      <Text
        textBaseColorType="black"
        textBaseType="headingMd"
        numberOfLines={1}
        ellipsizeMode="tail">
        View {nameCategory}
      </Text>
      <IconC iconName="more-horizontal-outline" />
    </View>
  );
};

export default ViewAllListHeader;
