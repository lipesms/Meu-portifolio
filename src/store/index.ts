import { configureStore } from '@reduxjs/toolkit'

import navBarSlice from './reducers/navBar'
import api from '../services/api'

const store = configureStore({
  reducer: {
    navBar: navBarSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
