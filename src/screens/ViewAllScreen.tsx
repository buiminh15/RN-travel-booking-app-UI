import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../constants';
import {
  Text,
  ViewAllItem,
  ViewAllListFooter,
  ViewAllListHeader,
} from '../components';
import {URL_PATH} from '../configuaration/swr';
import {usePaginateHotels} from '../hooks/usePaginateHotel';
import {commonStyles} from '../styles/commonStyles';
import {Poke} from '../types/Poke';
import {MainStackParamList} from '../types/navigation';

const renderMainItem = ({item}: {item: Poke}) => {
  return <ViewAllItem item={item} />;
};

const ViewAllScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'ViewAllScreen'>>();
  const {
    hotels,
    error,
    size,
    setSize,
    isLoadingMore,
    isReachingEnd,
    mutate,
    cache,
  } = usePaginateHotels(URL_PATH.POKEMON);

  console.log('📢 [ViewAllScreen.tsx:35]', hotels.length);
  if (error) {
    return (
      <View>
        <Text>{error?.message}</Text>
      </View>
    );
  }
  if (!hotels) {
    return (
      <SafeAreaView
        style={[
          commonStyles.flex1,
          commonStyles.justifyCenter,
          commonStyles.itemsCenter,
        ]}>
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      </SafeAreaView>
    );
  }
  const handleOnRefresh = () => {
    mutate(undefined);
    cache.delete(URL_PATH.POKEMON);
  };
  const handleLoadingMore = () => {
    setSize(size + 1);
  };
  return (
    <SafeAreaView style={[commonStyles.mtContainer]}>
      <FlatList
        data={hotels}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <ViewAllListHeader nameCategory={route.params?.name} />
        }
        contentContainerStyle={[commonStyles.paddingHorizontal]}
        keyExtractor={item => item.name}
        renderItem={renderMainItem}
        onEndReached={handleLoadingMore}
        onEndReachedThreshold={20}
        onRefresh={handleOnRefresh}
        refreshing={isLoadingMore}
        ListFooterComponent={
          <ViewAllListFooter
            isLoadingMore={isLoadingMore}
            isReachingEnd={isReachingEnd}
          />
        }
      />
    </SafeAreaView>
  );
};

export default ViewAllScreen;
