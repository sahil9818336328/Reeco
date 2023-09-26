import img from '../../assets/Avocado Hass.jpg'
import { BsCheck2 } from 'react-icons/bs'
import { IoCloseOutline } from 'react-icons/io5'

const SingleOrder = ({ productName, brand, price, quantity, total }) => {
  return (
    <div className='single-order'>
      <span>
        <img src={img} alt='product-image' className='product-img' />{' '}
        {productName}
      </span>
      <span>{brand}</span>
      <span>{price}</span>
      <span>{quantity}</span>
      <span>{total}</span>
      <span className='edit-order'>
        <BsCheck2 />
        <IoCloseOutline />
        Edit
      </span>
    </div>
  )
}
export default SingleOrder
