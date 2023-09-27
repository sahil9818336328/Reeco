import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../../wrappers/AddProduct'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { addItemToList } from '../../redux/features/product/productSlice'
import { closeAddProductModal } from '../../redux/features/modals/modalSlice'

const AddProduct = () => {
  const { isAddProductModalOpen } = useSelector((store) => store.modal)
  const [formData, setFormData] = useState({
    productName: '',
    brand: '',
    price: '',
    quantity: '',
    image: '',
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value

    setFormData({ ...formData, [fieldName]: fieldValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      addItemToList({
        id: nanoid(),
        ...formData,
        quantity: +formData.quantity,
        price: +formData.price,
      })
    )
    dispatch(closeAddProductModal())
  }

  return (
    isAddProductModalOpen && (
      <Wrapper>
        <div className='backdrop'>
          <form className='form' onSubmit={handleSubmit}>
            <h3 className='form-title'>Add item</h3>
            <div className='form-row'>
              <div className='form-label'>Product image :</div>
              <input
                type='text'
                className='form-input'
                name='image'
                onChange={handleChange}
                required
                placeholder='Enter image url'
              />
            </div>
            <div className='form-row'>
              <div className='form-label'>Product name :</div>
              <input
                type='text'
                className='form-input'
                name='productName'
                onChange={handleChange}
                required
                placeholder='Enter product name'
              />
            </div>
            <div className='form-row'>
              <div className='form-label'>Product brand :</div>
              <input
                type='text'
                className='form-input'
                name='brand'
                onChange={handleChange}
                required
                placeholder='Enter product brand'
              />
            </div>
            <div className='form-row'>
              <div className='form-label'>Product price :</div>
              <input
                type='number'
                className='form-input'
                name='price'
                onChange={handleChange}
                required
                placeholder='Enter product price'
              />
            </div>
            <div className='form-row'>
              <div className='form-label'>Product quantity :</div>
              <input
                type='number'
                className='form-input'
                name='quantity'
                onChange={handleChange}
                required
                placeholder='Enter product quantity'
              />
            </div>

            <div className='btn-container'>
              <button
                type='submit'
                className='btn'
                onClick={() => dispatch(closeAddProductModal())}
              >
                cancel
              </button>
              <button type='submit' className='btn'>
                submit
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    )
  )
}
export default AddProduct
