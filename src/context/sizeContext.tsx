// 一些context是通用的，比如form设置的size应该贯穿给FormItem里面的input，
// 所以需要公共的context
import * as React from 'react';
export type SizeType = 'small' | 'middle' | 'large';

const SizeContext = React.createContext<{ size: SizeType } | null>(null);

export { SizeContext };
