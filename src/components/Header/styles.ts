import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 6rem;
    background: ${theme.colors.primary};
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
  `}
`
