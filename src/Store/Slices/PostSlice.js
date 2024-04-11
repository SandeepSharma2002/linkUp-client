import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tag: "latest"
};

export const postSlice = createSlice({
    name: "PostState",
    initialState,
    reducers: {
        setTag: (state, action) => {
            let val = action.payload;
            state.tag = val;
        },
    },
});

export const { setTag } = postSlice.actions;
export default postSlice.reducer;
