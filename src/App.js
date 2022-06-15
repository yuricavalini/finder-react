import { hot } from 'react-hot-loader/root'

import { Theme } from './themes/theme'

const App = () => {
  return (
    <Theme>
      <h1>Teste</h1>
    </Theme>
  )
}

export default hot(App)
