import { BsCheck2 } from 'react-icons/bs'
import { VscClose } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  handleEditModalData,
  openDetailedEditProductModal,
  openMissingUrgentModal,
} from '../../redux/features/modals/modalSlice'
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

  const handleClick = (id) => {
    if (isOrderApproved) {
      toast.error('Cannot update status as the order is approved.')
      return
    } else {
      dispatch(openMissingUrgentModal({ productName, id }))
    }
  }

  const handleApprove = (id, status) => {
    if (isOrderApproved) {
      toast.error('Cannot update status as the order is approved.')
      return
    } else {
      dispatch(handleProductStatus({ id, status }))
      toast.success(`Product with id "${id}" marked as approved`)
    }
  }

  let combinationStatus = 'Price and Quantity updated'
  const renderClass = () => {
    if (status === 'Missing - Urgent') {
      return 'missing-urgent'
    } else if (
      status === 'price updated' ||
      status === 'quantity updated' ||
      status === combinationStatus
    ) {
      return 'approved'
    } else {
      return status
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
          <span className={` status   ${renderClass()}`}>
            {status === combinationStatus
              ? 'Price and Quantity updated'
              : status}
          </span>

          <BsCheck2
            className={`${status === 'approved' ? 'check' : ''}`}
            onClick={() => handleApprove(id, 'approved')}
          />
          <VscClose
            className={`${
              status === 'missing'
                ? 'cross'
                : status === 'Missing - Urgent'
                ? 'urgent-cross'
                : ''
            }`}
            onClick={() => handleClick(id)}
          />
          <button
            type='button'
            className='edit-btn'
            onClick={() => {
              if (isOrderApproved) {
                toast.error('Cannot update status as the order is approved.')
                return
              } else {
                dispatch(handleEditModalData({ id }))
                dispatch(openDetailedEditProductModal())
              }
            }}
          >
            Edit
          </button>
        </span>
      </div>
    </>
  )
}
export default SingleProduct
