import type { ReactNode } from 'react';

export type Comp3Props = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Comp3({ children }: Comp3Props) {
  return (
    <div>
      {children}
    </div>
  );
}
