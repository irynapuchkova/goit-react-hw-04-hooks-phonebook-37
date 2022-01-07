import styled from '@emotion/styled';

export const Form = styled.form`
  max-width: 100%;
  background: #f7f7f7;
`;

export const Input = styled.input`
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;

  &:focus {
    box-shadow: 0 0 5px #43d1af;
    padding: 3%;
    border: 1px solid #43d1af;
  }
`;

export const BtnSubmit = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding: 3%;
  margin-left: auto;
  margin-right: auto;

  font-size: 16px;
  font-weight: 600;

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
