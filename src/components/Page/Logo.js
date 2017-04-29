import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  h1 {
    font-family: 'Lora';
  }
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <h1>One Hundred Years of Lorem Ipsum</h1>
    </LogoWrapper>
  );
};

export default Logo;
