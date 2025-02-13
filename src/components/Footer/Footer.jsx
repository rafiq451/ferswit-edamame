import React from 'react';
import bpom from '../../assets/bpom.png';
import halal from '../../assets/halal.png';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #9fcf6e;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1); /* Efek shadow untuk depth */

  .tagline {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 90%;
  }

  .tagline-1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .tagline-1 img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .tagline-1 img:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Animasi interaktif */
  }

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    margin: 0;
    transition: color 0.3s ease;
  }

  .tag1 {
    display: block;
  }
  .tag2 {
    display: none;
  }

  h2:hover {
    color: #2c3e50; /* Warna berubah saat hover */
  }

  @media (max-width: 600px) {
    .tagline {
      flex-direction: column;
      text-align: center;
    }

    .tagline-1 img {
      width: 50px;
      height: 50px;
    }

    .tag1 {
      display: none;
    }

    .tag2 {
      display: block;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="tagline">
        <div className="tagline-1 tag1">
          <img src={bpom} alt="BPOM Logo" />
        </div>
        <div className="tagline-1">
          <h2>Sudah Aman & Tersertifikasi</h2>
        </div>
        <div className="tagline-1 row d-flex justify-content-center align-items-center gap-2">
          <div className="tag2 col">
            <img src={bpom} alt="BPOM Logo" />
          </div>
          <div className="tag3 col">
            <img src={halal} alt="Halal Logo" />
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
