import * as React from 'react';
import { FormItemProps } from './formItem';

const FormItemLabel: React.FC<FormItemProps> = (props) => {
  const { label } = props;
  if (label === undefined || label === null) return null;
  return (
    <label
      className={`ci-form-item-label`}
      title={typeof label === 'string' ? label : ''}
    >
      {label}
    </label>
  );
};

export default FormItemLabel;
