import React from 'react'
import styled from 'styled-components'
import { withSnackbar } from 'notistack'

const StyledNav = styled.nav`
  border-right: 1px solid white;
  min-height: 83vh;
  min-width: 15vw;
`

const NavBar = (props) => (
  <StyledNav>
    This is the Nav Bar.
  </StyledNav>
)

export default withSnackbar(NavBar)
