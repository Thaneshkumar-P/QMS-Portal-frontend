import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAdmin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdminStatus: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});

export const { setAdminStatus } = authSlice.actions;
export default authSlice.reducer;
