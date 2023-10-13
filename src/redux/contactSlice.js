import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
        console.log(state.contacts.items);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const contactReducer = ContactSlice.reducer;
