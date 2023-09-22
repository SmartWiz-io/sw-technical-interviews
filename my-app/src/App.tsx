// src/App.tsx

import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #00c6ff, #0072ff);
`

const AppTitle = styled.h1`
  color: white;
  font-size: 60px;
`

export default function App() {
  return (
    <AppContainer>
      <AppTitle>Welcome to My App!</AppTitle>
    </AppContainer>
  )
}