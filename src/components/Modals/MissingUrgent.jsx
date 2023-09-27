import { AnimatePresence, motion } from 'framer-motion'
import { VscClose } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import { closeMissingUrgentModal } from '../../redux/features/modals/modalSlice'
import { handleProductStatus } from '../../redux/features/product/productSlice'

const MissingUrgent = () => {
  const {
    productMissingUrgentDescription,
    isMissingUrgentModalOpen,
    isMissingUrgentProductId,
  } = useSelector((store) => store.modal)

  const dispatch = useDispatch()

  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const modal = {
    hidden: {
      y: '110vh',
      opacity: 0,
    },

    visible: {
      y: '70vh',
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  }

  return (
    <AnimatePresence mode='wait'>
      {isMissingUrgentModalOpen && (
        <motion.div
          className='backdrop'
          variants={backdrop}
          initial='hidden'
          animate='visible'
          exit={{ opacity: 0 }}
          key='modal'
        >
          <motion.div className='modal-content small' variants={modal}>
            <motion.div className='modal-title'>
              <span>missing product</span>{' '}
              <VscClose
                className='icon-close'
                onClick={() => dispatch(closeMissingUrgentModal())}
              />
            </motion.div>
            <motion.div className='modal-description'>
              is {productMissingUrgentDescription} urgent?
            </motion.div>
            <motion.div className='confirmation-btn'>
              <button
                type='button'
                className='confirm'
                onClick={() => {
                  dispatch(
                    handleProductStatus({
                      id: isMissingUrgentProductId,
                      status: 'missing',
                    })
                  )
                  dispatch(closeMissingUrgentModal())
                }}
              >
                No
              </button>
              <button
                type='button'
                className='confirm'
                onClick={() => {
                  dispatch(
                    handleProductStatus({
                      id: isMissingUrgentProductId,
                      status: 'Missing - Urgent',
                    })
                  )
                  dispatch(closeMissingUrgentModal())
                }}
              >
                Yes
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default MissingUrgent
