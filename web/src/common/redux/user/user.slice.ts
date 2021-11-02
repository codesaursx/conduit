import { IUser } from '@Interfaces/user.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TUserData = Omit<IUser, 'password'>

export type TUserState = {
  isLogged: boolean
  data: TUserData
}

export const initialState: TUserState = {
  isLogged: false,
  data: {
    id: 0,
    username: '',
    email: '',
    profilePic: '',
    bio: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<TUserData>) => {
      return {
        ...state,
        data: action.payload
      }
    },

    setUserIsLogged: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLogged: action.payload
      }
    }
  }
})

export const { setUserData, setUserIsLogged } = userSlice.actions

export default userSlice.reducer
