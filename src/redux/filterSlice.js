import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
