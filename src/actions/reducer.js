const initialState = {
  loggedIn: false,
  user: null,
  sidebar: false,
  header: true,
  buttonText: "toggle Text",
};

export default function reducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case "SaveData":
      return Object.assign({}, state, payload);

    case "ToggleSidebar":
      state.sidebar = !state.sidebar;
      return state;

    case "ToggleHeader":
      state.header = !state.header;
      return state;

    case "SetHeader":
      console.log("we are in SetHeader", action);
      state.buttonText = action.payload;
      return state;

    default:
      return state;
  }
}
