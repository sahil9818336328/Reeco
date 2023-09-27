import Wrapper from '../../wrappers/OrderInformation'
import { orderInformationData } from '../../constants'
import { useSelector } from 'react-redux'

const OrderInformation = () => {
  const { total } = useSelector((store) => store.product)
  return (
    <Wrapper>
      <div className='container'>
        <div className='order-information-sections'>
          {orderInformationData.map((category) => {
            let { id, title, description } = category

            // UPDATE DESCRIPTION FROM REDUX STORE
            if (title === 'Total') {
              description = `$${total.toFixed(2)}`
            }

            return (
              <div className='single-category' key={id}>
                <p className='title'>{title}</p>
                {Array.isArray(description) ? (
                  <div className='icon-container'>
                    {description.map(({ icon: Icon, id }) => (
                      <span key={id} className='icon'>
                        <Icon />
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className='description'>{description}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default OrderInformation
