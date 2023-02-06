import * as React from 'react';
import type { ProgressProps } from './progress';
import { validProgress } from './utils';

interface LineProps extends ProgressProps {
  children: React.ReactNode;
  strokeColor?: string;
}

const Line: React.FC<LineProps> = (props) => {
  const {
    percent,
    strokeWidth,
    size,
    strokeColor,
    strokeLinecap = 'round',
    children,
    trailColor = null,
    // success,
  } = props;

  const backgroundProps = {
    background: strokeColor,
  };
  const borderRadius =
    strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
  const percentStyle = {
    width: `${validProgress(percent)}%`,
    height: strokeWidth || (size === 'small' ? 6 : 8),
    borderRadius,
    ...backgroundProps,
  };
  const trailStyle = {
    backgroundColor: trailColor || undefined,
    borderRadius,
  };
  return (
    <>
      <div className={`ci-pg-outer`}>
        <div className={`ci-pg-inner`} style={trailStyle}>
          <div className={`ci-pg-bg`} style={percentStyle} />
        </div>
      </div>
      {children}
    </>
  );
};

export default Line;
