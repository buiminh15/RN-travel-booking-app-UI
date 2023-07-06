import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import DatePicker from 'react-native-date-picker';
import {Icon} from 'react-native-eva-icons';
import FastImage from 'react-native-fast-image';
import ImagePicker from 'react-native-image-crop-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ms, s, vs} from 'react-native-size-matters';
import {COLORS, SIZES} from '../../constants';
import {Button, IconC, Text, TextInput} from '../components';
import {commonStyles} from '../styles/commonStyles';
import {MainStackParamList} from '../types/navigation';
import {useProfileStore} from '../hooks';

const EditProfileScreen = () => {
  const navigation =
    useNavigation<
      NativeStackScreenProps<
        MainStackParamList,
        'EditProfileScreen'
      >['navigation']
    >();
  const [hidePass, setHidePass] = useState(true);
  const [imagePath, setImagePath] = useState('https://picsum.photos/200/300');
  const [date, setDate] = useState(new Date());
  const [openMDateModal, setOpenDateModal] = useState(false);

  const [country, setCountry] = useState('');
  const [openCountryModal, setOpenCountryModal] = useState(false);

  const profile = useProfileStore(state => state.profile);
  const handleImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagePath(image.path);
    });
  };

  return (
    <SafeAreaView
      style={[
        commonStyles.flex1,
        commonStyles.mtContainer,
        commonStyles.paddingHorizontal,
      ]}>
      <KeyboardAwareScrollView
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          commonStyles.justifyBetween,
          commonStyles.flex1,
          commonStyles.footerMb,
        ]}>
        <View>
          <View
            style={[
              commonStyles.row,
              commonStyles.itemsCenter,
              commonStyles.justifyBetween,
            ]}>
            <IconC
              iconName="chevron-left"
              onPress={() => navigation.goBack()}
            />
            <Text textBaseColorType="black" textBaseType="headingLg">
              Edit Profile
            </Text>
            <View />
          </View>
          <View style={[commonStyles.itemsCenter]}>
            <FastImage
              source={{
                uri: imagePath,
              }}
              style={[styles.image]}
            />

            <TouchableOpacity
              onPress={handleImagePicker}
              style={[
                commonStyles.justifyCenter,
                commonStyles.itemsCenter,
                styles.cameraContainer,
              ]}>
              <Icon name="camera" width={32} height={32} fill={COLORS.black} />
            </TouchableOpacity>
          </View>
          {/* form */}
          <View style={[commonStyles.gap]}>
            <View style={[commonStyles.gapSm]}>
              <Text textBaseColorType="black" textBaseType="headingSm">
                Name
              </Text>
              <TextInput
                containerStyle={[styles.input]}
                placeholder="Enter your name"
                defaultValue={profile.name}
                onPress={() => console.log('')}
              />
            </View>
            <View style={[commonStyles.gapSm]}>
              <Text textBaseColorType="black" textBaseType="headingSm">
                Email
              </Text>
              <TextInput
                containerStyle={[styles.input]}
                placeholder="Enter your email"
                keyboardType="email-address"
                defaultValue={profile.email}
                onPress={() => console.log('')}
              />
            </View>
            <View style={[commonStyles.gapSm]}>
              <Text textBaseColorType="black" textBaseType="headingSm">
                Password
              </Text>
              <TextInput
                containerStyle={[styles.input]}
                secureTextEntry={hidePass ? true : false}
                placeholder="Enter your password"
                iconName="eye-outline"
                defaultValue={profile.password}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>
            <View style={[commonStyles.gapSm]}>
              <Text textBaseColorType="black" textBaseType="headingSm">
                Date of Birth
              </Text>
              <TextInput
                containerStyle={[styles.input]}
                onPress={() => setOpenDateModal(true)}
                editable={false}
                iconName="chevron-down"
                defaultValue={profile.dob}
                value={date.toLocaleDateString('en-GB')}
              />
              <DatePicker
                modal
                open={openMDateModal}
                androidVariant="iosClone"
                date={date}
                maximumDate={new Date()}
                minimumDate={new Date('1900-01-01')}
                mode="date"
                // eslint-disable-next-line @typescript-eslint/no-shadow
                onConfirm={(date: Date) => {
                  setOpenDateModal(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpenDateModal(false);
                }}
              />
            </View>
            <View style={[commonStyles.gapSm]}>
              <Text textBaseColorType="black" textBaseType="headingSm">
                Country/Region
              </Text>
              <View style={[commonStyles.row]}>
                <TextInput
                  containerStyle={[styles.input]}
                  onPress={() => setOpenCountryModal(true)}
                  editable={false}
                  iconName="chevron-down"
                  value={country}
                  defaultValue={profile.country}
                  placeholder="Choose your country"
                />
                <CountryPicker
                  countryCode="AD"
                  visible={openCountryModal}
                  onClose={() => setOpenCountryModal(false)}
                  onSelect={val => setCountry(val.name as string)}
                />
              </View>
            </View>
          </View>
        </View>
        <Button
          title="Save changes"
          btnStyles={[styles.btn]}
          textBaseType="headingMd"
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  image: {
    width: ms(120),
    height: ms(120),
    borderRadius: ms(500),
  },
  input: {
    paddingHorizontal: s(SIZES.base),
    borderWidth: s(1),
    borderColor: COLORS.gray,
    borderRadius: ms(SIZES.radius),
    width: '100%',
  },
  btn: {
    paddingVertical: vs(SIZES.radius),
  },

  cameraContainer: {
    width: ms(50),
    height: ms(50),
    borderRadius: ms(400),
    backgroundColor: COLORS.opacityGray,

    position: 'absolute',
    bottom: ms(-10),
    left: '55%',
  },
});
