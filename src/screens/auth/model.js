const initialState = {
  authState: false,
  userName: '',
};

export const auth = {
  state: {
    ...initialState,
  },
  reducers: {
    setNames(state, payload) {
      return {
        ...state,
        userName: payload,
      };
    },
    setAuth(state, payload) {
      return {
        ...state,
        authState: payload,
      };
    },
  },
  effects: (dispatch) => ({
    loginSubmit(name, rootState) {
      dispatch.auth.setNames(name);
      dispatch.auth.setAuth(true);
    },
  }),
};
