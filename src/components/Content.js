import React from 'react'
import styled from 'styled-components'
import { withSnackbar } from 'notistack'
import ABCEditor from './ABCEditor'
import ABCMidi from './ABCMidi'

const ContentDiv = styled.div`
  background: white;
  color: black;
  min-height: 83vh;
  min-width: 85vw;
`

const Content = (props) => (
  <ContentDiv>
    This is the main content.
    <ABCEditor />
    <ABCMidi />
  </ContentDiv>
)

export default withSnackbar(Content)
