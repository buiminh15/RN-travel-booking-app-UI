import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BOOKING_DATA} from '../../constants/data';
import {Booking, BookingListHeader} from '../components';
import {NearbyHotel} from '../types/Hotel';
import {NAME_TYPE} from './HomeScreen';
import {commonStyles} from '../styles/commonStyles';

const renderMainItem = ({item}: {item: NearbyHotel}) => {
  return <Booking itemData={item} />;
};

const DATA = [
  {
    id: '67014339-3203-42ef-a3e0-48735f5b7a29',
    name: NAME_TYPE.SCHEDULE,
    data: BOOKING_DATA,
  },
];

const BookingScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<BookingListHeader />}
        contentContainerStyle={[commonStyles.paddingHorizontal]}
        keyExtractor={item => item.id}
        renderItem={renderMainItem}
      />
    </SafeAreaView>
  );
};

export default BookingScreen;
