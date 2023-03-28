import React from 'react';
import '../styles/index.css';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }: PageProps) => {
  return (
    <div className='page'>
      {children}
    </div>
  );
};

export default Page;