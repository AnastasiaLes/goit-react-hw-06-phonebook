import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const myContactsSlice = createSlice({
  name: "myContacts",
  initialState: {contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''},
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload)
    },
    removeContacts(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
      },
    updateFilter(state, action) {state.filter = action.payload}
  }
})

const persistConfig = {
  key: 'myContacts',
  storage,
  whitelist: ['contacts'],
}

export const persistedMyContactsReducer = persistReducer(persistConfig, myContactsSlice.reducer);


export const { addContact, removeContacts, updateFilter } = myContactsSlice.actions;