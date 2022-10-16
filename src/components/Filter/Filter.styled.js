import styled from "styled-components";

const Input = styled.input`
    display: block;
    width: 288px;
    margin: 0 auto;
    padding: 11px 16px;
    outline: none;
    background: #F4F4F4;
    border: 1px solid #C5C5C5;
    border-radius: 6px;

    &:focus {
        border: 1px solid #4CC6F5;
        background-color: #ffffff;
    }
`;

const Label = styled.label`
    display: block;
    width: 288px;
    margin: 0 auto;
    padding: 11px 16px;
`;

export { Input, Label };