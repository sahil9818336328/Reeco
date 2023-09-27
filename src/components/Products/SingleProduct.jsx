import { BsCheck2 } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { openMissingUrgentModal } from '../../redux/features/modals/modalSlice'
import { handleProductStatus } from '../../redux/features/product/productSlice'

const SingleProduct = ({
  id,
  productName,
  brand,
  price,
  quantity,
  image,
  status,
}) => {
  const { isOrderApproved } = useSelector((store) => store.product)
  const dispatch = useDispatch()

  const handleClick = (id, status) => {
    if (isOrderApproved) {
      toast.error('Cannot update status as the order is approved.')
      return
    } else {
      if (status === 'approved') {
        dispatch(handleProductStatus({ id, status }))
        toast.success(`Product with id "${id}" marked as approved`)
      } else {
        dispatch(handleProductStatus({ id, status }))
        toast.success(`Product with id "${id}" marked as missing`)
      }
    }
  }

  let total = price * quantity
  return (
    <>
      <div className='single-product'>
        <span>
          <img src={image} alt='product-image' className='product-img' />{' '}
          {productName}
        </span>
        <span>{brand}</span>
        <span>${price}</span>
        <span>{quantity}</span>
        <span>${total.toFixed(2)}</span>
        <span className='edit-order'>
          <span
            className={` status   ${
              status === 'missing urgent' ? 'missing-urgent' : status
            }`}
          >
            {status}
          </span>

          <BsCheck2
            className={`${status === 'approved' ? 'check' : ''}`}
            onClick={() => handleClick(id, 'approved')}
          />
          <VscClose
            className={`${
              status === 'missing'
                ? 'cross'
                : status === 'missing urgent'
                ? 'urgent-cross'
                : ''
            }`}
            onClick={() => handleClick(id, 'missing')}
          />
          <button
            type='button'
            className='edit-btn'
            onClick={() =>
              dispatch(openMissingUrgentModal({ productName, id }))
            }
          >
            Edit
          </button>
        </span>
      </div>
    </>
  )
}
export default SingleProduct
