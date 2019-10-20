import React from 'react'
import styled from 'styled-components'
import { Midi } from 'react-abc'

const MIDIDiv = styled.div`
  max-width: 50vw;
`

const ABCMidi = () => (
  <MIDIDiv>
    <Midi notation={"K:perc\ncccc"} />
  </MIDIDiv>
)

export default ABCMidi
