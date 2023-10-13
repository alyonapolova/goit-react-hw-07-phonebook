import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6529121b55b137ddc83e292b.mockapi.io/api/v1/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const response = await axios.get('contacts');
  console.log('get', response.data);
  return response.data;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`contacts/${id}`);
    console.log('delete', response.data);
    return response.data;
  }
);
