import classNames from 'classnames';
import {
  default as RcFieldForm,
  FormInstance,
  FormProps as RcFormProps,
  useForm,
} from 'rc-field-form';
import React from 'react';

interface FormProps extends RcFormProps {
  layout?: 'horizontal' | 'inline' | 'vertical';
  size?: 'small' | 'middle' | 'large';
}
const InternalForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (
  props,
  ref,
) => {
  const {
    form,
    layout = 'horizontal',
    className = '',
    size = 'middle',
    ...restFormProps
  } = props;
  const [wrapForm] = useForm(form);
  React.useImperativeHandle(ref, () => wrapForm);
  const prefixCls = 'ci-form';
  const formClassName = classNames(
    {
      [`${prefixCls}-${layout}`]: true,
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );
  return (
    <RcFieldForm form={wrapForm} {...restFormProps} className={formClassName} />
  );
};
const Form = React.forwardRef(InternalForm);
export default Form;
