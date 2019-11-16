import React, { Fragment } from 'react'
import { Editor } from 'react-abc'

const id = 'a-random-id'

const ABCEditor = () => (
  <Fragment>
    <textarea defaultValue={"K:perc style=rhythm\nM:4/4\nQ:1/4=60\n[|C2C2C2C2|C2C2C2C2|]"} id={id} />
    <Editor editArea={id} />
 </Fragment>
)

export default ABCEditor
