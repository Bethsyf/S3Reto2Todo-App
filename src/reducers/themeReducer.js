const themeReducer = (state = "dark", action) => {
    switch (action.type) {
      case "ToggleTheme":
        return state === "dark" ? action.payload.light : action.payload.dark;
      default:
        return state;
    }
  };
  
  export default themeReducer;