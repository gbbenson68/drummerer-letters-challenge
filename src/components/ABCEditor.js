import React from 'react'
import { Editor } from 'react-abc'

const id = 'a-random-id'

const ABCEditor = () => (
  <div>
    <textarea defaultValue={'FAce'} id={id} />
    <Editor editArea={id} />
 </div>
)

export default ABCEditor
