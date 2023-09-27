import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ProductsData } from '../../../constants'

const initialState = {
  products: ProductsData,
  amount: 0,
  total: 0,
  isLoading: false,
  isOrderApproved: false,
}

export const getProducts = createAsyncThunk('product/getProducts', () => {
  return fetch('http://localhost:3000/products')
    .then((response) => response.json())
    .catch((error) => console.log(error))
})

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
      if (status === 'price updated quantity updated') {
        status = 'Price and Quantity updated'
      }

      const tempProducts = state.products.map((product) => {
        if (product.id === itemId) {
          return { ...product, status }
        }

        return product
      })
      state.products = tempProducts
    },

    handleEditReason: (state, { payload }) => {
      let itemId = payload.id
      let reason = payload.reason

      const tempProducts = state.products.map((product) => {
        if (product.id === itemId) {
          return { ...product, reason }
        }

        return product
      })
      state.products = tempProducts
    },

    addItemToList: (state, { payload }) => {
      let newItem = { ...payload, status: '', reason: '' }
      state.products = [...state.products, newItem]
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const {
  approveOrder,
  calculateTotals,
  updateProducts,
  handleProductStatus,
  handleEditReason,
  addItemToList,
} = productSlice.actions

export default productSlice.reducer
