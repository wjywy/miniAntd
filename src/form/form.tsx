import classNames from 'classnames';
import {
  default as RcFieldForm,
  FormInstance,
  FormProps as RcFormProps,
  useForm,
} from 'rc-field-form';
import React from 'react';

import { SizeContext } from '../context';

interface FormProps extends RcFormProps {
  layout?: 'horizontal' | 'inline' | 'vertical';
  size?: 'small' | 'middle' | 'large';
  noStyle?: boolean;
  colon?: boolean; //是否显示冒号
}

interface FormContextProps {
  colon?: boolean;
  noStyle?: boolean;
}
export const FormContext = React.createContext<FormContextProps>({
  colon: true,
  noStyle: false,
});

const InternalForm: React.ForwardRefRenderFunction<FormInstance, FormProps> = (
  props,
  ref,
) => {
  const contextSize = React.useContext(SizeContext);
  const {
    form,
    layout = 'horizontal',
    className = '',
    size = (contextSize && contextSize.size) || 'small',
    noStyle = false,
    colon = true,
    ...restFormProps
  } = props;
  const [wrapForm] = useForm(form);
  React.useImperativeHandle(ref, () => wrapForm);
  const prefixCls = 'ci-form';
  const classes = classNames(
    `${prefixCls}`,
    {
      [`${prefixCls}-${layout}`]: true,
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );
  const formClassName = noStyle === false ? classes : undefined;
  const formContextValue = React.useMemo<FormContextProps>(
    () => ({
      colon,
      noStyle,
    }),
    [colon, noStyle],
  );

  return (
    <SizeContext.Provider value={{ size }}>
      <FormContext.Provider value={formContextValue}>
        <RcFieldForm
          form={wrapForm}
          {...restFormProps}
          className={formClassName}
        />
      </FormContext.Provider>
    </SizeContext.Provider>
  );
};
const Form = React.forwardRef(InternalForm);
export default Form;
