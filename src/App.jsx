// global style
import GlobalStyle from './css/GlobalStyle';
// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

// routes
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Hero from './components/Hero/Hero';
import Ratting from './components/Ratting/Ratting';
import styled from 'styled-components';
import Deskripsi from './components/Deskripsi/Deskripsi';
import Slogan from './components/Slogan/Slogan';
import Footer from './components/Footer/Footer';
import PromoBanner from './components/Promo/PromoSection';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Hero />
        <Ratting />
        <Deskripsi />
        <Slogan />
        <Footer />
        <PromoBanner />
      </Layout>
    </>
  );
}

export default App;
