import { BsSunFill, BsMoon } from "react-icons/bs";
import { useGlobalContext } from "./GlobalContext";

function ThemeToggle() {
    const { isDarkMode, toggleDarkMode } = useGlobalContext();

    return (
        <div className="toggle-container">
            {isDarkMode ? (
                <BsMoon className="toggle-icon" onClick={toggleDarkMode} />
            ) : (
                <BsSunFill className="toggle-icon" onClick={toggleDarkMode} />
            )}
        </div>
    );
}

export default ThemeToggle;
