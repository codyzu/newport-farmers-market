import {type PropsWithChildren} from 'react';
import clsx from 'clsx/lite';

export default function NavigationItem({
  children,
  highlight,
}: PropsWithChildren<{readonly highlight: boolean}>) {
  return <div className={clsx(highlight && 'underline')}>{children}</div>;
}
