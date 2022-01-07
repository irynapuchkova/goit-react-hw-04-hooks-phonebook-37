import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 10px 30px;
  background: #f8f8f8;
  border-radius: 6px;
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  background: #43d1af;
  padding: 10px 0;
  font-size: 120%;
  font-weight: 200;
  text-align: center;
  color: #fff;
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
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;

  &:focus {
    box-shadow: 0 0 5px #43d1af;
    padding: 3%;
    border: 1px solid #43d1af;
  }
`;
