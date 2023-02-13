import { Field } from 'rc-field-form';
import type { FieldProps as FormItemProps } from 'rc-field-form/lib/Field';
import * as React from 'react';

const FormItem: React.FC<FormItemProps> = (props) => {
  return <Field {...props}></Field>;
};

export default FormItem;
