import React from 'react';
import styled, { keyframes } from 'styled-components';
import Gambarhero from '../../assets/header/gambar-hero1.png';
import Container from '../Container/Container';
import BgHero from '../../assets/bg/bg-hero.png';
import BgHero2 from '../../assets/bg/kotak1.png';
import Garansi from '../../assets/header/garansi.png';
import Cod from '../../assets/header/cod.png';
import { FaShoppingCart } from 'react-icons/fa';
import ChatWa from '../../utils/ChatWa';

// Animasi fade in-out

const fadeInOut = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;
const StyledHero = styled.div`
  padding-top: 6rem;
  /* bg_hero */
  .bg_hero {
    position: relative;
    margin-top: -6rem;
    padding-top: 3.5rem;
    width: 100%;
    background-image: url(${(props) => props.$bgImg});
    background-size: cover;
    background-position: center;
    height: 708px;

    /* Ganti background saat layar kecil */
    @media (max-width: 992px) {
      height: 500px;
      background-image: url(${(props) => props.$bgImgSmall});
    }
  }

  /* bidgre */
  .bidgre {
    bottom: 25%;
    left: 2%;
  }

  .garansi {
    background-color: var(--normal-color);
  }

  .garansi .garansi-img {
    max-width: 4rem;
    position: relative;
  }
  .garansi .garansi-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .garansi p span {
    font-size: 12px;
  }

  .hero-content {
    display: flex;
    flex-wrap: wrap;
  }

  .content-left {
    padding-left: 5rem;
  }

  h1 {
    color: var(--primary-color);
  }

  .hero-img {
    position: relative;
    max-width: 420px;
  }
  .hero-img img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 20px;
    filter: drop-shadow(-20px 10px 10px rgba(0, 0, 0, 0.5));
  }

  /* content-right */
  .content-right h1 {
    font-family: 'REM', serif;
    font-weight: 700;
    font-size: 3.5rem;
  }

  .content-right {
    color: var(--primary-color);

    .subjudul {
      font-size: 1.8rem;
      font-weight: bold;
      animation: ${fadeInOut} 2.5s infinite; /* Animasi berjalan terus */
    }

    .highlight {
      color: #3c5b22;
    }
  }

  .cta-button {
    border: none;
    padding: 8px 15px 8px 15px;
    background-color: var(--secondary-color);
    color: var(--normal-color);
  }
  @media (max-width: 1440px) {
    .content-left {
      padding-left: 8rem;
    }
  }
  @media (max-width: 1280px) {
    .bg_hero {
      height: 40rem;
    }
    .content-left {
      padding-left: 12rem;
    }
  }

  @media (max-width: 992px) {
    .bg_hero {
      height: 40rem;
    }

    .content-right {
      text-align: center;
      margin-top: 5rem;
      /* order: -1; */
    }

    .content-right h1 {
      font-size: 3rem;
    }

    .cta-button {
      margin: auto;
    }

    .content-left {
      padding-left: 10rem;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    .bg_hero {
      height: 46.6rem;
    }
    .bidgre {
      bottom: 15%;
      left: 25%;
    }
    .content-right {
      text-align: center;
      margin-top: 14rem;
      /* order: -1; */
      .subjudul {
        font-size: 1.2rem;
      }
    }
    .content-right h1 {
      font-size: 1.8rem;
    }

    .garansi {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .content-left {
      padding-left: 4rem;
      text-align: center;
    }
  }

  @media (max-width: 400px) {
    .content-right {
      margin-top: 15rem;
    }
  }
`;

const Hero = () => {
  return (
    <StyledHero $bgImg={BgHero} $bgImgSmall={BgHero2}>
      <section id="hero" className="bg_hero">
        <div className="position-absolute bidgre">
          <div className="garansi rounded-3 p-2 d-flex align-items-center mb-3">
            <div className="garansi-img">
              <img src={Garansi} alt="garansi" />
            </div>
            <p className="m-0 p-0 fst-italic lh-sm fw-semibold">
              Garansi <br /> Uang Kembali
            </p>
          </div>
          <div className="garansi rounded-3 p-2 d-flex align-items-center">
            <div className="garansi-img">
              <img src={Cod} alt="garansi" />
            </div>
            <p className="m-0 p-0 fst-italic fs-4 lh-1 fw-semibold">
              COD <br /> <span>Bayar Di Tempat</span>
            </p>
          </div>
        </div>
        <Container>
          <div className="hero-content row d-flex justify-content-center">
            <section className="content-left col-12 col-md-10 col-lg-6 ">
              <div className="hero-img">
                <img src={Gambarhero} alt="" />
              </div>
            </section>
            <section className="content-right col-12 col-md-10 col-lg-6">
              <h1>Jangan Biarkan Kesehatanmu Menurun!</h1>
              <p className="subjudul fw-semibold ">
                Coba <span style={{ color: '#3c5b22' }}>Susu Edamame</span> sekarang juga!
              </p>
              <p className="deskripsi fs-6 ">Dapatkan kesehatan maksimal dan rasakan perbedaannya dengan susu edamame sekarang juga!</p>
              <button type="button" onClick={() => ChatWa('Halo, saya tertarik untuk membeli produk ini. Bisa beri info lebih lanjut?')} className="cta-button rounded-3  d-flex align-items-center justify-content-center gap-2">
                <FaShoppingCart />
                Beli Sekarang
              </button>
            </section>
          </div>
        </Container>
      </section>
    </StyledHero>
  );
};

export default Hero;
