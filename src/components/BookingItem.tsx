import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES, images} from '../../constants';
import {ms, s, vs} from 'react-native-size-matters';
import {commonStyles} from '../styles/commonStyles';
import ImageC from './common/ImageC';
import Text from './common/Text';
import {Schedule} from '../types/Hotel';
import {Icon} from 'react-native-eva-icons';

const BookingItem = ({item}: {item: Schedule}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        commonStyles.shadow,
        commonStyles.row,
        commonStyles.gap,
      ]}>
      <View style={[styles.imageContainer]}>
        <ImageC
          roundedType="sm"
          source={images.plant1}
          style={[styles.image]}
        />
      </View>

      <View style={[styles.contentContainer, commonStyles.justifyBetween]}>
        <View
          style={[
            commonStyles.row,
            commonStyles.justifyBetween,
            commonStyles.itemsCenter,
          ]}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[styles.text]}
            textBaseType="headingMd"
            textBaseColorType="black">
            {item.title}
          </Text>
          <View style={[commonStyles.row, commonStyles.itemsCenter]}>
            <Text textBaseColorType="primary" textBaseType="headingMd">
              ${item.price}
            </Text>
            <Text textBaseColorType="gray"> /night</Text>
          </View>
        </View>

        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.gapSm,
          ]}>
          <Icon
            name="pin-outline"
            width={20}
            height={20}
            fill={COLORS.primary}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            textBaseColorType="gray"
            textBaseType="sm">
            {item.address}
          </Text>
        </View>
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.gapSm,
          ]}>
          <Icon
            name="calendar-outline"
            width={20}
            height={20}
            fill={COLORS.primary}
          />
          <Text textBaseColorType="gray" textBaseType="sm">
            {item.scheduledDate}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookingItem;

const styles = StyleSheet.create({
  container: {
    height: vs(SIZES.padding * 4),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    marginBottom: vs(10),
    padding: ms(SIZES.font),
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  contentContainer: {
    flex: 2,
  },
  text: {
    width: s(100),
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
