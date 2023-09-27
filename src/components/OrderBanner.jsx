import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../wrappers/OrderBanner.styled'
import { BsChevronRight } from 'react-icons/bs'
import { approveOrder } from '../redux/features/product/productSlice'
import { toast } from 'react-toastify'

const OrderBanner = () => {
  const { isOrderApproved } = useSelector((store) => store.product)
  const dispatch = useDispatch()

  const handleOrderApproval = () => {
    dispatch(approveOrder())
    toast.success('Order approved successfully.')
  }
  return (
    <Wrapper>
      <div className='container'>
        <div className='order-first-row'>
          <div className='order-id'>
            orders <BsChevronRight className='icon-chevron-right' />{' '}
            <span className='id-underline'>order 32457ABC</span>
          </div>
        </div>
        <div className='order-second-row'>
          <div className='order-second-row-left'>order 32457ABC</div>
          <div className='order-second-row-right'>
            <button type='button' className='btn'>
              Back
            </button>
            <button
              type='button'
              className='btn approve'
              onClick={handleOrderApproval}
            >
              {isOrderApproved ? 'Order approved' : 'Approve order'}
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default OrderBanner
