import React from 'react'
import styled from 'styled-components'
import { withSnackbar } from 'notistack'

const ContentDiv = styled.div`
  background: white;
  color: black;
  min-height: 83vh;
  min-width: 85vw;
`

const Content = (props) => (
  <ContentDiv>
    Something...
  </ContentDiv>
)

export default withSnackbar(Content)
