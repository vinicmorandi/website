import Home from "./home"
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7e57c2',
        },
    },
});

export default function Index() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    )
}
