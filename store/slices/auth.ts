import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {
      userId: null,
      userName: null,
      email: null,
      accessToken: null,
      refreshToken: null,
    },
    message: '',
    messages: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.message = action.payload.code;
      state.data = action.payload.data;
      state.messages = action.payload.messages;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
