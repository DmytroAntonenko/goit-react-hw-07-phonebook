import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63ce75936d27349c2b6e07fb.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async (details, thunkApi) => {
      try {
        const response = await axios.post('/contacts', details);
        return response.data;
      } catch (e) {
        return thunkApi.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactId, thunkApi) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data.id;
      } catch (e) {
        return thunkApi.rejectWithValue(e.message);
      }
    }
  );