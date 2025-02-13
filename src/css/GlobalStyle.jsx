import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
  font-family: Poppins, sans-serif;
}
html {
  scroll-behavior: smooth;
}

:root {
  --primary-color: #344F2E;
  --secondary-color: #94C35B;
  --normal-color: #f8fafc;
  --bg-color: #EAECE9;
}


`;

export default GlobalStyle;
