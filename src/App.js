import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'

import AppRoutes from './routes/Routes'
import { GlobalStyle } from './themes/GlobalStyle'
import { theme } from './themes/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default hot(App)
