import { REQUEST_STATUS } from "./constants";

export const selectRequestModule = (state) => state.request;

export const selectRequestById = (state, requestId) =>
  selectRequestModule(state)[requestId];

export const selectRequestStatus = (state, requestId) =>
  selectRequestById(state, requestId)?.status || REQUEST_STATUS.idle;

export const selectRequestError = (state, requestId) =>
  selectRequestById(state, requestId)?.error;
