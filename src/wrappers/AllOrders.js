import styled from 'styled-components'

const StyledAllOrdersWrapper = styled.section`
  background-color: #fbfbfb;

  .inner-container {
    border: 2px solid #eee;
    border-radius: 0.5rem;
    padding: 1.5rem 0;
    background-color: var(--white);

    .all-orders {
      margin-top: 1.5rem;
      padding: 0 3rem;

      .table-headings {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr 1fr 2fr;
        border: 0.15rem solid #eee;
        border-top-right-radius: 0.7rem;
        border-top-left-radius: 0.7rem;
        padding: 0.6rem 0;
        padding-left: 3rem;
        gap: 2rem;

        span {
          color: var(--grey-400);
        }
      }

      .products-data {
        .single-order {
          border-bottom: 2px solid var(--grey-300);
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 2fr;
          padding-left: 3rem;
          gap: 2rem;

          span {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 0.8rem 0;
            color: var(--grey-500);
          }

          .edit-order {
            display: flex;
            justify-content: flex-end;
            padding-right: 1rem;
            background-color: #f9f9f9;

            svg {
              font-size: 1.5rem;
            }
          }

          .product-img {
            margin-left: -2rem;
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
`

export default StyledAllOrdersWrapper
