import styled from 'styled-components'

const StyledFormRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2.8rem;
  .icon-input {
    border-radius: 1.5rem;
    border: 2px solid #eee;
    display: flex;
    align-items: center;
    width: 30vw;
    padding-right: 1rem;

    .search {
      outline: none;
      border-radius: 1.5rem;
      border: none;
      padding: 0.5rem 0.8rem;
      width: 100%;
    }

    .search[type='text'] {
      font-size: 13px;
      font-weight: 500;
    }

    .icon-search {
      color: var(--grey-400);
      stroke-width: 0.6;
      font-size: 1.2rem;
    }
  }

  .add-print-item {
    display: flex;
    align-items: center;
    gap: 3rem;

    .icon-print {
      color: var(--primary-100);
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`

export default StyledFormRowWrapper
