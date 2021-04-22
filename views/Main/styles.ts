import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10vw;
`;

export const Label = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
`;

export const Diagrams = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CopyButton = styled.div`
  height: 32px;
  width: 32px;

  & > svg {
    height: 32px;
    width: 32px;
  }
`;
