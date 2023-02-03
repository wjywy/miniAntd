import classNames from 'classnames';
import React,{ FC,ReactNode,useRef } from 'react';
export type AvatarSize = 'md' | 'sm' | number;

interface BaseAvatarProps {
  shape?: 'square' | 'circle';
  size?: AvatarSize;

  src?: string;
  alt?: string;

  text?: string;
  icon?: ReactNode;
  style?: object;
  className?: string;
}

export type AvatarProps = Partial<BaseAvatarProps>;

const Avatar: FC<AvatarProps> = ({
  shape,
  size,
  src,
  alt,
  text,
  icon,
  style,
  className,
}) => {
  const classes = classNames('avatar', `avatar-${shape}`, className, {
    [`l-Avatar-${size}`]: size,
  });
  // debugger;
  let content: ReactNode; //头像里的内容
  if (text !== '' && text !== undefined) {
    let scale: number = 20-0.9*text.length ;
    content = <span style={{ fontSize: `${scale}px` }}>{text}</span>;
  } else if (icon !== null) {
    content = icon;
  } else {
    content = <img src={src} alt={alt}></img>;
  }
  // console.log(content);
  //自适应宽度,利用scale

  const avatarDom = useRef<HTMLDivElement>(null);
  return (
    <div className={classes} style={style} ref={avatarDom}>
      {content}
    </div>
  );
};

Avatar.defaultProps = {
  shape: 'circle',
  size: 'md',
  src: '',
  alt: '',
  text: '',
  icon: null,
};

export default Avatar;
