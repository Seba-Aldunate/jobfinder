import { createSlice } from "@reduxjs/toolkit";
import { users } from "../utils/data";

const initialState = {
  // Comprueba si el usuario está almacenado en el localstorage
  user: JSON.parse(window?.localStorage.getItem("userInfo")) ?? {},
};

// Crea un slice de usuario
const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    // Define la acción de inicio de sesión
    login(state, action) {
      state.user = action.payload.user;
    },
    // Define la acción de cierre de sesión
    logout(state) {
      state.user = null;
      localStorage?.removeItem("userInfo");
    },
  },
});

export default userSlice.reducer;

// Exporta la función de inicio de sesión
export function Login(user) {
  return (dispatch, getState) => {
    // Despacha la acción de inicio de sesión utilizando el reducer del slice
    dispatch(userSlice.actions.login({ user }));
  };
}
// Exporta la función de cierre de sesión
export function Logout() {
  return (dispatch, getState) => {
    // Despacha la acción de cierre de sesión utilizando el reducer del slice
    dispatch(userSlice.actions.logout());
  };
}
