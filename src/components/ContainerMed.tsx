import React, { ReactNode } from 'react';

interface ContainerMediumProps {
    children: ReactNode;
}

function ContainerMedium({ children }: ContainerMediumProps): JSX.Element {
  return (
    <div className="w-full bg-base-100 p-4 shadow-xl">
      {children}
    </div>
  );
}

export default ContainerMedium;
