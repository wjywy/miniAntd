import InternalInput, { BasicInputProps } from './input';
import TextArea from './textareaInput';

import React from 'react';
import '../style';

export type { BasicInputProps } from './input';

type CompoundedComponent = React.ForwardRefExoticComponent<BasicInputProps> & {
  TextArea: typeof TextArea;
};
const Input = InternalInput as CompoundedComponent;

Input.TextArea = TextArea;
export default Input;
