import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <h1>Website Title</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
export default Navbar;
