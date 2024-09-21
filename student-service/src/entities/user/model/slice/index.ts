import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const name = "user"

interface User {
  phone: string
}

interface UserState {
  data: User | null
}

const initialState: UserState = {
  data: null,
}

export const { reducer, actions } = createSlice({
  name,
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.data = payload
    },
  },
})
