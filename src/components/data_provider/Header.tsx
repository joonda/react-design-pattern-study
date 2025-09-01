import {ThemeProvider} from "./ThemeProvider.tsx";
import Navbar from "./Navbar.tsx";

const Header = () => {
    return (
        <ThemeProvider>
            <Navbar />
        </ThemeProvider>
    )
}

export default Header