import styled from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    width: 350px;
    flex-direction: column;
    padding: 20px 30px;
    border-radius: 15px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
`;

export const TextInput = styled.input`
    height: 30px;
    line-height: 25px;
    border: solid 1px gray;
    border-radius: 9px;
    margin: 10px 0;
    padding: 5px 11px;

    &:focus {
      outline: none;
      border: 2px solid darkgreen;
      background: #F5FFFA;
    }
`;

export const Title = styled.div`
    font-weight: 500;
`;

export const TextSubmit = styled.button`
  background: #000;
  border-radius: 10px;
  margin-top: 5px;
  color: white;
  padding: 10px 5px;
  border: 0;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background: darkgray;
  }
`;

  export const TextLink = styled(ReachRouterLink)`
    color: green;
    text-decoration: underline;

    &:hover {
      cursor: pointer;
      color: black;
      font-weight: 500;
    }
`;