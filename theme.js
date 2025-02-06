'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h3:{
            fontFamily: 'var(--font-nunito)',
            textTransform: 'none',
        },
        h4: {
            fontFamily: 'var(--font-robot)',
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

export default theme;