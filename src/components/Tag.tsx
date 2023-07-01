import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from './common/Text';
import {commonStyles} from '../styles/commonStyles';
import {Icon} from 'react-native-eva-icons';
import {COLORS, SIZES} from '../../constants';
import {ms, s, vs} from 'react-native-size-matters';

export type TagProps = {
  iconName: string;
  name: string;
};

const Tag = ({iconName, name}: TagProps) => {
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.itemsCenter,
        commonStyles.gapSm,
        styles.container,
      ]}>
      <Icon name={iconName} width={30} height={30} fill={COLORS.black} />
      <Text textBaseColorType="black" textBaseType="headingSm">
        {name}
      </Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    borderRadius: ms(SIZES.radius),
    paddingHorizontal: s(SIZES.font),
    paddingVertical: vs(SIZES.base),
    backgroundColor: COLORS.opacityPrimary,
  },
});
