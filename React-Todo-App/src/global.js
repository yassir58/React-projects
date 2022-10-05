import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    
    transition: all 0.25s linear;
  }
  form {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} !important;
  }
  form input {
    color: ${({ theme }) => theme.text} !important;
  }
  form input::placeholder {
    color: ${({ theme }) => theme.text} !important;
  }
  
#list {
  background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} !important;
}
  `;