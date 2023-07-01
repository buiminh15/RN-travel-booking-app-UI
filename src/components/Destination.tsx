import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Hotel, NearbyHotel} from '../types/Hotel';
import DestinationItem from './DestinationItem';
import {commonStyles} from '../styles/commonStyles';
import Text from './common/Text';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

const renderItem = ({item}: {item: Hotel}) => {
  return <DestinationItem item={item} />;
};

const Destination = ({itemData}: {itemData: NearbyHotel}) => {
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[commonStyles.gap]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Destination;
