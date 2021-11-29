import React, {useState, useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {createBox, createText} from '@shopify/restyle';
const Box = createBox();
const Text = createText();

export default ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Text>Dashboard</Text>
    </Box>
  );
};
