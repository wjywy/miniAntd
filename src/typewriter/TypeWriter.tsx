import classNames from 'classnames';
import * as React from 'react';
interface TypeWriterProps {
  message: string;
  timeout?: number;
}
const TypeWriter: React.FC<TypeWriterProps> = (props) => {
  const { message, timeout = 200 } = props;
  const [messageShowed, setMessageShowed] = React.useState('');
  const prefix = 'ci';
  const classes_wraper = classNames(`${prefix}-tw`);
  const classes_message = classNames(`${prefix}-tw-msg`);
  const classes_cursor = classNames(`${prefix}-tw-cursor`);
  let timer = React.useRef<number | null>();

  React.useEffect(() => {
    let i = 0;
    function showMsg() {
      // $:回退
      // ^:等待一拍
      if (i === message.length) {
        return clearInterval(timer.current!);
      }
      let currChar = message[i];
      if (currChar === '$') {
        setMessageShowed((messageShowed) => {
          i++;
          return messageShowed.substring(0, messageShowed.length - 1);
        });
      } else if (currChar === '^') {
        i++;
      } else {
        setMessageShowed((messageShowed) => {
          return messageShowed + message[i++];
        });
      }
    }
    timer.current = window.setInterval(showMsg, timeout);
  }, []);

  return (
    <div className={classes_wraper}>
      <span
        className={classes_message}
        dangerouslySetInnerHTML={{ __html: messageShowed }}
      ></span>
      <span className={classes_cursor}>_</span>
    </div>
  );
};

export default TypeWriter;
