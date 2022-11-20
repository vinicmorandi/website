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

console.log("you're not supposed to be here! >:(")

export default function Index() {
    const [width, setWidth] = useState(typeof window !== 'undefined' && window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', setDimension);

        function setDimension() {
            setWidth(window.innerWidth)
        }
    })

    return (
        <ThemeProvider theme={theme}>
            {
                width >= 1900
                    ? <Home />
                    : <>
                        <span>too lazy to do proper responsivity sry</span>
                        <style jsx>
                            {`
                            span {
                                display: flex;
                                flex-direction:column;
                                text-align: center;
                                justify-content: center;
                                height: 93vh;
                            }
                            `}
                        </style>
                    </>
            }
        </ThemeProvider>
    )
}
