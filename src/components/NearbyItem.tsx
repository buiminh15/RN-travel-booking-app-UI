import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {COLORS, SIZES, images} from '../../constants';
import {commonStyles} from '../styles/commonStyles';
import {Hotel} from '../types/Hotel';
import Text from './common/Text';
import {s, vs} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';

const NearbyItem = ({item}: {item: Hotel}) => {
  return (
    <TouchableOpacity style={[styles.container, commonStyles.shadow]}>
      <View style={[styles.imageContainer]}>
        <FastImage source={images.plant1} style={[styles.image]} />
      </View>

      <TouchableOpacity
        style={[
          styles.favContainer,
          commonStyles.shadow,
          commonStyles.itemsCenter,
          commonStyles.justifyCenter,
        ]}>
        <Icon name="heart" width={24} height={24} fill={COLORS.primary} />
      </TouchableOpacity>
      <View style={[styles.contentContainer]}>
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.justifyBetween,
          ]}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            textBaseColorType="black"
            style={[styles.text]}>
            {item.title}
          </Text>
          <View
            style={[
              commonStyles.row,
              commonStyles.itemsCenter,
              commonStyles.gapSm,
            ]}>
            <Icon name="star" width={16} height={16} fill={COLORS.yellow} />
            <Text textBaseColorType="black" textBaseType="headingSm">
              5.0
            </Text>
          </View>
        </View>

        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          textBaseColorType="gray"
          textBaseType="sm">
          {item.address}
        </Text>
        <View style={[commonStyles.row, commonStyles.itemsCenter]}>
          <Text textBaseColorType="primary" textBaseType="headingMd">
            ${item.price}
          </Text>
          <Text textBaseColorType="gray"> /night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyItem;

const styles = StyleSheet.create({
  container: {
    width: s(SIZES.width / 2),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    width: '100%',
    height: vs(SIZES.padding * 7),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    width: s(100),
  },
  contentContainer: {
    paddingHorizontal: s(SIZES.font),
    paddingVertical: vs(SIZES.base),
  },

  favContainer: {
    width: s(30),
    height: vs(30),
    borderRadius: s(100),
    backgroundColor: COLORS.white,

    position: 'absolute',
    top: s(10),
    right: s(10),
  },
});
