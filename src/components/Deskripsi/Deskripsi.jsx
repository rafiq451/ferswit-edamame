import React from 'react';
import styled from 'styled-components';
import Container from '../Container/Container';
import BgContent from '../../assets/bg/bg-content1.png';
import BgContent2 from '../../assets/bg/bg-c-mobile1.png';
import BgContent3 from '../../assets/bg/bg-c-tablet.png';
import DeskripsiLeft from './DeskripsiLeft';
import DeskripsiRight from './DeskripsiRight';

const StyledDeskripsi = styled.div`
  padding-top: 12rem;
  /* bg_content */
  .bg_content {
    position: relative;
    margin-top: -6rem;
    padding-top: 3rem;
    width: 100%;
    background-image: url(${(props) => props.$bgImg});
    background-size: cover;
    background-position: center;
    height: 1200px;

    /* Ganti background saat layar kecil */
    @media (max-width: 992px) {
      background-image: url(${(props) => props.$bgImgMedium});
      margin-top: 16rem;
      height: 1400px;
    }

    @media (max-width: 768px) {
      margin-top: 12rem;
      height: 1300px;
      background-image: url(${(props) => props.$bgImgSmall});
    }
  }
`;

const Deskripsi = () => {
  return (
    <StyledDeskripsi $bgImg={BgContent} $bgImgMedium={BgContent3} $bgImgSmall={BgContent2}>
      <section id="hero" className="bg_content">
        <Container>
          <DeskripsiLeft />
          <DeskripsiRight />
        </Container>
      </section>
    </StyledDeskripsi>
  );
};

export default Deskripsi;
