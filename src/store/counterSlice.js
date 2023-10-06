import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  isSearch: false,
};

export const counterSlice = createSlice({
  name: "items",
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
   setIsSearch: (state, action)=> {
    state.isSearch = !state.isSearch;
   }
  }
});

export const { increment, decrement, incrementByAmount, setIsSearch } = counterSlice.actions;
export default counterSlice.reducer;
