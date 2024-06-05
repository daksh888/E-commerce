import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLoginData: (state, action) => {
      console.log("setLoginData called!!")
      state.user = action.payload.email;
      state.accessToken = action.payload.access_token;
      state.refreshToken = action.payload.refresh_token;
      console.log("at slice", state.accessToken)
    },
    isAuthenticated: (state, action) => {
      if (state.accessToken) {
        return state.user,state.accessToken
      }
    },
    logout: (state, action) => {
        state.accessToken = null
        return state.user
    }
  },
});

export const { setLoginData ,isAuthenticated} = loginSlice.actions;
export default loginSlice.reducer;
