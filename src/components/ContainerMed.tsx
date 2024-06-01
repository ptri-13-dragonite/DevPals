import React, { ReactNode } from 'react';

interface ContainerMediumProps {
    children: ReactNode;
}

function ContainerMedium({ children }: ContainerMediumProps): JSX.Element {
  return (
    <div className="artboard phone-1">
      {children}
    </div>
  );
}

export default ContainerMedium;
