import { GlobalStyle } from './styles'

import Apresentation from './containers/Apresentation'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Apresentation />
        <div style={{ outline: '1px solid white', height: '100vh' }}></div>
      </div>
    </>
  )
}

export default App
