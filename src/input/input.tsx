import classNames from 'classnames';
import React from 'react';
import './style/index.less';

export interface BasicInputProps {
  placeholder?: string;
  size?: 'large' | 'small';
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
  const classes = classNames('input_basic', {
    large: size === 'large',
    small: size === 'small',
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
