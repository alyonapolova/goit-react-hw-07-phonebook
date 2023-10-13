import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getStatusFilter = state => state.contacts.filter;

export const selectorFilteredContacts = createSelector(
  getContacts,
  getStatusFilter,
  (items, filter) =>
    items
      ? items.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : items
);
