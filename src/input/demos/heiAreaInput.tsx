// 自适应文本框高度的文本域
import { Input } from 'cheesi';
import React, { Fragment } from 'react';

const { TextArea } = Input;
const App = () => {
  return (
    <Fragment>
      <TextArea placeholder="自适应文本高度" autosize></TextArea>
    </Fragment>
  );
};

export default App;
