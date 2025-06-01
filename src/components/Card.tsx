import React from 'react';
import { Card as AntCard, CardProps } from 'antd';

export const Card: React.FC<CardProps> = ({ children, ...rest }) => {
  return (
    <AntCard
      style={{ borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      {...rest}
    >
      {children}
    </AntCard>
  );
};
