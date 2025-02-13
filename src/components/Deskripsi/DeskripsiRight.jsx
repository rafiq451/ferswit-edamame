import React from 'react';
import styled from 'styled-components';
import Gambar3 from '../../assets/edamame3.png';

const StyledDeskripsiRight = styled.section`
  .bg-content-2 {
    margin-top: 15rem;
    display: flex;
    flex-wrap: wrap;
  }

  .content-left-1 {
    padding-left: 5rem;
  }

  .content-right-1 h1 {
    color: var(--primary-color);
    font-family: 'REM', serif;
    font-weight: 700;
    font-size: 2.5rem;
  }

  .deskripsi-img-1 {
    position: relative;
    max-width: 420px;
  }
  .deskripsi-img-1 img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: drop-shadow(-20px 10px 10px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 992px) {
    .deskripsi-img-1 {
      max-width: 490px;
    }
    .bg-content-2 {
      margin-top: 3rem;
    }
    .content-left-1 {
      padding-left: 1rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 768px) {
    .bg-content-2 {
      margin-top: 1rem;
    }
    .content-left-1 {
      margin-top: 5rem;
    }

    .content-right-1 {
      padding-left: 1rem;
    }

    .content-right-1 h1 {
      font-size: 1.8rem;
    }

    .deskripsi-img-1 {
      max-width: 500px;
    }
  }
`;
const DeskripsiRight = () => {
  return (
    <StyledDeskripsiRight>
      <div className="bg-content-2 row d-flex justify-content-center align-items-center">
        <section className="content-left-1 col-12 col-md-10 col-lg-6 ">
          <div className="deskripsi-img-1">
            <img src={Gambar3} alt="" />
          </div>
        </section>
        <section className="content-right-1 col-12 col-md-10 col-lg-6">
          <h1>Dengan mengonsumsi susu edamame kami secara teratur, Anda dapat:</h1>
          <ul className="deskripsi fs-6 lh-lg">
            <li>Meningkatkan energi dan stamina</li>
            <li>Membantu mengurangi risiko penyakit kronis</li>
            <li> Meningkatkan kesehatan kulit dan rambut</li>
            <li>Membantu mengurangi peradangan dan nyeri</li>
            <li>Membantu anda menjadi lebih bahagia dan percaya diri</li>
          </ul>
        </section>
      </div>
    </StyledDeskripsiRight>
  );
};

export default DeskripsiRight;
