import React from 'react';
import '../styles/index.css';

interface HeaderProps {
  title?: string;
  sum?: number;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ title, sum, className }: HeaderProps) => {
  return (
    <div>
      <h1 className={`h1 ${className}`}>{title}{sum}</h1>
    </div>
  );
};

export default Header;