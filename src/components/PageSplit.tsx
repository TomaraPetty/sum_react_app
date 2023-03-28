import React from 'react';
import '../styles/index.css';

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