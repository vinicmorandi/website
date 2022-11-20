import Home from "./home"
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { useState } from "react";
import { useEffect } from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#7e57c2',
        },
    },
});

export default function Index() {
    const [width, setWidth] = useState(901)

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        function setDimension() {
            setWidth(window.innerWidth)
        }
    })
    
    return (
        <ThemeProvider theme={theme}>
            {
                width >= 1920
                    ? <Home />
                    : <center>too lazy to do proper responsivity lol</center>
            }
        </ThemeProvider>
    )
}
