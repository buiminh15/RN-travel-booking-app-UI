import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import FastImage from 'react-native-fast-image';
import {ms, s, vs} from 'react-native-size-matters';
import {COLORS, SIZES, images} from '../../constants';
import {TAG_DATA} from '../../constants/data';
import {commonStyles} from '../styles/commonStyles';
import {Hotel} from '../types/Hotel';
import {MainStackParamList} from '../types/navigation';
import Tag, {TagProps} from './Tag';
import IconC from './common/IconC';
import Text from './common/Text';

const renderItem = ({item}: {item: TagProps}) => {
  return <Tag name={item.name} iconName={item.iconName} />;
};

const DetailListHeader = ({item}: {item: Hotel}) => {
  const [limitTextNum, setLimitTextNum] = useState(100);

  const navigation =
    useNavigation<
      NativeStackScreenProps<MainStackParamList, 'DetailScreen'>['navigation']
    >();
  return (
    <View style={[commonStyles.gapLg]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.itemsCenter,
          commonStyles.justifyBetween,
        ]}>
        <IconC iconName="chevron-left" onPress={() => navigation.goBack()} />
        <Text textBaseColorType="black" textBaseType="headingLg">
          Detail
        </Text>
        <IconC iconName="more-horizontal-outline" />
      </View>
      <View style={[styles.imageContainer]}>
        <FastImage
          source={images.bannerBg}
          resizeMode="cover"
          style={[styles.image]}
        />
        <TouchableOpacity
          style={[
            styles.favContainer,
            commonStyles.shadow,
            commonStyles.itemsCenter,
            commonStyles.justifyCenter,
          ]}>
          <Icon name="heart" width={24} height={24} fill={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={TAG_DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          // eslint-disable-next-line @typescript-eslint/no-shadow
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={[commonStyles.gap]}
        />
      </View>
      {/* title */}
      <View style={[commonStyles.gapSm]}>
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.justifyBetween,
          ]}>
          <Text textBaseColorType="black" textBaseType="headingLg">
            {item.title}
          </Text>
          <View style={[commonStyles.row, commonStyles.itemsCenter]}>
            <Text textBaseColorType="primary" textBaseType="headingLg">
              ${item.price}
            </Text>
            <Text textBaseColorType="gray" textBaseType="md">
              {' '}
              /night
            </Text>
          </View>
        </View>

        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.gapSm,
          ]}>
          <Icon name="pin" height={24} width={24} fill={COLORS.primary} />
          <Text textBaseColorType="gray">{item.address}</Text>
        </View>
      </View>

      {/* Description */}
      <View style={[commonStyles.gap]}>
        <Text textBaseType="headingMd" textBaseColorType="black">
          Description
        </Text>
        <View style={[commonStyles.row, commonStyles.gapSm]}>
          <Text textBaseColorType="gray">
            {item.description.substring(0, limitTextNum)}
            {limitTextNum === 100 && (
              <Text
                textBaseColorType="primary"
                onPress={() => setLimitTextNum(item.description.length - 1)}>
                {' '}
                Read More ...
              </Text>
            )}
            {limitTextNum !== 100 && (
              <Text
                textBaseColorType="primary"
                onPress={() => setLimitTextNum(100)}>
                {' '}
                Read Less
              </Text>
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DetailListHeader;

const styles = StyleSheet.create({
  imageContainer: {
    height: vs(SIZES.height / 4),
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: ms(SIZES.radius),
  },
  favContainer: {
    width: s(30),
    height: vs(30),
    borderRadius: s(100),
    backgroundColor: COLORS.white,

    position: 'absolute',
    top: s(20),
    right: s(20),
  },
});
