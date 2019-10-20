import React from 'react'
import { Editor } from 'react-abc'

const id = 'a-random-id'
const notation = 'CDEF GABc|'

const ABCEditor = (notation) => (
  <div>
    <textarea defaultValue={notation} id={id} />
    <Editor editArea={id} />
 </div>
)

export default ABCEditor
