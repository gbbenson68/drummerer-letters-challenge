import React, { Fragment } from 'react'
import { Editor } from 'react-abc'

const id = 'a-random-id'

const ABCEditor = () => (
  <Fragment>
    <textarea defaultValue={"K:perc\ncccc"} id={id} />
    <Editor editArea={id} />
 </Fragment>
)

export default ABCEditor
