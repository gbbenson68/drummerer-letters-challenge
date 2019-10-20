import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  border-bottom: 1px solid white;
  max-height: 12vh;
  min-width: 100vw;
`

const H1 = styled.h1`
  font-size: 3rem;
`

const Header = (props) => (
  <StyledHeader>
    <H1>Benny Greb Letters Challenge</H1>
  </StyledHeader>
)

export default Header
