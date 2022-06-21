import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
// import { hotjar } from 'react-hotjar'

import AppRoutes from './routes/Routes'
import { GlobalStyle } from './themes/GlobalStyle'
import { theme } from './themes/theme'

// hotjar.initialize(hjid, hjsv)
// hotjar.identify('USER_ID', { userProperty: 'value' })
// hotjar.event('button-click')
// hotjar.stateChange('/my/page')

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default hot(App)
