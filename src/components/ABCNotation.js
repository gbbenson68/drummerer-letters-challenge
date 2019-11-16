import React, { Fragment, Component } from 'react'
import { Notation } from 'react-abc'

class ABCNotation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: 'K:perc\nM:4/4\nQ:1/8=72\nV:V1 stems=up\n[|:[Fg]g[cg]g [Fg]g[cg]g|[Fg]g[cg]g [Fg]g[cg]g|[Fg]g[cg]g [Fg]g[cg]g|[Fg]g[cg]g [Fg]g[cg]g:|]'
    }
}

  render() {
    const { notes } = this.state

    return (
      <Fragment>
        <Notation notation={notes} />
      </Fragment>
    )
  }
}

export default ABCNotation
