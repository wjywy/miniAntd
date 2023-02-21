import React from 'react';

export interface TextareaInput {
  placeholder?: string;
  maxLength?: number;
  height?: number;
  autosize?: any;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

// const fixMaxLength = (maxLength: number) => {};
// const setMaxLength = (maxLength: number) => {};
const App: React.FC<TextareaInput> = ({
  placeholder,
  maxLength,
  autosize,
  height = 40,
}) => {
  //   const oldSelectionStartRef = React.useRef<number>(0); // 文本域上的单词长度
  const autoSize = React.useRef<HTMLTextAreaElement>(null);

  const changeHandle = (e: any) => {
    if (maxLength && e.target.value.length > maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    } else {
      console.log('okkk');
    }
  };

  //   有一个小bug：每一行没输入到最后一个字符时，该文本域也会自动扩张一下
  const areaAutoSize = (height: number) => {
    if (autoSize.current) {
      autoSize.current.oninput = function () {
        if (autoSize.current) {
          autoSize.current.style.height = height + 'px';
          autoSize.current.style.height = autoSize.current.scrollHeight + 'px';
        }
      };
    }
    return (
      <>
        <textarea
          style={{ height: height }}
          ref={autoSize}
          name="xiaohui"
          id="xiaohui"
          cols={40}
          placeholder={placeholder}
          className="input_area"
          onChange={changeHandle}
        ></textarea>
      </>
    );
  };
  return (
    <>
      {autosize ? (
        areaAutoSize(height)
      ) : (
        <>
          <textarea
            style={{ height: height }}
            ref={autoSize}
            name="xiaohui"
            id="xiaohui"
            cols={40}
            placeholder={placeholder}
            className="input_area"
            onChange={changeHandle}
          ></textarea>
        </>
      )}
    </>
  );
};

export default App;
