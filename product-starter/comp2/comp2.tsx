import type { ReactNode } from 'react';

export type Comp2Props = {
  /**
   * sets the component children.
   */
  children?: ReactNode;
};

export function Comp2({ children }: Comp2Props) {
  return (
    <div>
      <p>dsagdsagdsa</p>
      {children}
    </div>
  );
}
