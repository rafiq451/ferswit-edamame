import React from 'react';
import styled from 'styled-components';
import Gambar2 from '../../assets/edamame2.png';

const StyledDeskripsiLeft = styled.section`
  .bg-content {
    display: flex;
    flex-wrap: wrap;
  }

  .content-right {
    padding-left: 5rem;
  }

  .content-left h1 {
    color: var(--primary-color);
    font-family: 'REM', serif;
    font-weight: 700;
    font-size: 3rem;
  }

  .deskripsi-img {
    position: relative;
    max-width: 420px;
  }
  .deskripsi-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: drop-shadow(20px 10px 10px rgba(0, 0, 0, 0.5));
  }

  @media (max-width: 992px) {
    text-align: center;
    .bg-content {
      margin-top: 3rem;
    }
    .content-right {
      order: -1; /* Gambar pindah ke atas */
      padding-left: 10rem;
      margin-bottom: 2rem;
    }

    .content-left h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    .bg-content {
      flex-wrap: wrap;
      margin-top: 3rem;
    }
    .content-right {
      order: -1; /* Gambar pindah ke atas */
      padding-left: 2rem;
    }

    .content-left h1 {
      font-size: 1.8rem;
    }

    .deskripsi-img {
      max-width: 500px;
    }

    .content-left {
      margin-top: 2rem;
      text-align: center;
    }
  }
`;
const DeskripsiLeft = () => {
  return (
    <StyledDeskripsiLeft>
      <div className="bg-content row d-flex justify-content-center align-items-center">
        <section className="content-left col-12 col-md-10 col-lg-6 ">
          <h1>Solusi Sehat untuk Energi & Produktivitas Anda</h1>
          <p className="deskripsi fs-6 lh-lg">
            edamame kami adalah pilihan yang tepat untuk Anda yang ingin meningkatkan kesehatan dan kualitas hidup. Dibuat dari edamame yang segar dan berkualitas, susu ini kaya akan protein, kalsium, dan antioksidan
          </p>
        </section>
        <section className="content-right col-12 col-md-10 col-lg-6">
          <div className="deskripsi-img">
            <img src={Gambar2} alt="" />
          </div>
        </section>
      </div>
    </StyledDeskripsiLeft>
  );
};

export default DeskripsiLeft;
