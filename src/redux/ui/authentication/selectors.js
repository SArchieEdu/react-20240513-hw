export const selectAuthenticationModule = (state) => state.restaurant;

export const selectToken = (state) => selectAuthenticationModule(state).token;
