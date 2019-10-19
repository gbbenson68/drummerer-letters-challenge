import React from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

const AppBody = styled.body`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  .App-logo {
      height: 40vmin;
  }

  .App-link {
    color: #09d3ac;
  }
`

const AppCode = styled.div`
font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;
`

function App() {
  return (
    <AppBody>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <AppCode>src/App.js</AppCode> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </AppBody>
  )
}

export default App
