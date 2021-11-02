import { MODE } from '@Config/env.config'
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import userSlice from './user/user.slice'

const isDevelop = MODE === 'dev'

export const store = configureStore({
  reducer: {
    user: userSlice
  },
  devTools: isDevelop,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
