import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500');
  @import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i');

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

`;

// eslint-disable-next-line no-unused-vars
const oldGlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500');

  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    text-align: center;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

`;

export default GlobalStyle;
