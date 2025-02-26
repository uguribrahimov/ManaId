import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../api'; // API istemcisini içe aktar

// API'den cart verilerini asenkron olarak çek
export const fetchCartItems = createAsyncThunk(
  'search/fetchCartItems',
  async () => {
    try {
      const response = await apiClient.get('/cartDetails'); // /cardDetails'den veriyi çek
      return response;
      console.log(response);
      
    } catch (error) {
      console.error('Kart detayları alınırken hata oluştu:', error);
      return []; // Hata durumunda boş array döndür
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState: { cartItems: [], searchText: '' }, // Başlangıçta boş state
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload; // API'den gelen veriyi `cartItems` olarak ayarla
    });
  },
});

export const { setSearchText } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export const selectCartItems = (state) => state.search.cartItems;
