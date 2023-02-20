import classNames from 'classnames';
import * as React from 'react';
import Icon from '../icon';
import omit from '../utils/omit';
import Circle from './circle';
import Line from './line';
import Steps from './steps';

export type ProgressType = 'line' | 'circle';
export type statuses = 'normal' | 'exception' | 'active' | 'success';
export type ProgressSize = 'default' | 'small';

export interface ProgressProps {
  className?: string;
  type?: ProgressType;
  percent?: number;
  format?: (percent?: number) => React.ReactNode;
  status?: statuses;
  showInfo?: boolean;
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'square' | 'round';
  strokeColor?: string | string[];
  trailColor?: string;
  width?: number;
  style?: React.CSSProperties;
  size?: ProgressSize;
  steps?: number;
  children?: React.ReactNode;
}
const Progress: React.FC<ProgressProps> = (props: ProgressProps) => {
  const {
    className,
    steps,
    strokeColor,
    percent = 0,
    size = 'default',
    showInfo = true,
    type = 'line',
    status = 'normal',
    width = 120,
    ...restProps
  } = props;
  const getProgressInfo = () => {
    const { format } = props;
    if (showInfo === false) return null;
    const textFormatter = format || ((percentNumber) => `${percentNumber}%`);
    let text = textFormatter(percent);
    if (status === 'exception') text = <Icon name="fail" size={16}></Icon>;
    else if (status === 'success')
      text = <Icon name="success" size={16}></Icon>;
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
        {progressInfo}
      </Steps>
    ) : (
      <Line {...props} strokeColor={strokeColorNotArray}>
        {progressInfo}
      </Line>
    );
  } else if (type === 'circle') {
    progress = (
      <Circle {...props} strokeColor={strokeColorNotArray} status={status}>
        {progressInfo}
      </Circle>
    );
  }

  const classString = classNames(
    {
      [`ci-pg-${(steps && 'steps') || type}`]: true,
      [`ci-pg-status-${status}`]: true,
      [`ci-pg-show-info`]: showInfo,
      [`ci-pg-${size}`]: size,
    },
    className,
  );
  const circleStyle = {
    width: width,
    height: width,
    fontSize: width * 0.15 + 6,
  } as React.CSSProperties;
  return (
    <div
      {...omit(restProps, ['trailColor', 'format', 'style', 'strokeLinecap'])}
      className={classString}
      style={type === 'circle' ? circleStyle : {}}
    >
      {progress}
    </div>
  );
};
export default Progress;
