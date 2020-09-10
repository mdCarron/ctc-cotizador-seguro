import React from "react";
import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
  margin-top: 1rem;
  padding: 10px;
  font-weight: bold;
  background-color: #26c6da;
  color: #ffffff;
`;

const TextoHeader = styled.h1`
  font-size: 2em;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

export default Header;
