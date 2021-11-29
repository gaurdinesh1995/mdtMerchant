import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createBox, createText} from '@shopify/restyle';
import {TextInput as RNTextInput, StyleSheet, Dimensions} from 'react-native';
import {palette} from '../Theme/Index';
const {width} = Dimensions.get('window');
const Box = createBox();
const Text = createText();
const TextInputBase = createBox(RNTextInput);

const Input = ({
  onChangeText,
  value,
  title,
  showErrorField,
  errorText,
  right,
  style,
  ...props
}) => {
  return (
    <Box>
      <Text ml="l" style={styles.title}>
        {title}
      </Text>
      <TextInputBase
        {...props}
        style={[
          {
            backgroundColor: showErrorField ? 'white' : palette.tertiary,
          },
          styles.input,
          style,
        ]}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}
      />
      {right() ? (
        <Box position="absolute" style={styles.right}>
          {right()}
        </Box>
      ) : null}
      {showErrorField ? (
        <Box mr="l" style={styles.error}>
          <Text>{errorText}</Text>
        </Box>
      ) : null}
    </Box>
  );
};
export default Input;

Input.propTypes = {
  title: PropTypes.string,
  right: PropTypes.func,
  renderLeft: PropTypes.func,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
};

Input.defaultProps = {
  title: '',
  showErrorField: false,
  onChangeText: () => {},
  right: () => {},
  value: '',
  style: {},
};

const styles = StyleSheet.create({
  error: {
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'flex-end',
  },
  right: {right: 35, top: 38},
  title: {marginBottom: 10},
  input: {
    paddingLeft: 10,
    marginHorizontal: 20,
    height: 48,
    width: width - 40,
    borderRadius: 10,
  },
});
