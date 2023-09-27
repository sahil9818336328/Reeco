import { createSlice } from '@reduxjs/toolkit'
import { ProductsData } from '../../../constants'

const initialState = {
  products: ProductsData,
  amount: 0,
  total: 0,
  isLoading: false,
  isOrderApproved: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    approveOrder: (state) => {
      state.isOrderApproved = true
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0

      state.products.forEach((product) => {
        amount += product.quantity
        total += product.price * product.quantity
      })

      state.amount = amount
      state.total = total
    },

    updateProducts: (state, { payload }) => {
      let itemId = payload.isMissingUrgentProductId
      let price = payload.detailedProductPrice
      let quantity = payload.detailedProductQuantity
      const tempProducts = state.products.map((product) => {
        if (product.id === itemId) {
          return { ...product, price, quantity }
        }

        return product
      })
      state.products = tempProducts
    },

    handleProductStatus: (state, { payload }) => {
      let itemId = payload.id
      let status = payload.status
      const tempProducts = state.products.map((product) => {
        if (product.id === itemId) {
          return { ...product, status }
        }

        return product
      })
      state.products = tempProducts
    },
  },
})

export const {
  approveOrder,
  calculateTotals,
  updateProducts,
  handleProductStatus,
} = productSlice.actions

export default productSlice.reducer
