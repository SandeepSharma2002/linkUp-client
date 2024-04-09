import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  banner: null,
  content: [],
  tags: [],
  des: null,
  author: {},
};

export const editorSlice = createSlice({
  name: "EditorState",
  initialState,
  reducers: {
    SetBlogData: (state, action) => {
      let { title, banner, content, tags, des, author } = action.payload;
      state.title = title;
      state.banner = banner;
      state.content = content;
      state.tags = tags;
      state.des = des;
      state.author = author;
    },
  },
});

export const { SetBlogData } = editorSlice.actions;
export default editorSlice.reducer;
