import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import {Hotel, NearbyHotel} from '../types/Hotel';
import Text from './common/Text';
import NearbyItem from './NearbyItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

const renderItem = ({item}: {item: Hotel}) => {
  return <NearbyItem item={item} />;
};

const Nearby = ({itemData}: {itemData: NearbyHotel}) => {
  const navigation =
    useNavigation<
      NativeStackScreenProps<
        MainStackParamList,
        'MainStackScreen'
      >['navigation']
    >();
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ViewAllScreen', {
                name: itemData.name,
              })
            }>
            <Text textBaseColorType="primary" textBaseType="sm">
              See all
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={itemData.data as Hotel[]}
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
