import React from 'react';
import gambar1 from '../../assets/slogan/1.jpeg';
import gambar2 from '../../assets/slogan/2.jpeg';
import gambar3 from '../../assets/slogan/3.jpeg';
import styled from 'styled-components';
import Container from '../Container/Container';
const StyledSlogan = styled.div`
  /* slogan */
  .slogan-title {
    max-width: 40%;
    margin: auto;
  }
  .slogan-title h2 {
    color: var(--primary-color);
    font-family: 'REM', serif;
    font-weight: 600;
    font-size: 2rem;
  }

  /* slogan-content */
  .slogan-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slogan-img {
    max-width: 400px;
    height: auto;
  }

  .slogan-img img {
    width: 100%;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 992px) {
    #slogan {
      margin-top: 19rem;
    }
    .slogan-title {
      max-width: 60%;
    }
  }
  @media (max-width: 768px) {
    #slogan {
      margin-top: 26rem;
    }
    .slogan-title {
      max-width: 100%;
    }
    .slogan-title h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 400px) {
    #slogan {
      margin-top: 28rem;
    }
    .slogan-title {
      max-width: 100%;
    }
    .slogan-title h2 {
      font-size: 1.8rem;
    }
  }
`;
const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <section id="slogan">
          <div className="slogan-title mt-5 text-center mb-5">
            <h2>Tubuh sehat kembali bersama Ferswit Edamame</h2>
          </div>
          <div className="slogan-content row gap-3 gap-md-0">
            <div className="slogan-img col-md-4 col-12 mb-3">
              <img src={gambar1} alt="slogan1" className="img-fluid" />
            </div>
            <div className="slogan-img col-md-4 col-12 mb-3">
              <img src={gambar2} alt="slogan2" className="img-fluid" />
            </div>
            <div className="slogan-img col-md-4 col-12 mb-3">
              <img src={gambar3} alt="slogan3" className="img-fluid" />
            </div>
          </div>
        </section>
      </Container>
    </StyledSlogan>
  );
};

export default Slogan;
