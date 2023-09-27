import styled from 'styled-components'

const StyledDetailedModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  display: grid;
  place-items: center;

  .modal-content {
    padding: 2rem;
    border-radius: 0.8rem;
    .icon-close {
      font-size: 1.5rem;
      display: block;
      margin-left: auto;
      cursor: pointer;
    }

    .product-name {
      font-weight: 600;
      font-size: 1.3rem;
    }

    .product-brand {
      font-size: 1.2rem;
      color: var(--grey-500);
    }

    .modal-main {
      display: flex;
      align-items: center;
      gap: 3rem;

      .product-image {
        width: 200px;
        height: 200px;
        object-fit: contain;
      }

      .labels {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        .total {
          margin-top: 1rem;
        }

        .single-row {
          display: flex;
          align-items: center;
          gap: 8rem;

          .product-total {
            margin-left: 1rem;
          }

          .update-values {
            margin-left: calc(-24px + -0.8rem);
            display: flex;
            gap: 0.8rem;
            align-items: center;
            svg {
              padding: 0.3rem;
              background-color: #3dca72;
              color: var(--white);
              border-radius: 50%;
              font-size: 1.7rem;
              cursor: pointer;
            }
          }

          .modal-input {
            background-color: #fdfdfd;
            width: 100px;
            padding: 0.5rem;
            text-align: center;
            border-radius: 1rem;
            border: 2px solid var(--grey-200);
            outline: none;
          }
        }

        .label {
          font-weight: 500;
          width: 100px;
          color: var(--grey-700);
        }
      }
    }

    .modal-footer {
      .footer-header {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-weight: 600;
        margin-bottom: 1rem;

        span {
          font-size: 0.7rem;
          color: var(--grey-300);
        }
      }

      .option-list {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;

        .single-option {
          padding: 0.6rem 1.3rem;
          border-radius: 1.3rem;
          border: 1px solid #eee;
          color: var(--grey-600);
          cursor: pointer;
        }

        .active {
          background-color: #1e633f;
          color: var(--white);
        }
      }

      .footer-end {
        display: flex;
        gap: 0.6rem;
        justify-content: flex-end;

        .footer-btn {
          padding: 0.6rem 1.5rem;
          background-color: transparent;
          border-radius: 1.5rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .cancel {
          border: none;
          color: #1e633f;
          font-weight: 600;
        }

        .send {
          background-color: #1e633f;
          border: none;
          color: var(--white);
        }

        .disabled {
          background-color: var(--primary-200);
        }
      }
    }
  }
`

export default StyledDetailedModalWrapper
