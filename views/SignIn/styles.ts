import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

export const SigninButton = styled.div`
  align-items: center;
  background: #4c7ebf;
  border-radius: 4px;
  justify-content: center;
  display: flex;
  height: 10vh;
  width: 90%;

  & > svg {
    height: 50px;
    margin-right: 20px;
    width: 50px;
  }
`;

