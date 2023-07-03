import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Detail, DetailListFooter} from '../components';
import DetailListHeader from '../components/DetailListHeader';
import {commonStyles} from '../styles/commonStyles';
import {Hotel, NearbyHotel} from '../types/Hotel';
import {MainStackParamList} from '../types/navigation';

type Props = RouteProp<MainStackParamList, 'DetailScreen'>;

const DETAIL_DATA = [
  {
    id: 'f61a43b5-4b6d-4e0f-8fc9-e2c6ef71fdfc',
    name: 'Preview',
    data: [
      {
        imageUrl: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
        id: '78285793-8f75-4997-ac50-b0220874f9d7',
      },
      {
        imageUrl: 'http://dummyimage.com/300x300.png/cc0000/ffffff',
        id: '889eeb37-baeb-4af0-9c3d-7193753b7201',
      },
      {
        imageUrl: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
        id: '7d3713a5-de92-4d0c-b1a5-ef21e700b11a',
      },
      {
        imageUrl: 'http://dummyimage.com/300x300.png/ff4444/ffffff',
        id: '6bf97e2d-6a9d-4d28-b256-10dce41d7956',
      },
      {
        imageUrl: 'http://dummyimage.com/300x300.png/5fa2dd/ffffff',
        id: '47b88688-5cca-426f-b2cf-2c88289fbfd2',
      },
    ],
  },
];

const renderMainItem = ({item}: {item: NearbyHotel}) => {
  return <Detail itemData={item} />;
};

const DetailScreen = () => {
  const route = useRoute<Props>();

  const hotelData: Hotel = route.params?.item;

  return (
    <SafeAreaView
      style={[commonStyles.paddingHorizontal, commonStyles.mtContainer]}>
      <FlatList
        data={DETAIL_DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ListHeaderComponent={<DetailListHeader item={hotelData} />}
        ListFooterComponent={<DetailListFooter />}
        renderItem={renderMainItem}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
