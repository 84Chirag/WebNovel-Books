import ThemeContext from "../themes/themeContext";
import { useState } from "react";

// Create a ThemeState component that manages the application's theme state.
const ThemeState = (props) => {
    // Initialize the theme mode state with 'light' as the default.
    const [modestate, setmodeState] = useState('light');

    // Define a function to toggle between 'light' and 'dark' themes.
    const togglemode = () => {
        // Check the current theme mode and switch to the opposite.
        if (modestate === 'light') {
            setmodeState('dark');
            // Update the body background and text color for the dark theme.
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        } else {
            setmodeState('light');
            // Update the body background and text color for the light theme.
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";

        };
        // localStorage.setItem('mode',modestate)
    };

    // Provide the theme mode and toggle function to components wrapped inside this provider.
    return (
        <ThemeContext.Provider value={{ togglemode, modestate }}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export default ThemeState