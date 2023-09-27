import OrderInformation from './OrderInformation'
import AllProducts from './AllProducts'
import MissingUrgent from '../Modals/MissingUrgent'
import DetailedProductModal from '../Modals/DetailedProductModal'
import AddProduct from '../Modals/AddProduct'

const index = () => {
  return (
    <>
      <OrderInformation />
      <AllProducts />
      <MissingUrgent />
      <DetailedProductModal />
      <AddProduct />
    </>
  )
}
export default index
