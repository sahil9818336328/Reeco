import { useEffect } from 'react'
import Wrapper from '../../wrappers/AllProducts'
import FormRow from './FormRow'
import SingleProduct from './SingleProduct'
import { useDispatch, useSelector } from 'react-redux'
import {
  handleProductStatus,
  updateProducts,
} from '../../redux/features/product/productSlice'
import {
  handleCloseSubmission,
  resetValues,
} from '../../redux/features/modals/modalSlice'

const AllProducts = () => {
  const { products, isLoading } = useSelector((store) => store.product)

  const {
    isDataSubmitted,
    isMissingUrgentProductId,
    detailedProductPrice,
    detailedProductQuantity,
    getFieldName,
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
          status: getFieldName.join(' '),
        })
      )

      dispatch(handleCloseSubmission())
      dispatch(resetValues())
    }
  }, [isDataSubmitted])

  return (
    <Wrapper>
      <div className='container'>
        {isLoading ? (
          <h2>LOADING...</h2>
        ) : (
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
        )}
      </div>
    </Wrapper>
  )
}
export default AllProducts
