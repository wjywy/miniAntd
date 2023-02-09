import Icon from 'cheesi/icon';
import React, { FC, useState } from 'react';

interface optionType {
  title: string;
  value: number | string;
}
interface ISelectProps {
  defaultValue: number | string;
  options: optionType[];
  //   onChange: (e: any) => {};
}

const Selector: FC<ISelectProps> = ({ defaultValue, options }) => {
  const [ifSelect, setIfSelect] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="select-body">
      <div className="select-header">
        <span
          className="defaultcard"
          onClick={() => {
            setIsOnFocus(!isClick);
            setIsClick(!isClick);
          }}
        >
          <Icon name="arrow-down" size="16"></Icon>
          <span>{ifSelect ? value : defaultValue}</span>
        </span>
        {!isOnFocus ? (
          <span></span>
        ) : (
          options.map((item: optionType, index: number) => {
            return (
              <span
                className={`card`}
                key={index}
                onClick={() => {
                  setIfSelect(true);
                  setValue(item.title);
                  setIsOnFocus(false);
                  console.log(1);
                }}
              >
                {item.title}
              </span>
            );
          })
        )}
      </div>
    </div>
  );
};
export default Selector;
