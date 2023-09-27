import OrderInformation from './OrderInformation'
import AllProducts from './AllProducts'
import MissingUrgent from '../Modals/MissingUrgent'
import DetailedProductModal from '../Modals/DetailedProductModal'

const index = () => {
  return (
    <>
      <OrderInformation />
      <AllProducts />
      <MissingUrgent />
      <DetailedProductModal />
    </>
  )
}
export default index
