import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  border-top: 1px solid white;
  font-size: 0.8rem;
  min-height: 2vh;
  min-width: 100vw;
  margin-top: 0.2rem;
  padding: 0.4rem 0.4rem 0 0.4rem;
`

const Footer = () => (
  <StyledFooter>
    © Guy B. Benson
  </StyledFooter>
)

export default Footer
