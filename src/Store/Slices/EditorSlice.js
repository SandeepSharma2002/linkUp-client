import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  des: null,
};

export const editorSlice = createSlice({
  name: "EditorState",
  initialState,
  reducers: {
    SetBlogData: (state, action) => {
      let { title, des } = action.payload;
      state.title = title;
      state.des = des;
    },
  },
});

export const { SetBlogData } = editorSlice.actions;
export default editorSlice.reducer;
