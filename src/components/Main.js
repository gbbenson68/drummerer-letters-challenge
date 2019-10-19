import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Content from './Content'

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
`

const Main = () => (
  <StyledMain>
    <NavBar />
    <Content />
  </StyledMain>
)

export default Main
