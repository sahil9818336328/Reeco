import Wrapper from '../../wrappers/AllOrders'
import FormRow from './FormRow'
import { ProductsData } from '../../constants'
import SingleOrder from './SingleOrder'

const AllOrders = () => {
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
              {ProductsData.map((product) => {
                return <SingleOrder key={product.id} {...product} />
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default AllOrders
