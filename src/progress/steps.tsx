import classNames from 'classnames';
import * as React from 'react';
import type { ProgressProps } from './progress';

interface ProgressStepsProps extends ProgressProps {
  steps: number;
}

const Steps: React.FC<ProgressStepsProps> = (props) => {
  const {
    size,
    steps,
    percent = 0,
    strokeWidth = 8,
    strokeColor,
    trailColor = null as any,
    children,
  } = props;

  //当前是第几块step
  const current = Math.round(steps * (percent / 100));

  const stepWidth = size === 'small' ? 2 : 14;
  const styledSteps: React.ReactNode[] = new Array(steps);
  for (let i = 0; i < steps; i++) {
    const color = Array.isArray(strokeColor) ? strokeColor[i] : strokeColor;
    styledSteps[i] = (
      <div
        key={i}
        className={classNames(`ci-pg-steps-item`, {
          [`ci-pg-steps-item-active`]: i <= current - 1,
        })}
        style={{
          backgroundColor: i <= current - 1 ? color : trailColor,
          width: stepWidth,
          height: strokeWidth,
        }}
      />
    );
  }
  return (
    <div className={`ci-pg-steps-outer`}>
      {styledSteps}
      {children}
    </div>
  );
};

export default Steps;
