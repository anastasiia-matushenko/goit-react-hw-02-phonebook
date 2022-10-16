import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  margin: 50px auto;
  padding: 15px 20px;
  gap: 15px;

  & label {
    width: 100%;
  }
`;

const Input = styled.input`
    display: block;
    width: 100%;
    padding: 11px 16px;
    outline: none;
    background: #F4F4F4;
    border: 1px solid #C5C5C5;
    border-radius: 6px;

    &:focus {
        border: 1px solid #4CC6F5;
        background-color: #ffffff;
    }

    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.16px;
        color: #A8A8A8;
    }
`;

const Label = styled.span`
    display: block;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7F8E9D;
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
    padding: 10px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.16px;

    color: #FFFFFF;
    background: #4CC6F5;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    &:hover {
        background: #29ABDD;
    }
`;

export { Input, Button, Form, Label };