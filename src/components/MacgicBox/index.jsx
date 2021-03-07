import { useMagicColor } from '$hooks';
import React from 'react';
import './styles';

const MagicBox = () => {
  const { color } = useMagicColor();

  return (
    <div
      className="magic-box"
      style={{ color, backgroundColor: color }}
    />
  );
};

export default MagicBox;