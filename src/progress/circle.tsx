import classNames from 'classnames';
import * as React from 'react';
import type { ProgressProps } from './progress';
// import { validProgress } from './utils';
import { Circle as RCCircle } from 'rc-progress';

interface CircleProps extends ProgressProps {
  prefixCls: string;
  children: React.ReactNode;
  progressStatus: string;
  strokeColor?: string;
}

const Circle: React.FC<CircleProps> = (props) => {
  const {
    prefixCls,
    width,
    strokeWidth,
    trailColor = null as any,
    strokeLinecap = 'round',
    gapPosition,
    gapDegree,
    type,
    children,
    success,
  } = props;
  const circleSize = width || 120;
  const circleStyle = {
    width: circleSize,
    height: circleSize,
    fontSize: circleSize * 0.15 + 6,
  } as React.CSSProperties;
  const circleWidth = strokeWidth || 6;
  const gapPos = gapPosition || (type === 'dashboard' && 'bottom') || undefined;

  const getGapDegree = () => {
    // Support gapDeg = 0 when type = 'dashboard'
    if (gapDegree || gapDegree === 0) {
      return gapDegree;
    }
    if (type === 'dashboard') {
      return 75;
    }
    return undefined;
  };

  // using className to style stroke color
  const isGradient =
    Object.prototype.toString.call(props.strokeColor) === '[object Object]';

  const wrapperClassName = classNames(`${prefixCls}-inner`, {
    [`${prefixCls}-circle-gradient`]: isGradient,
  });

  return (
    <div className={wrapperClassName} style={circleStyle}>
      <RCCircle
        percent={getPercentage(props)}
        strokeWidth={circleWidth}
        trailWidth={circleWidth}
        strokeColor={strokeColor}
        strokeLinecap={strokeLinecap}
        trailColor={trailColor}
        prefixCls={prefixCls}
        gapDegree={getGapDegree()}
        gapPosition={gapPos}
      />
      {children}
    </div>
  );
};

export default Circle;
