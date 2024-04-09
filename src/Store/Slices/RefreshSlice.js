import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postRefresh: true,
};

export const refreshSlice = createSlice({
  name: "RefreshState",
  initialState,
  reducers: {
    setRefresh: (state) => {
      let val = !state.postRefresh;
      state.postRefresh = val;
    },
  },
});

export const { setRefresh } = refreshSlice.actions;
export default refreshSlice.reducer;
