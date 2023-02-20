import classNames from 'classnames';
import * as React from 'react';
import { FormItemProps } from './formItem';

const FormItemLabel: React.FC<
  FormItemProps & { requireDom?: boolean; colon?: boolean }
> = (props) => {
  const { label, requireDom, colon } = props;
  const formLabelClass = classNames(`ci-form-item-label`, {
    [`ci-form-item-label-required`]: requireDom,
  });
  if (label === undefined || label === null) return null;
  return (
    <label
      className={formLabelClass}
      title={typeof label === 'string' ? label : ''}
    >
      {label}
      {colon ? ':' : ''}
    </label>
  );
};

export default FormItemLabel;
