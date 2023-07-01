import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {COLORS} from '../../constants';
import {commonStyles} from '../styles/commonStyles';
import IconC from './common/IconC';
import Text from './common/Text';
import {useNavigation} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {BottomTabNavigatorParamList} from '../types/navigation';

const BookingListHeader = () => {
  const [selected, setSelected] = useState('');
  const navigation =
    useNavigation<
      BottomTabScreenProps<BottomTabNavigatorParamList, 'Booking'>['navigation']
    >();
  return (
    <View style={[commonStyles.mtContainer, commonStyles.gapLg]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.itemsCenter,
          commonStyles.justifyBetween,
        ]}>
        <IconC iconName="chevron-left" onPress={() => navigation.goBack()} />
        <Text textBaseColorType="black" textBaseType="headingLg">
          Schedule
        </Text>
        <IconC iconName="settings-2" />
      </View>
      <View>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          theme={{
            calendarBackground: COLORS.opacityPrimary,
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textSectionTitleColor: COLORS.black,
            textDisabledColor: COLORS.gray,
          }}
          markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: COLORS.primary,
            },
          }}
        />
      </View>
    </View>
  );
};

export default BookingListHeader;
