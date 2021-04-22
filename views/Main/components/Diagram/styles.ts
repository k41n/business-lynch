import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  border: solid 1px blue;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  width: 200px;

  & > img {
    height: 200px;
    width: 200px;
  }
`;
