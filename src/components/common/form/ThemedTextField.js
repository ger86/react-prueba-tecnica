import React from 'react';
import TextField from '@material-ui/core/TextField';
import textFieldProps from 'theme/textFieldProps';

export default function ThemedTextField(props) {
  return <TextField {...props} {...textFieldProps} />;
}
