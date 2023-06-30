import {
  View,
  TextInput as DefaultTextInput,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-eva-icons';
import {commonStyles} from '../../styles/commonStyles';
import {COLORS} from '../../../constants';
type CustomTextInputProps = TouchableOpacityProps &
  TextInputProps & {
    containerStyle?: ViewStyle;
    iconName?: string;
    iconColor?: string;
    iconSize?: number;
  };

const TextInput = (props: CustomTextInputProps) => {
  const {containerStyle, iconName, iconColor, iconSize, ...otherProps} = props;
  return (
    <View
      style={[
        commonStyles.row,
        commonStyles.itemsCenter,
        commonStyles.justifyBetween,
        commonStyles.bgWhite,
        containerStyle,
      ]}>
      <DefaultTextInput {...otherProps} />
      {iconName && (
        <TouchableOpacity {...otherProps}>
          <Icon
            name={iconName}
            color={iconColor || COLORS.white}
            width={iconSize || 24}
            height={iconSize || 24}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInput;
