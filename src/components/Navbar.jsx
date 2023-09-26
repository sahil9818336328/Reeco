import Wrapper from '../wrappers/Navbar.styled'
import { TfiShoppingCart } from 'react-icons/tfi'
import { FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='navbar'>
          <div className='navbar-section-left'>
            <h3 className='logo'>reeco</h3>
            <ul>
              <li>store</li>
              <li>orders</li>
              <li>analytics</li>
            </ul>
          </div>
          <div className='navbar-section-right'>
            <div className='cart'>
              <span className='total-items'>0</span>
              <TfiShoppingCart className='cart-icon' />
            </div>
            <div className='user'>
              hello, james <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
