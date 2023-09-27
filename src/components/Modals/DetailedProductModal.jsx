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
  handleFieldName,
  handlePriceChange,
  incrementProductQuantity,
} from '../../redux/features/modals/modalSlice'
import { toast } from 'react-toastify'
import { reasonList } from '../../constants'
import { handleEditReason } from '../../redux/features/product/productSlice'

const DetailedProductModal = () => {
  const [reason, setReason] = useState({ value: '', index: null })
  const dispatch = useDispatch()
  const {
    isDetailedEditProductModalOpen,
    isMissingUrgentProductId,
    detailedProductPrice,
    detailedProductQuantity,
    getFieldName,
  } = useSelector((store) => store.modal)
  const { products } = useSelector((store) => store.product)

  const missingProduct = products.find(
    (product) => product.id === isMissingUrgentProductId
  )
  const {
    productName,
    brand,
    price,
    quantity,
    image,
    reason: reasonText,
  } = isMissingUrgentProductId && missingProduct

  useEffect(() => {
    dispatch(getProductInfo({ price, quantity }))
  }, [isMissingUrgentProductId])

  let total = detailedProductPrice * detailedProductQuantity

  const handleClick = () => {
    const alreadyExists = reasonList.find((reason) => reason.text == reasonText)
    if (alreadyExists && !getFieldName.length) {
      dispatch(closeDetailedEditProductModal())
      return
    }

    if (!reason.value) {
      toast.error('Please update values and choose a reason.')
      return
    }

    dispatch(handleDataSubmission())
    dispatch(closeDetailedEditProductModal())
    setReason({ ...reason, value: '', index: null })
  }

  function validateInput(inputStr) {
    var pattern = /^\d+(\.\d+)?$/

    return pattern.test(inputStr)
  }

  const validateRegex = (input) => {
    if (validateInput(input.target.value)) {
      dispatch(handlePriceChange(input.target.value))
    } else {
      toast.warning('Please enter valid number.')
    }
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
                  onChange={(e) => {
                    dispatch(handleFieldName(`${e.target.name} updated`))
                    validateRegex(e)
                  }}
                  name='price'
                />
              </div>
              <div className='single-row'>
                <span className='label'>Quantity</span>{' '}
                <div className='update-values'>
                  <AiOutlineMinus
                    onClick={() => {
                      if (detailedProductQuantity === 0) {
                        toast.warning('Quantity cannot be less than 0.')
                        return
                      }

                      dispatch(handleFieldName('quantity updated'))
                      dispatch(decrementProductQuantity())
                    }}
                  />
                  <input
                    type='text'
                    value={detailedProductQuantity}
                    className='modal-input'
                    name='quantity'
                  />
                  <AiOutlinePlus
                    onClick={() => {
                      dispatch(handleFieldName('quantity updated'))
                      dispatch(incrementProductQuantity())
                    }}
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
                      (text === reasonText || i === reason.index) && 'active'
                    }`}
                    onClick={() => {
                      if (!getFieldName.length) {
                        toast.error(
                          'Please update values in order to choose a reason.'
                        )
                        return
                      } else {
                        setReason({
                          ...reason,
                          value: text,
                          index: id,
                        })
                        dispatch(
                          handleEditReason({
                            id: isMissingUrgentProductId,
                            reason: text,
                          })
                        )
                      }
                    }}
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
                className={`footer-btn send ${
                  !reason.value && reasonText === '' && 'disabled'
                }`}
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
