import { FiPrinter } from 'react-icons/fi'
import { GoSearch } from 'react-icons/go'
import Wrapper from '../../wrappers/FormRow'
import { useDispatch } from 'react-redux'
import { openAddProductModal } from '../../redux/features/modals/modalSlice'
const FormRow = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='icon-input'>
        <input type='text' placeholder='Search...' className='search' />
        <GoSearch className='icon-search' />
      </div>
      <div className='add-print-item'>
        <button
          type='button'
          className='btn'
          onClick={() => dispatch(openAddProductModal())}
        >
          Add item
        </button>
        <FiPrinter className='icon-print' />
      </div>
    </Wrapper>
  )
}
export default FormRow
