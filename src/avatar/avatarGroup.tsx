import classNames from 'classnames';
import React,{ FC,useRef } from 'react';
import Avatar from './avatar';

interface BaseAvatarGroupProps {
  row?: number;
  children?: React.ReactChild[];
  className?: string;
}

export type AvatarGroupProps = Partial<BaseAvatarGroupProps>;

const AvatarGroup: FC<AvatarGroupProps> = ({ row, children, className }) => {
  const classes = classNames('AvatarGroup', className);
  let contents: React.ReactChild[] = [];
  if (row !== undefined && children !== undefined && children !== null) {
    //定义了一行最大数量
    // console.log((children as ReactChild).toString());
    let delta = children.length - row;
    for (let i = 0; i < Math.min(row,children.length); i++) {
      contents.push(children[i]);
    }
    if (delta > 0) {
      //数量多了
      contents.push(<Avatar text={`+${delta}`}></Avatar>);
    }
  }
  const AvatarGroupDom = useRef<HTMLDivElement>(null);
  return (
    <div className={classes} ref={AvatarGroupDom}>
      {contents}
    </div>
  );
};

AvatarGroup.defaultProps = {
  row: 10,
};

export default AvatarGroup;
