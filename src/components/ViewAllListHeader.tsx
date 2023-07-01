import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import {MainStackParamList} from '../types/navigation';
import IconC from './common/IconC';
import Text from './common/Text';
import {usePaginateHotels} from '../hooks/usePaginateHotel';
import {URL_PATH} from '../configuaration/swr';

type Props = {
  nameCategory: string;
};

const ViewAllListHeader = ({nameCategory}: Props) => {
  const navigation =
    useNavigation<
      NativeStackScreenProps<MainStackParamList, 'ViewAllScreen'>['navigation']
    >();

  const {mutate, hotels} = usePaginateHotels(URL_PATH.POKEMON, 1);
  const handleCache = () => {
    mutate(undefined);
    console.log('📢 [ViewAllListHeader.tsx:25]', hotels.length);
  };
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
      <IconC iconName="more-horizontal-outline" onPress={handleCache} />
    </View>
  );
};

export default ViewAllListHeader;
