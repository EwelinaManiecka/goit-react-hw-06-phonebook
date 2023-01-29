import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
