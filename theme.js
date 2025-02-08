'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        h1:{
            fontFamily: 'var(--font-nunito)',
            textTransform: 'none',
        },
        h2:{
            fontFamily: 'var(--font-nunito)',
            textTransform: 'none',
        },
        h3:{
            fontFamily: 'var(--font-nunito)',
            textTransform: 'none',
        },
        h4: {
            fontFamily: 'var(--font-nunito)',
            textTransform: 'none',
        }, 
        h5: {
            fontFamily: 'var(--font-nunito)',
            textTransform: 'none',
        }
    },
    palette: {
        primary: {
            main: "#5CA904",
            dark: "#228B22",
        },
        secondary: {
            main: "#010101"
        }
    }
});

theme = responsiveFontSizes(theme);

export default theme;