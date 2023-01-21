export const selectContacts = state => state.phoneBook.contacts.items;
export const selectIsLoading = state => state.phoneBook.contacts.isLoading;
export const selectIsError = state => state.phoneBook.contacts.error;
export const selectFilter = state => state.phoneBook.filter;
