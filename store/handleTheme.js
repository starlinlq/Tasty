import { THEME_SWITCH } from "./actionTypes";

function setTheme(theme) {
  return { type: THEME_SWITCH, payload: theme };
}

export const handleTheme = () => (dispatch, useState) => {
  const { theme } = useState();
  dispatch(setTheme(!theme));
};
