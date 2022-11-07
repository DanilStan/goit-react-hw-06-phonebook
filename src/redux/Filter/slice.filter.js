const { createSlice } = require("@reduxjs/toolkit");

export const filterInitialState = {
  filter: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload
  },
  }
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;