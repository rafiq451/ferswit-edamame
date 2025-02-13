import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import Container from '../Container/Container';
const StyledRatting = styled.div`
  position: absolute;
  margin-top: -5rem;
  padding: 1rem;
  text-align: center;
  width: 100%;
  background-color: var(--bg-color);

  #ratting {
    position: relative;
  }

  #ratting h3 {
    font-family: 'REM', serif;
    color: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 500;
  }

  .underline {
    width: 20%;
    height: 2px;
    background-color: var(--secondary-color);
    margin: 8px auto;
  }

  .ratting-icons span svg {
    font-size: 23px; /* Sesuaikan ukuran */
    color: var(--primary-color); /* Tambahan jika ingin warna emas */
  }

  @media (max-width: 992px) {
    margin-top: 19rem;
  }
  @media (max-width: 768px) {
    margin-top: 14rem;
    .underline {
      width: 50%;
    }
  }
`;
const Ratting = () => {
  return (
    <StyledRatting>
      <section id="ratting">
        <Container>
          <h3>Kesehatan Anda adalah prioritas utama kami</h3>
          <div className="underline my-3"></div>
          <div className="ratting-icons d-flex justify-content-center align-items-center gap-3">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
        </Container>
      </section>
    </StyledRatting>
  );
};

export default Ratting;
