import classNames from 'classnames';
import React from 'react';

const SpinSizes = ['small', 'default', 'large'] as const;
export type SpinSize = typeof SpinSizes[number];
export type SpinIndicator = React.ReactElement<HTMLElement>;

export interface SpinProps {
  prefixCls?: string;
  className?: string;
  spinning?: boolean;
  style?: React.CSSProperties;
  size?: SpinSize;
  tip?: React.ReactNode;
  delay?: number;
  wrapperClassName?: string;
  indicator?: SpinIndicator;
  children?: React.ReactNode;
}

export interface SpinClassProps extends SpinProps {
  hashId: string;
  spinPrefixCls: string;
}

export type SpinFCType = React.FC<SpinProps> & {
  setDefaultIndicator: (indicator: React.ReactNode) => void;
};

function renderIndicator(prefixCls: string, props: SpinProps): React.ReactNode {
  const { indicator } = props;
  const dotClassName = `${prefixCls}-dot`;

  // should not be render default indicator when indicator value is null
  if (indicator === null) {
    return null;
  }

  return (
    <span className={classNames(dotClassName, `${prefixCls}-dot-spin`)}>
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
      <i className={`${prefixCls}-dot-item`} />
    </span>
  );
}

function shouldDelay(spinning?: boolean, delay?: number): boolean {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

const Spin: React.FC<SpinProps> = (props) => {
  const {
    prefixCls = 'spin',
    spinning: customSpinning = true,
    delay = 0,
    className,
    size = 'default',
    tip,
    style,
    ...restProps
  } = props;

  const [spinning] = React.useState<boolean>(
    () => customSpinning && !shouldDelay(customSpinning, delay),
  );

  const spinClassName = classNames(
    prefixCls,
    {
      [`${prefixCls}-sm`]: size === 'small',
      [`${prefixCls}-lg`]: size === 'large',
      [`${prefixCls}-spinning`]: spinning,
      [`${prefixCls}-show-text`]: !!tip,
    },
    className,
  );

  return (
    <div
      {...restProps}
      style={style}
      className={spinClassName}
      aria-live="polite"
      aria-busy={spinning}
    >
      {renderIndicator(prefixCls, props)}
      {tip ? <div className={`${prefixCls}-text`}>{tip}</div> : null}
    </div>
  );
};

export default Spin;