export const changeTheme = () => {
  return {
    type: "ToggleTheme",

    payload: {
      light: "light",
      dark: "dark",
    },
  };
};