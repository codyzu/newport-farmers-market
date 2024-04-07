import {type PropsWithChildren, useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

export default function Section({
  children,
  className,
  setInView,
  index,
}: PropsWithChildren<{
  readonly className?: string;
  readonly setInView: (inView: boolean, index: number) => void;
  readonly index: number;
}>) {
  const {ref: elementReference, inView} = useInView();
  useEffect(() => {
    setInView(inView, index);
  }, [inView, setInView, index]);

  return (
    <div ref={elementReference} className={className}>
      {children}
    </div>
  );
}
