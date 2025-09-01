import {useTheme} from "./useTheme.ts";

const Navbar = () => {
    const { theme, setTheme } = useTheme()

    const handleThemeToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <>
            <div style={{"backgroundColor": theme === 'dark' ? '#333' : '#f0f0f0'}}>
                <h1 style={{"color": theme === 'dark' ? '#fff' : '#000'}}>Hello Navbar</h1>
            </div>
            <button onClick={handleThemeToggle}>
                Toggle Theme
            </button>
        </>
    )
}

export default Navbar