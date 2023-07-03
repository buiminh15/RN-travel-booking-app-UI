import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {COLORS, images} from '../../constants';
import {ms, s, vs} from 'react-native-size-matters';
import {commonStyles} from '../styles/commonStyles';
import {Button, Text} from '../components';
import {Icon} from 'react-native-eva-icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../types/navigation';

const ProfileScreen = () => {
  const navigation =
    useNavigation<
      NativeStackScreenProps<
        MainStackParamList,
        'MainStackScreen'
      >['navigation']
    >();
  return (
    <SafeAreaView>
      <FastImage
        source={images.bannerBg}
        style={[styles.image]}
        resizeMode="cover"
      />

      <View style={[commonStyles.itemsCenter, styles.contentContainer]}>
        <View
          style={[
            styles.profileImageContainer,
            commonStyles.itemsCenter,
            commonStyles.justifyCenter,
          ]}>
          <FastImage
            source={images.profile4}
            style={[styles.profileImage]}
            resizeMode="cover"
          />
        </View>

        <View style={[commonStyles.itemsCenter, commonStyles.gapSm]}>
          <Text textBaseColorType="primary" textBaseType="headingLg">
            Mike Bui
          </Text>
          <Text textBaseColorType="gray" textBaseType="sm">
            Interior Design
          </Text>
          <View
            style={[
              commonStyles.row,
              commonStyles.itemsCenter,
              commonStyles.gapSm,
            ]}>
            <Icon name="pin" width={24} height={24} fill={COLORS.gray} />
            <Text textBaseColorType="gray" textBaseType="sm">
              Lagos, Nigeria
            </Text>
          </View>
          <View
            style={[
              commonStyles.row,
              commonStyles.itemsCenter,
              commonStyles.gapLg,
            ]}>
            <View style={[commonStyles.gapSm, commonStyles.itemsCenter]}>
              <Text textBaseColorType="primary" textBaseType="headingLg">
                122
              </Text>
              <Text textBaseColorType="gray" textBaseType="md">
                followers
              </Text>
            </View>
            <View style={[commonStyles.gapSm, commonStyles.itemsCenter]}>
              <Text textBaseColorType="primary" textBaseType="headingLg">
                67
              </Text>
              <Text textBaseColorType="gray" textBaseType="md">
                following
              </Text>
            </View>
            <View style={[commonStyles.gapSm, commonStyles.itemsCenter]}>
              <Text textBaseColorType="primary" textBaseType="headingLg">
                37K
              </Text>
              <Text textBaseColorType="gray" textBaseType="md">
                likes
              </Text>
            </View>
          </View>

          {/* buttons */}
          <View style={[commonStyles.row, commonStyles.gap, commonStyles.mt]}>
            <Button
              title="Edit profile"
              btnStyles={[styles.btn]}
              onPress={() => navigation.navigate('EditProfileScreen')}
            />
            <Button title="Add friends" btnStyles={[styles.btn]} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  image: {
    height: vs(200),
  },
  contentContainer: {
    marginTop: vs(-55),
  },
  profileImageContainer: {
    width: ms(110),
    height: ms(110),
    borderRadius: ms(500),
    backgroundColor: COLORS.white,
  },
  profileImage: {
    width: ms(100),
    height: ms(100),
    borderRadius: ms(500),
  },
  btn: {
    paddingHorizontal: s(10),
  },
});
