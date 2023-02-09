import classNames from 'classnames';
import { Circle as RCCircle } from 'rc-progress';
import * as React from 'react';
import type { ProgressProps } from './progress';

interface CircleProps extends ProgressProps {
  strokeColor?: string;
}

const Circle: React.FC<CircleProps> = (props) => {
  const {
    strokeWidth = 6,
    trailColor = null as any,
    strokeLinecap = 'round',
    children,
    width = 120,
    strokeColor,
    percent,
    status,
  } = props;

  const wrapperClassName = classNames(`ci-pg-inner`);
  let strokeColor_ = strokeColor;
  const circleStyle = {
    width: width,
    height: width,
    fontSize: width * 0.15 + 6,
  } as React.CSSProperties;
  if (status === 'success') {
    strokeColor_ = strokeColor || '#b7eb8f';
  } else if (status === 'exception') {
    strokeColor_ = strokeColor || '#dc3545';
  }
  return (
    <div className={wrapperClassName} style={circleStyle}>
      <RCCircle
        percent={percent}
        strokeWidth={strokeWidth || 6}
        trailWidth={strokeWidth || 6}
        strokeColor={strokeColor_}
        strokeLinecap={strokeLinecap}
        trailColor={trailColor}
        prefixCls={`ci-pg`}
      />
      {children}
    </div>
  );
};

export default Circle;
