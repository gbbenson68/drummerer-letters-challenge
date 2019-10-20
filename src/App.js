import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const AppBody = styled.body`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const App = () => (
  <AppBody>
    <Header />
    <Main />
    <Footer />
  </AppBody>
)

export default App
