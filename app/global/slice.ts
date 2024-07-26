import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userState: null || {},
  postToggle: false,
  secureUrl: "",
};

const slice = createSlice({
  name: "second",
  initialState,
  reducers: {
    signUser: (state, { payload }) => {
      state.userState = payload;
    },
    signOutUser: (state: { userState: {} | null }) => {
      state.userState = null;
    },
    addPost: (state) => {
      state.postToggle = !state.postToggle;
    },
  },
});

export const { signUser, signOutUser, addPost } = slice.actions;
export default slice.reducer;
