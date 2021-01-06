import React from 'react';
import styled from 'styled-components';

type Props = {
  color?: string;
  width?: number;
  height?: number;
};

const Logo: React.FC<Props> = ({
  color = '#fff',
  width = 300,
  height = 300,
}) => (
  <SVG
    width={width}
    height={height}
    viewBox="0 0 310 310"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M229 285.506C207.164 297.914 181.91 305 155 305C72.1573 305 5 237.843 5 155C5 72.1573 72.1573 5 155 5C237.843 5 305 72.1573 305 155C305 182.115 297.805 207.55 285.221 229.5"
      stroke={color}
      strokeWidth="6"
    />
    <path
      d="M296 256C296 278.091 278.091 296 256 296C233.909 296 216 278.091 216 256C216 233.909 233.909 216 256 216C278.091 216 296 233.909 296 256Z"
      stroke={color}
      strokeWidth="6"
    />
  </SVG>
);

const SVG = styled.svg``;

export default Logo;
