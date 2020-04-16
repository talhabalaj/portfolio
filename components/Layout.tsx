import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../config/theme";


export const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
)