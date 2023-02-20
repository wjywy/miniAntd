import classNames from 'classnames';
import React from 'react';
import { SizeContext } from '../context';

export interface BasicInputProps {
  placeholder?: string;
  size?: 'large' | 'small' | 'middle';
  status?: 'error' | 'warning';
  borderd?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const App: React.FC<BasicInputProps> = ({
  placeholder,
  size,
  status,
  borderd,
  onChange,
  onFocus,
}) => {
  const sizeContextValue = React.useContext(SizeContext);
  size = size || sizeContextValue?.size || 'small';
  const classes = classNames('input_basic', {
    large: size === 'large',
    small: size === 'small',
    middle: size === 'middle',
    default: !size,

    warning: status === 'warning',
    error: status === 'error',
    normal: !status,

    noBorderd: borderd === false,
  });
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        className={classes}
      />
    </>
  );
};

export default App;
