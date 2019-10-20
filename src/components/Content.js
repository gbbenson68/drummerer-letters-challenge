import React from 'react'
import styled from 'styled-components'
import { withSnackbar } from 'notistack'

const ContentDiv = styled.div`
  min-height: 83vh;
  min-width: 85vw;
`

const Content = (props) => (
  <ContentDiv>
    This is the main content.
  </ContentDiv>
)

export default withSnackbar(Content)
