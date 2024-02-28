import { Provider } from 'react-redux'

import store from './store/index'

import { GlobalStyle } from './styles'

import Apresentation from './containers/Apresentation'
import AboutMe from './containers/AboutMe'
import Technologies from './containers/Technologies'
import Projects from './containers/Projects'
import Footer from './containers/Footer'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Apresentation />
        <div className="content">
          <AboutMe />
          <Technologies />
          <Projects />
          <Footer />
        </div>
      </div>
    </Provider>
  )
}

export default App
