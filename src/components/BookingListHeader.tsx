import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {vs} from 'react-native-size-matters';
import {COLORS, SIZES} from '../../constants';
import {commonStyles} from '../styles/commonStyles';
import IconC from './common/IconC';
import Text from './common/Text';

const BookingListHeader = () => {
  const [selected, setSelected] = useState('');
  return (
    <View style={[styles.pt, commonStyles.gapLg]}>
      <View
        style={[
          commonStyles.row,
          commonStyles.itemsCenter,
          commonStyles.justifyBetween,
        ]}>
        <IconC iconName="chevron-left" />
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

const styles = StyleSheet.create({
  pt: {
    paddingTop: vs(SIZES.padding),
  },
});
