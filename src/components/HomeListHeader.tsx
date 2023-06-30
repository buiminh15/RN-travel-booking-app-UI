import React from 'react';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-eva-icons';
import {ms, s} from 'react-native-size-matters';
import {COLORS, SIZES} from '../../constants';
import {commonStyles} from '../styles/commonStyles';
import IconC from './common/IconC';
import Text from './common/Text';
import TextInput from './common/TextInput';

const HomeListHeader = () => {
  return (
    <View style={[commonStyles.gap]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.itemsCenter,
          commonStyles.justifyBetween,
        ]}>
        <View>
          <Text textBaseColorType="gray" textBaseType="md">
            Current location
          </Text>
          <View
            style={[
              commonStyles.row,
              commonStyles.itemsCenter,
              commonStyles.gapSm,
            ]}>
            <Icon name="pin" width={24} height={24} fill={COLORS.primary} />
            <Text textBaseType="headingMd" textBaseColorType="black">
              {' '}
              Wallace, Australia
            </Text>
            <TouchableOpacity>
              <Icon
                name="chevron-down"
                width={30}
                height={30}
                fill={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </View>

        <IconC iconName="bell" />
      </View>
      <View
        style={[commonStyles.row, commonStyles.itemsCenter, commonStyles.gap]}>
        <TextInput
          placeholder="Search Hotel"
          placeholderTextColor={COLORS.gray}
          maxLength={50}
          iconName="search"
          containerStyle={[styles.textInputContainer, commonStyles.flex1]}
          onPress={() => console.log('test')}
        />
        <Pressable
          style={[
            styles.optionBtn,
            commonStyles.itemsCenter,
            commonStyles.justifyCenter,
          ]}>
          <Icon name="options-2" width={24} height={24} fill={COLORS.white} />
        </Pressable>
      </View>
    </View>
  );
};

export default HomeListHeader;

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: s(1),
    borderColor: COLORS.gray,
    borderRadius: ms(SIZES.radius),
    paddingHorizontal: s(SIZES.base),
  },

  optionBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: ms(SIZES.radius),
    aspectRatio: 1,
    width: s(40),
  },
});
