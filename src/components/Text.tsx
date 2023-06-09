import React from 'react';

interface TextProps {
  message: string;
}

const Text: React.FC<TextProps> = ({ message }: TextProps) => {
  return (
    <div>
      <p className='p1'>{message}</p>
    </div>
  );
};

export default Text;