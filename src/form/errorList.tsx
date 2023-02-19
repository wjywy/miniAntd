import * as React from 'react';

interface ErrorListProps {
  message: string;
  show: boolean;
}

const ErrorList: React.FC<ErrorListProps> = ({ message, show = false }) => {
  return (
    <div
      className="ci-error-list"
      role="alert"
      style={{ opacity: `${show ? 1 : 0}` }}
    >
      {show && message}
    </div>
  );
};

export default ErrorList;
