import React from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeTheme } from "../action/themeActions";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  return (
    <div className="header">
      <div className="titleContainer">
        <h1>TODO</h1>
        <div className="themeIcon">
          <Button className="themeBtn" onClick={() => dispatch(changeTheme())}>
            <img src={theme === "dark" ? 'https://res.cloudinary.com/dmaviub4l/image/upload/v1652185556/todoapp/gmfrn1i64nken1fdmic5.svg' : 'https://res.cloudinary.com/dmaviub4l/image/upload/v1652185556/todoapp/lckwaiqsodfz3zxx9ioh.svg'} alt="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;