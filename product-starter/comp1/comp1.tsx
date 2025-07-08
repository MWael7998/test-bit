import type { ReactNode } from 'react';

export type Comp1Props = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Comp1({ children }: Comp1Props) {
  return (
    <div>
      {children}
    </div>
  );
}
