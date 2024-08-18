import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: 'user slice'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const userReducer = userSlice.reducer;