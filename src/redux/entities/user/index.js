import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../constants/normalized-mock";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: normalizedUsers.reduce((entities, user) => {
      entities[user.id] = user;
      return entities;
    }, {}),
    ids: normalizedUsers.map(({ id }) => id),
  },
});
