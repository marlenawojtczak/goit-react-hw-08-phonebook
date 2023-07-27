import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 8px;
  height: 180px;
  width: 250px;

  font-size: 14px;
`;

export const Item = styled.li``;

export const Button = styled.button`
  outline: none;
  border: none;
  font-size: 10px;
  color: #fff;
  background-color: #ff0000;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #d30202;
  }
`;
