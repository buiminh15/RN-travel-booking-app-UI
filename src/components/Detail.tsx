import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {NearbyHotel, Preview} from '../types/Hotel';
import Text from './common/Text';
import FastImage from 'react-native-fast-image';
import {s, vs} from 'react-native-size-matters';
import {SIZES, images} from '../../constants';
import {commonStyles} from '../styles/commonStyles';

const renderItem = () => {
  return (
    <View>
      <FastImage
        source={images.plant5}
        resizeMode="cover"
        style={[styles.image]}
      />
    </View>
  );
};

const Detail = ({itemData}: {itemData: NearbyHotel}) => {
  return (
    <View style={[commonStyles.gap]}>
      <Text textBaseColorType="black" textBaseType="headingSm">
        {itemData.name}
      </Text>
      <FlatList
        data={itemData.data as Preview[]}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[commonStyles.gap]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  image: {
    width: s(100),
    height: vs(80),
    borderRadius: s(SIZES.radius),
  },
});
