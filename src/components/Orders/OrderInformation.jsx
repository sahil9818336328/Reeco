import Wrapper from '../../wrappers/OrderInformation'
import { orderInformationData } from '../../constants'

const OrderInformation = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='order-information-sections'>
          {orderInformationData.map((category) => {
            const { id, title, description } = category

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
