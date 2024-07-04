import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const FullPageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundContent = styled.div`
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 96px;
  color: #dc3545;
  margin: 0;
  animation: ${blink} 1s linear infinite;
`;

const Message = styled.p`
  font-size: 24px;
  color: #ccc;
  margin-top: 20px;
`;

const NotFound = () => {
  return (
    <FullPageContainer>
      <NotFoundContent>
        <Title>404</Title>
        <Message>Page Not Found</Message>
      </NotFoundContent>
    </FullPageContainer>
  );
};

export default NotFound;