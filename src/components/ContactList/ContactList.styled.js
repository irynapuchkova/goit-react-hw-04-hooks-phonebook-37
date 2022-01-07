import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  list-style-type: none;
  width: 100%;
`;

export const Contact = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 10px;
  overflow: auto;

  &:hover {
    background: #eee;
    cursor: pointer;
  }
`;

export const ContactData = styled.p`
  display: flex;
`;

export const BtnDelete = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  padding: 2%;

  font-size: 16px;
  font-weight: 400;

  background: #188d8d;
  color: #fff;

  border-bottom: 2px solid #30c29e;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  cursor: pointer;

  &:hover {
    background: #2ebc99;
  }
`;
