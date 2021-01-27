import store from "./store";

export const SaveData = (payload) =>
  store.dispatch({ type: "SaveData", payload });
