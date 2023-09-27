import Wrapper from '../../wrappers/DetailedProductModal'
import { useDispatch, useSelector } from 'react-redux'
import { VscClose } from 'react-icons/vsc'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {
  closeDetailedEditProductModal,
  decrementProductQuantity,
  getProductInfo,
  handleDataSubmission,
  handlePriceChange,
  incrementProductQuantity,
} from '../../redux/features/modals/modalSlice'
import { toast } from 'react-toastify'
import { reasonList } from '../../constants'

const DetailedProductModal = () => {
  const [reason, setReason] = useState({ value: '', index: null })
  const dispatch = useDispatch()
  const {
    isDetailedEditProductModalOpen,
    isMissingUrgentProductId,
    detailedProductPrice,
    detailedProductQuantity,
  } = useSelector((store) => store.modal)
  const { products } = useSelector((store) => store.product)

  const missingProduct = products.find(
    (product) => product.id === isMissingUrgentProductId
  )
  const { productName, brand, price, quantity, image } =
    isMissingUrgentProductId && missingProduct

  useEffect(() => {
    dispatch(getProductInfo({ price, quantity }))
  }, [isMissingUrgentProductId])

  let total = detailedProductPrice * detailedProductQuantity

  const handleClick = () => {
    dispatch(closeDetailedEditProductModal())
    dispatch(handleDataSubmission())
  }

  return (
    isDetailedEditProductModalOpen && (
      <Wrapper>
        <div className='modal-content'>
          <span>
            <VscClose
              className='icon-close'
              onClick={() => dispatch(closeDetailedEditProductModal())}
            />
          </span>
          <p className='product-name'>{productName}</p>
          <p className='product-brand'>{brand}</p>
          <div className='modal-main'>
            <img src={image} alt='product-image' className='product-image' />
            <div className='labels'>
              <div className='single-row'>
                <span className='label'>Price ($)</span>{' '}
                <input
                  type='text'
                  value={detailedProductPrice}
                  className='modal-input'
                  onChange={(e) => dispatch(handlePriceChange(e.target.value))}
                />
              </div>
              <div className='single-row'>
                <span className='label'>Quantity</span>{' '}
                <div className='update-values'>
                  <AiOutlineMinus
                    onClick={() => {
                      if (detailedProductQuantity === 1) {
                        toast.warning('Quantity cannot be less than 1.')
                        return
                      }

                      dispatch(decrementProductQuantity())
                    }}
                  />
                  <input
                    type='text'
                    value={detailedProductQuantity}
                    className='modal-input'
                  />
                  <AiOutlinePlus
                    onClick={() => dispatch(incrementProductQuantity())}
                  />
                </div>
              </div>
              <div className='single-row total'>
                <span className='label'>Total</span>{' '}
                <span className='product-total'>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <div className='footer-header'>
              Choose reason <span>(Optional)</span>
            </div>
            <div className='option-list'>
              {reasonList.map((r, i) => {
                const { id, text } = r
                return (
                  <span
                    key={id}
                    className={`single-option ${
                      i === reason.index && 'active'
                    }`}
                    onClick={() =>
                      setReason({ ...reason, value: text, index: id })
                    }
                  >
                    {text}
                  </span>
                )
              })}
            </div>
            <div className='footer-end'>
              <button
                type='button'
                className='footer-btn cancel'
                onClick={() => dispatch(closeDetailedEditProductModal())}
              >
                Cancel
              </button>

              <button
                type='button'
                className={`footer-btn send ${!reason.value && 'disabled'}`}
                disabled={!reason.value}
                title={!reason.value && 'Please choose a reason to proceed'}
                onClick={handleClick}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  )
}
export default DetailedProductModal
