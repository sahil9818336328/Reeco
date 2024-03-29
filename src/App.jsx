import { useEffect } from 'react'
import { Navbar, OrderBanner } from './components'
import Products from './components/Products'
import {
  calculateTotals,
  // getProducts,
} from './redux/features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const { products } = useSelector((store) => store.product)
  const { detailedProductPrice, detailedProductQuantity } = useSelector(
    (store) => store.modal
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(calculateTotals())
  }, [products, detailedProductPrice, detailedProductQuantity])

  // useEffect(() => {
  //   dispatch(getProducts())
  // }, [])

  return (
    <>
      <Navbar />
      <OrderBanner />
      <Products />
    </>
  )
}

export default App
