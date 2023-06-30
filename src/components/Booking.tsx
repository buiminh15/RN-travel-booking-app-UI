import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {NearbyHotel, Schedule} from '../types/Hotel';
import {commonStyles} from '../styles/commonStyles';
import Text from './common/Text';
import BookingItem from './BookingItem';

const renderItem = ({item}: {item: Schedule}) => {
  return <BookingItem item={item} />;
};

const Booking = ({itemData}: {itemData: NearbyHotel}) => {
  return (
    <View style={[commonStyles.gap, commonStyles.mt]}>
      <View>
        <View
          style={[
            commonStyles.row,
            commonStyles.itemsCenter,
            commonStyles.justifyBetween,
          ]}>
          <Text textBaseColorType="black" textBaseType="headingLg">
            {itemData.name}
          </Text>
          <TouchableOpacity>
            <Text textBaseColorType="primary" textBaseType="sm">
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={itemData.data as Schedule[]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[commonStyles.gap]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Booking;
