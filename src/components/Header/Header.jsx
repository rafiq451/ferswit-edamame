import React from 'react';
import styled from 'styled-components';
import Judul from '../../assets/header/judul.png';
import Container from '../Container/Container';
const StyledHeader = styled.header`
  position: relative;
  overflow: hidden; /* Tambahkan ini */
  .header-img {
    max-width: 200px;
  }
  .header-img img {
    width: 100%;
  }

  /* bg-blur */
  .bg-blur {
    filter: blur(10px);
    border-radius: 50%;
    background-color: var(--secondary-color);
    width: 200px;
    height: 200px;
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <div className="bg-blur position-absolute top-0 start-100 translate-middle"></div>
      <Container>
        <section id="header" className="d-flex justify-content-center">
          <div className="header-img ">
            <img src={Judul} alt="edamame" />
          </div>
        </section>
      </Container>
    </StyledHeader>
  );
};

export default Header;
