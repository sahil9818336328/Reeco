import Wrapper from '../wrappers/OrderBanner.styled'
import { BsChevronRight } from 'react-icons/bs'

const OrderBanner = () => {
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
            <button type='button' className='btn approve'>
              Approve order
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default OrderBanner
