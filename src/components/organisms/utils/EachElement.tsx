import { ReactNode } from 'react';

interface EachElementProps<T> {
  render: (item: T, index: number) => ReactNode;
  of: T[];
}

const EachElement = <T,>({ render, of }: EachElementProps<T>) => (
  <>{of.map((item, index) => render(item, index))}</>
);

export default EachElement;
