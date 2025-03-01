import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../api'; 

export const fetchCartItems = createAsyncThunk(
  'search/fetchCartItems',
  async () => {
    try {
      const response = await apiClient.get('/cartDetails'); 
      return response;
      console.log(response);
      
    } catch (error) {
      console.error('Kart detayları alınırken hata oluştu:', error);
      return [];
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: { cartItems: [], searchText: '' },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload; 
    });
  },
});

export const { setSearchText } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export const selectCartItems = (state) => state.search.cartItems;
