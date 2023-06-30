import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
import {commonStyles} from '../styles/commonStyles';
import Text from './common/Text';
import {BottomIconType} from '../types/navigation';
import {COLORS, SIZES} from '../../constants';
import {s, vs} from 'react-native-size-matters';

type Props = BottomIconType & {
  iconName: string;
  name: string;
};

const BottomIcon = ({focused, color, size, name, iconName}: Props) => {
  return (
    <View>
      {focused && (
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.gapSm,
            styles.containerBtn,
          ]}>
          <Icon name={iconName} width={size} height={size} fill={color} />
          <Text
            textBaseType="headingMd"
            textBaseColorType="primary"
            style={[styles.text]}>
            {name}
          </Text>
        </View>
      )}

      {!focused && (
        <Icon name={iconName} width={size} height={size} fill={color} />
      )}
    </View>
  );
};

export default BottomIcon;

const styles = StyleSheet.create({
  containerBtn: {
    borderRadius: s(SIZES.radius),
    paddingHorizontal: s(SIZES.radius),
    paddingVertical: vs(SIZES.base),
    backgroundColor: COLORS.opacityPrimary,
  },
  text: {
    textTransform: 'capitalize',
  },
});
