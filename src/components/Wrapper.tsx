import React from 'react';
import '../styles/index.css';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }: WrapperProps) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  );
};

export default Wrapper;