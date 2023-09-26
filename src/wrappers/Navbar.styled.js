import styled from 'styled-components'

const StyledNavbarWrapper = styled.nav`
  background-color: var(--primary-500);
  color: var(--white);
  display: flex;
  padding: 1rem 0;

  .container {
    .navbar {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .navbar-section-left {
        display: flex;
        align-items: center;

        .logo {
          font-size: 1.5rem;
          text-transform: capitalize;
          margin-right: 4rem;
        }

        ul {
          display: flex;
          gap: 5rem;

          li {
            text-transform: capitalize;
            color: #d2e0d9;
            cursor: pointer;
          }
        }
      }

      .navbar-section-right {
        display: flex;
        gap: 5rem;

        .cart {
          position: relative;
          .total-items {
            position: absolute;
            left: -10px;
            bottom: 8px;
            background: #3dca72;
            width: 20px;
            height: 20px;
            line-height: 20px;
            font-size: 11px;
            border-radius: 50%;
            color: var(--white);
            text-align: center;
            display: block;
          }

          .cart-icon {
            margin-bottom: -1rem;
            font-size: 1.5rem;
          }
        }

        .user {
          display: flex;
          align-items: center;
          text-transform: capitalize;
          letter-spacing: var(--letter-spacing);
          gap: 0.5rem;
        }
      }
    }
  }
`

export default StyledNavbarWrapper
