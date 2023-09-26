import styled from 'styled-components'

const StyledOrderBannerWrapper = styled.section`
  background-color: var(--white);
  box-shadow: var(--shadow-3);
  padding: 1rem 0;
  .order-first-row {
    margin-bottom: 1rem;
    .order-id {
      display: flex;
      text-transform: capitalize;
      color: var(--grey-500);
      .icon-chevron-right {
        margin: 0 0.8rem;
      }

      .id-underline {
        display: inline-block;
        border-bottom: 2px solid var(--grey-500);
      }
    }
  }

  .order-second-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .order-second-row-left {
      font-size: 1.5rem;
      text-transform: capitalize;
      font-weight: 600;
      letter-spacing: var(--letter-spacing);
      display: flex;
      align-self: flex-end;
    }

    .order-second-row-right {
      display: flex;
      gap: 1.4rem;

      .approve {
        background-color: var(--primary-400);
        color: var(--white);
      }
    }
  }
`

export default StyledOrderBannerWrapper
