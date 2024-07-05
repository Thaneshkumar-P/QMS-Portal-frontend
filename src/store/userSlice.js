import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  email: null,
  admin: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      let { username, email, admin } = action.payload;
      state.username = username
      state.email = email
      state.admin = admin
    }
  }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer