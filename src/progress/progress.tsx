import classNames from 'classnames';
import * as React from 'react';
import Line from './line';
import Steps from './steps';

export type ProgressType = 'line' | 'circle' | 'dashboard';
export type statuses = 'normal' | 'exception' | 'active' | 'success';
export type ProgressSize = 'default' | 'small';

export interface SuccessProps {
  percent?: number;
  strokeColor?: string;
}

export interface ProgressProps {
  prefixCls?: string;
  className?: string;
  type?: ProgressType;
  percent?: number;
  format?: (percent?: number, successPercent?: number) => React.ReactNode;
  status?: statuses;
  showInfo?: boolean;
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeColor?: string | string[];
  trailColor?: string;
  width?: number;
  success?: SuccessProps;
  style?: React.CSSProperties;
  gapDegree?: number;
  gapPosition?: 'top' | 'bottom' | 'left' | 'right';
  size?: ProgressSize;
  steps?: number;
  children?: React.ReactNode;
}
const Progress: React.FC<ProgressProps> = (props: ProgressProps) => {
  const {
    className,
    steps,
    strokeColor,
    // percent = 0,
    size = 'default',
    showInfo = true,
    type = 'line',
    status = 'normal',
    ...restProps
  } = props;
  const getProgressInfo = () => {
    const { format } = props;
    if (showInfo === false) return null;
    const textFormatter = format || ((percentNumber) => `${percentNumber}%`);
    return (
      <span
        className={`ci-pg-text`}
        title={typeof text === 'string' ? text : undefined}
      >
        {text}
      </span>
    );
  };
  let progress;
  let progressInfo = getProgressInfo();
  const strokeColorNotArray = Array.isArray(strokeColor)
    ? strokeColor[0]
    : strokeColor;
  if (type === 'line') {
    progress = steps ? (
      <Steps {...props} steps={steps}>
        {/* {progressInfo} */}
      </Steps>
    ) : (
      <Line {...props} strokeColor={strokeColorNotArray}>
        {progressInfo}
      </Line>
    );
  } else if (type === 'circle' || type === 'dashboard') {
    progress = (
      // <Circle {...props} strokeColor={strokeColorNotArray} status={status}>
      //   {/* {progressInfo} */}
      // </Circle>
      <div>circle</div>
    );
  }

  const classString = classNames(
    {
      [`ci-pg-${
        (type === 'dashboard' && 'circle') || (steps && 'steps') || type
      }`]: true,
      [`ci-pg-status-${status}`]: true,
      [`ci-pg-show-info`]: showInfo,
      [`ci-pg-${size}`]: size,
    },
    className,
  );
  return (
    <div {...restProps} className={classString}>
      {progress}
    </div>
  );
};
export default Progress;
