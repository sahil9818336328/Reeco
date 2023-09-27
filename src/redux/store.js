import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product/productSlice.js'
import modalReducer from './features/modals/modalSlice.js'

export const store = configureStore({
  reducer: {
    product: productReducer,
    modal: modalReducer,
  },
})
