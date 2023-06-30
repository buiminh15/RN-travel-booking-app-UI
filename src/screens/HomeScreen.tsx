import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NEARBY_DATA, POPULAR_DATA} from '../../constants/data';
import {Destination, HomeListHeader, Nearby} from '../components';
import {commonStyles} from '../styles/commonStyles';
import {NearbyHotel} from '../types/Hotel';
import {vs} from 'react-native-size-matters';
import {SIZES} from '../../constants';

export const NAME_TYPE = {
  NEARBY: 'Nearby your location',
  POPULAR: 'Popular Destination',
  SCHEDULE: 'My Schedule',
};

const DATA = [
  {
    id: '8d5f61a4-3c8a-4d4d-bbf0-743c3f649ffe',
    name: NAME_TYPE.NEARBY,
    data: NEARBY_DATA,
  },
  {
    id: 'af65b2a5-fbe9-4278-a193-a2faf029b04f',
    name: NAME_TYPE.POPULAR,
    data: POPULAR_DATA,
  },
];

const renderMainItem = ({item}: {item: NearbyHotel}) => {
  return (
    <View>
      {NAME_TYPE.NEARBY === item.name && <Nearby itemData={item} />}
      {NAME_TYPE.POPULAR === item.name && <Destination itemData={item} />}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={[commonStyles.paddingHorizontal, styles.container]}>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        renderItem={renderMainItem}
        ListHeaderComponent={<HomeListHeader />}
        ListFooterComponent={<View style={[styles.footer]} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(SIZES.padding),
  },
  footer: {
    marginBottom: vs(SIZES.padding),
  },
});
