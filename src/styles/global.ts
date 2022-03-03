import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: sans-serif;
    }

    body,
    input,
    textarea,
    select,
    button {
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      font-weight: 400;
      font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    }

    img {
      width: 100%;
    }

    @media (max-width: 270px) {
      html {
        font-size: 50%;
      }
    }

    @media (max-width: 220px) {
      html {
        font-size: 43.75%;
      }
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  `}
`

export default GlobalStyles
