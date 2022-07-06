import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Car } from '../pages/Car'
import { Catalog } from '../pages/Catalog'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="catalog" element={<Catalog />} />
      <Route path="car" element={<Car />} />
    </Routes>
  )
}

export default AppRoutes
