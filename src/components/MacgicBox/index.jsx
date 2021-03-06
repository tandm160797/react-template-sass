import useMagicColor from '$hooks/useMagicColor';
import React from 'react';
import './styles.scss';

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