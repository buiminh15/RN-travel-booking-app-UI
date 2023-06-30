import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Hotel, NearbyHotel} from '../types/Hotel';
import DestinationItem from './DestinationItem';
import {commonStyles} from '../styles/commonStyles';
import Text from './common/Text';

const renderItem = ({item}: {item: Hotel}) => {
  return <DestinationItem item={item} />;
};

const Destination = ({itemData}: {itemData: NearbyHotel}) => {
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
        data={itemData.data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[commonStyles.gap]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Destination;
