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
        .single-product {
          border-bottom: 2px solid var(--grey-300);
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr 340px;
          padding-left: 3rem;
          gap: 1.8rem;

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

            .approved {
              background-color: #3dca72;
            }

            .missing {
              background-color: #f66d44;
            }

            .missing-urgent {
              background-color: #db2114;
            }

            .status {
              display: inline-block;
              text-transform: capitalize;
              margin-right: auto;
              margin-left: 1.5rem;
              padding: 0.5rem 1rem;
              border-radius: var(--border-radius);
              color: var(--white);
            }

            .check {
              color: #3dca72;
              stroke-width: 1.3;
            }

            .cross {
              stroke-width: 1.2;
              color: #f66d44;
            }

            .urgent-cross {
              stroke-width: 1.2;
              color: #db2114;
            }

            .edit-btn {
              background-color: transparent;
              border: none;
              cursor: pointer;
              color: var(--grey-500);
            }
            svg {
              cursor: pointer;
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
