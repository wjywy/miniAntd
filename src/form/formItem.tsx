import classNames from 'classnames';
import { Field } from 'rc-field-form';
import type { FieldProps } from 'rc-field-form/lib/Field';
import type { Meta, Rule } from 'rc-field-form/lib/interface';
import * as React from 'react';
import ErrorList from './errorList';

import FormItemLabel from './formItemLabel';

interface FormItemProps<T = any> extends FieldProps<T> {
  label?: React.ReactNode;
  className?: string;
  required?: boolean; // 是否必需
  hideRequired?: boolean; // 是否隐藏required图标
}

const FormItem: React.FC<FormItemProps> = (props) => {
  const {
    label,
    children,
    className = '',
    required,
    hideRequired = false,
    ...resetProps
  } = props;
  let { rules = [] } = props;

  let requireDom;
  const rulesHasRequired = (rules: Rule[]) => {
    for (const x of rules) {
      if ((x as any).required !== undefined) {
        return true;
      }
    }
    return false;
  };

  if (required === true) {
    let name = props.name || 'info';
    if (rules === undefined) rules = [];
    if (rulesHasRequired(rules) === false) {
      rules.push({ required: true, message: `${name} is required!` });
    }
    if (hideRequired === true) requireDom = null;
    else requireDom = <span className="ci-form-required">*</span>;
  } else {
    if (rulesHasRequired(rules) === true) {
    }
  }

  let variables: Record<string, string> = {};
  if (typeof label === 'string') {
    variables.label = label;
  }

  const fieldClassname = classNames(className, 'ci-form-item');

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
      {...resetProps}
      onMetaChange={onMetaChange}
    >
      <div>
        <div className={fieldClassname}>
          {requireDom}
          {label && <FormItemLabel {...props}></FormItemLabel>}
          {children && <div className="ci-form-item-content">{children}</div>}
        </div>
        {<ErrorList message={meta.errors[0]} show={Boolean(meta.errors[0])} />}
      </div>
    </Field>
  );
};

export default FormItem;
export { FormItemProps };
