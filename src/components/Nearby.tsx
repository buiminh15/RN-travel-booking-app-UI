import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import {Hotel, NearbyHotel} from '../types/Hotel';
import Text from './common/Text';
import NearbyItem from './NearbyItem';

const renderItem = ({item}: {item: Hotel}) => {
  return <NearbyItem item={item} />;
};

const Nearby = ({itemData}: {itemData: NearbyHotel}) => {
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
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[commonStyles.gap]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Nearby;
