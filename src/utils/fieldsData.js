import { createSlice } from "@reduxjs/toolkit";
const fieldSlice = createSlice({
  name: "field",
  initialState: {
    data: [],
  },
  reducers: {
    pushData: (state, actions) => {
      const newData = actions.payload;
      const updatedData = [...state.data, newData];
      return {
        ...state,
        data: updatedData,
      };
    },
    resetData: (state) => {
      return {
        ...state,
        data: [],
      };
    },
  },
});
export const { pushData, resetData } = fieldSlice.actions;
export default fieldSlice.reducer;
