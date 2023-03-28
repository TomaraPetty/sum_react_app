import React from 'react';

interface PageSplitProps {
  children: React.ReactNode;
  side: string;
}

const PageSplit: React.FC<PageSplitProps> = ({ children, side }: PageSplitProps) => {
  return (
    <div className={`split ${side}`}>
      {children}
    </div>
  );
};

export default PageSplit;