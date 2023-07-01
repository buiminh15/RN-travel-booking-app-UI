import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {ms, s, vs} from 'react-native-size-matters';
import {COLORS, SIZES, images} from '../../constants';
import {commonStyles} from '../styles/commonStyles';
import {Poke} from '../types/Poke';
import ImageC from './common/ImageC';
import Text from './common/Text';

const ViewAllItem = ({item}: {item: Poke}) => {
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
          source={images.plant6}
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
            {item.name}
          </Text>
          <View style={[commonStyles.row, commonStyles.itemsCenter]}>
            <Text textBaseColorType="primary" textBaseType="headingMd">
              $230
            </Text>
            <Text textBaseColorType="gray"> /night</Text>
          </View>
        </View>

        <Text numberOfLines={1} ellipsizeMode="tail" textBaseColorType="gray">
          892 Corben Alley
        </Text>

        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.gap,
          ]}>
          <View style={[commonStyles.row, commonStyles.gapSm]}>
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Icon
                  key={`rating-star-${index}`}
                  name="star"
                  width={24}
                  height={24}
                  fill={COLORS.yellow}
                />
              ))}
          </View>
          <Text textBaseColorType="black" textBaseType="headingMd">
            5
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ViewAllItem;

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
