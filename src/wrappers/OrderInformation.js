import styled from 'styled-components'

const StyledOrderInformationWrapper = styled.section`
  background-color: #fbfbfb;
  margin-top: 0.5rem;
  padding: 1.5rem 0;
  position: relative;
  z-index: -1;

  .order-information-sections {
    display: flex;
    justify-content: space-between;
    border: 2px solid #eee;
    border-radius: 0.5rem;
    padding: 1.5rem 0;

    .single-category {
      width: 14vw;
      padding: 0 3rem;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      border-right: 2px solid #eee;
      gap: 0.8rem;

      .title {
        color: #929292;
        font-weight: 600;
      }

      .description {
        font-weight: 600;
        line-height: 1.3;
        font-size: 1.2rem;
      }

      .icon-container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;

        .icon {
          font-size: 1.4rem;
          color: #929292;
        }
      }
    }
  }
`

export default StyledOrderInformationWrapper
