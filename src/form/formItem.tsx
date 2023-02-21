import classNames from 'classnames';
import { Field } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { Meta, Rule } from 'rc-field-form/lib/interface';
import * as React from 'react';
import omit from '../utils/omit';
import ErrorList from './errorList';
import { FormContext } from './form';
import FormItemLabel from './formItemLabel';

interface FormItemProps<T = any> extends FieldProps<T> {
  label?: React.ReactNode;
  className?: string;
  required?: boolean; // 是否必需
  hideRequired?: boolean; // 是否隐藏required图标
  noStyle?: boolean;
}

const FormItem: React.FC<FormItemProps> = (props) => {
  const FormContextValue = React.useContext(FormContext);
  const { colon } = FormContextValue;
  const {
    children,
    className = '',
    hideRequired = false,
    noStyle = FormContextValue.noStyle || false,
    ...resetProps
  } = props;
  let { rules = [], required = true, label } = props;

  let requireDom = true;
  const rulesHasRequired = (rules: Rule[]) => {
    for (const x of rules) {
      if ((x as any).required !== undefined) {
        return true;
      }
    }
    return false;
  };
  if (required === true) {
    requireDom = true;
    let name = props.name || 'info';
    if (rulesHasRequired(rules) === false) {
      rules.push({ required: true, message: `${name} is required!` });
    }
    if (hideRequired === true) requireDom = false;
    else requireDom = true;
  } else {
    requireDom = false;
    if (rulesHasRequired(rules) === true) {
      required = true;
    }
  }

  let variables: Record<string, string> = {};
  if (label === undefined && props.name) label = props.name;
  if (typeof label === 'string') {
    variables.label = label;
  }

  const fieldClassname =
    noStyle === false ? classNames(className, 'ci-form-item') : undefined;

  function genEmptyMeta(): Meta_ {
    return {
      errors: [],
      warnings: [],
      touched: false,
      validating: false,
      name: [],
      destroy: true,
    };
  }
  type Meta_ = Meta & { destroy?: boolean };
  const [meta, setMeta] = React.useState<Meta_>(() => genEmptyMeta());
  const onMetaChange = (nextMeta: Meta_) => {
    if (nextMeta.errors.length !== 0 && meta.destroy === true)
      setMeta({ ...nextMeta, destroy: false });
    else if (nextMeta.errors.length === 0 && meta.destroy === false)
      setMeta({ ...nextMeta, destroy: true });
  };

  return (
    <Field
      messageVariables={variables}
      {...omit(resetProps, ['rules', 'required', 'label'])}
      onMetaChange={onMetaChange}
      rules={rules}
    >
      <div>
        <div className={fieldClassname}>
          {label && (
            <FormItemLabel
              {...props}
              requireDom={requireDom}
              colon={colon}
              label={label}
            ></FormItemLabel>
          )}
          {children && (
            <div className="ci-form-item-content">
              <>{children}</>
            </div>
          )}
        </div>
        {<ErrorList message={meta.errors[0]} show={Boolean(meta.errors[0])} />}
      </div>
    </Field>
  );
};

export default FormItem;
export { FormItemProps };
