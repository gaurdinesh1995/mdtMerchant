import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import {createBox, createText} from '@shopify/restyle';
import authConstants from '../../../Redux/AuthConstants';
import {Button, Input} from '../../ReusableComponents';
const Box = createBox();
const Text = createText();
export default (props) => {
  const dispatch = useDispatch();

  const {navigation} = props;
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text variant="primary20bold">Login</Text>
      <Input />
      <Button
        label="Login"
        onPress={() => {
          dispatch({
            type: authConstants.USER_INFO_RECEIVED,
            user: 'data',
          });
        }}
      />
    </Box>
  );
};
