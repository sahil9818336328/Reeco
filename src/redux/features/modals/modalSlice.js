import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMissingUrgentModalOpen: false,
  productMissingUrgentDescription: '',
  isMissingUrgentProductId: '',
  isDetailedEditProductModalOpen: false,
  detailedProductPrice: 0,
  detailedProductQuantity: 0,
  isDataSubmitted: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openMissingUrgentModal: (state, { payload }) => {
      state.isMissingUrgentModalOpen = true
      state.productMissingUrgentDescription = payload.productName
      state.isMissingUrgentProductId = payload.id
    },
    closeMissingUrgentModal: (state) => {
      state.isMissingUrgentModalOpen = false
    },
    openDetailedEditProductModal: (state) => {
      state.isDetailedEditProductModalOpen = true
      state.isMissingUrgentModalOpen = false
    },
    closeDetailedEditProductModal: (state) => {
      state.isDetailedEditProductModalOpen = false
    },
    getProductInfo: (state, { payload }) => {
      state.detailedProductPrice = payload.price
      state.detailedProductQuantity = payload.quantity
    },
    incrementProductQuantity: (state) => {
      state.detailedProductQuantity = state.detailedProductQuantity + 1
    },
    decrementProductQuantity: (state) => {
      state.detailedProductQuantity = state.detailedProductQuantity - 1
    },
    handlePriceChange: (state, { payload }) => {
      state.detailedProductPrice = payload
    },
    handleDataSubmission: (state) => {
      state.isDataSubmitted = true
    },
    handleCloseSubmission: (state) => {
      state.isDataSubmitted = false
    },
    removeItemId: (state) => {
      state.isMissingUrgentProductId = null
    },
  },
})

export const {
  openMissingUrgentModal,
  closeMissingUrgentModal,
  openDetailedEditProductModal,
  closeDetailedEditProductModal,
  getProductInfo,
  incrementProductQuantity,
  decrementProductQuantity,
  handlePriceChange,
  handleDataSubmission,
  handleCloseSubmission,
  removeItemId,
} = modalSlice.actions

export default modalSlice.reducer
