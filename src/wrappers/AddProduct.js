import styled from 'styled-components'

const StyledAddProductWrapper = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .form-title {
    margin-bottom: 1rem;
  }

  .btn-container {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
`

export default StyledAddProductWrapper
