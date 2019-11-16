import React from 'react'
import styled from 'styled-components'
import { Midi } from 'react-abc'

const MIDIDiv = styled.div`
  max-width: 50vw;
`

const ABCMidi = () => (
  <MIDIDiv>
    <Midi notation={"K:perc\nM:4/4\nQ:1/8=60\n[|C2C2C2C2|C2C2C2C2|]"} />
  </MIDIDiv>
)

export default ABCMidi
