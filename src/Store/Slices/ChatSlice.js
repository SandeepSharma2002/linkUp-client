import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    image: null,
    email: null,
    id: null
};

export const chatSlice = createSlice({
    name: "ChatState",
    initialState,
    reducers: {
        setReceiver: (state, action) => {
            const { username, image, _id, email } =
                action.payload;
            state.username = username;
            state.email = email;
            state.image = image;
            state.id = _id;
        },

        closeChat: (state) => {
            state.username = null;
            state.image = null;
            state.email = false;
            state.id = null;
        },
    },
});

export const { setReceiver, closeChat } = chatSlice.actions;
export default chatSlice.reducer;
