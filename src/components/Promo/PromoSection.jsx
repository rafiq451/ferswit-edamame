import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import ChatWa from '../../utils/ChatWa';

// Animasi fade in saat muncul
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Animasi pulse untuk harga promo
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const PromoSection = styled.section`
  text-align: center;
  padding: 20px;
  border-top: 2px solid #c0d6a6;
  animation: ${fadeIn} 1s ease-in-out;

  .promo-text {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .old-price {
    text-decoration: line-through;
    color: gray;
    font-size: 1rem;
  }

  .new-price {
    color: red;
    font-size: 1.5rem;
    font-weight: bold;
    display: inline-block;
    animation: ${pulse} 1.5s infinite; /* Harga promo akan sedikit membesar dan mengecil */
  }

  .sub-text {
    font-size: 1rem;
    color: #2c3e50;
    margin-top: 10px;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
  }

  .whatsapp-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: #9fcf6e;
    color: white;
    padding: 12px 18px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    transform: scale(1);
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .whatsapp-button.outline {
    background-color: white;
    color: #6c8b42;
    border: 2px solid #6c8b42;
  }

  .whatsapp-button:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    .promo-text {
      font-size: 1rem;
    }
    .new-price {
      font-size: 1.3rem;
    }
    .button-group {
      flex-direction: column;
    }
  }
`;

const PromoBanner = () => {
  return (
    <PromoSection>
      <p className="promo-text">Stok sangat terbatas dapatkan harga spesial & gratis ongkir sekarang juga</p>
      <p>
        <span className="old-price">Rp. 198.000</span> &nbsp;
        <span className="new-price">Rp. 94.000</span>
      </p>
      <p className="sub-text">Silahkan klik tombol dibawah ini</p>

      <div className="button-group">
        <a onClick={() => ChatWa('Halo, saya tertarik untuk membeli produk ini. Bisa beri info lebih lanjut?')} className="whatsapp-button">
          <FaWhatsapp size={20} /> Pesan Sekarang
        </a>
        <a onClick={() => ChatWa('Hai Admin! Saya ingin bertanya tentang produk ini sebelum membeli. Bisa dibantu? 😊')} className="whatsapp-button outline">
          <FaWhatsapp size={20} /> Konsultasi Admin
        </a>
      </div>
    </PromoSection>
  );
};

export default PromoBanner;
