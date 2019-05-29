import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars0.githubusercontent.com/u/6144263?v=4"
        alt="Avatar"
      />
      Gabriel Petrovick
    </User>
  </Container>
);

export default Header;
