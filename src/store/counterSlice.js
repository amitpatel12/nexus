import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSearch: false,
};

export const counterSlice = createSlice({
  name: "items",
  initialState,

  reducers: {
   setIsSearch: (state, action)=> {
    state.isSearch = !state.isSearch;
   }
  }
});

export const { setIsSearch } = counterSlice.actions;
export default counterSlice.reducer;
