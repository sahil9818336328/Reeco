import { useEffect } from 'react'
import Wrapper from '../../wrappers/AllProducts'
import FormRow from './FormRow'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleProductStatus,
  updateProducts,
} from '../../redux/features/product/productSlice'
import { handleCloseSubmission } from '../../redux/features/modals/modalSlice'
import { toast } from 'react-toastify'

const AllProducts = () => {
  const { products } = useSelector((store) => store.product)
  const {
    isDataSubmitted,
    isMissingUrgentProductId,
    detailedProductPrice,
    detailedProductQuantity,
  } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isDataSubmitted) {
      dispatch(
        updateProducts({
          isMissingUrgentProductId,
          detailedProductPrice,
          detailedProductQuantity,
        })
      )
      dispatch(
        handleProductStatus({
          id: isMissingUrgentProductId,
          status: 'missing urgent',
        })
      )
      toast.success(
        `Product with id "${isMissingUrgentProductId}" marked as missing urgent`
      )
      dispatch(handleCloseSubmission())
    }
  }, [isDataSubmitted])

  return (
    <Wrapper>
      <div className='container'>
        <div className='inner-container'>
          <FormRow />
          <div className='all-orders'>
            <div className='table-headings'>
              <span>Product name</span>
              <span>Brand</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Status</span>
            </div>
            <div className='products-data'>
              {products.map((product) => {
                return <SingleProduct key={product.id} {...product} />
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default AllProducts
