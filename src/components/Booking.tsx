import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import {NearbyHotel, Schedule} from '../types/Hotel';
import {MainStackParamList} from '../types/navigation';
import BookingItem from './BookingItem';
import Text from './common/Text';

const renderItem = ({item}: {item: Schedule}) => {
  return <BookingItem item={item} />;
};

const Booking = ({itemData}: {itemData: NearbyHotel}) => {
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
        data={itemData.data as Schedule[]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[commonStyles.gap]}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={<View style={[commonStyles.footerMb]} />}
      />
    </View>
  );
};

export default Booking;
