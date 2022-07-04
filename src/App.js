import { hot } from 'react-hot-loader/root'
import { ThemeProvider } from 'styled-components'
// import { hotjar } from 'react-hotjar'
// import TagManager from 'react-gtm-module'

import AppRoutes from './routes/Routes'
import { GlobalStyle } from './themes/GlobalStyle'
import { theme } from './themes/theme'

import { SearchDataProvider } from './context/SearchDataContext'

// hotjar.initialize(process.env.HOTJAR_HJID, process.env.HOTJAR_HJSV)
// hotjar.identify(process.env.HOTJAR_USER_ID, { userProperty: 'value' })
// hotjar.event('button-click')
// hotjar.stateChange('/my/page')

// const tagManagerArgs = {
//   gtmId: process.env.GTM_ID,
// }

// TagManager.initialize(tagManagerArgs)

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SearchDataProvider>
        <GlobalStyle />
        <AppRoutes />
      </SearchDataProvider>
    </ThemeProvider>
  )
}

export default hot(App)
