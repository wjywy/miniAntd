import { Selector} from 'cheesi';
import React from 'react';

export default () => (
<Selector
  defaultValue={'默认值'}
  options={[
      {
          title: '选项一',
          value: 1,
      },
      {
          title: '选项2',
          value: 2,
      },
  ]}
  
/>
);
