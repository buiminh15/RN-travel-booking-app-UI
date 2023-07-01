import React from 'react';
import {View} from 'react-native';
import {commonStyles} from '../styles/commonStyles';
import Button from './common/Button';
import {SIZES} from '../../constants';
import {vs} from 'react-native-size-matters';

const DetailListFooter = () => {
  return (
    <View style={[commonStyles.mt, commonStyles.footerMb]}>
      <Button
        title="Booking Now"
        textBaseType="headingMd"
        btnStyles={{paddingVertical: vs(SIZES.font)}}
      />
    </View>
  );
};

export default DetailListFooter;
