import { PaletteOptions } from '@mui/material';

export const COLORS = {
    PRIMARY: '#0066FF',
    PUSH: '#004BBC',
    SECONDARY: '#E8F1FF',
    SECONDARY_PUSH: '#D4E0F2',
    RED: '#FF3B30',
    RED_LIGHT: '#FBEAE9',
    RED_ALPHA: '#FF3B3033',
    GREEN_DARK: '#278E25',
    GREEN: '#52B52F',
    GREEN_LIGHT: '#52B52F',
    GREEN_ALPHA: '#42B52F33',
    ORANGE: '#FFA900',
    ORANGE_LIGHT: '#FFF6E5',
    ORANGE_ALPHA: '#FFAD0D33',
}

export const palette: PaletteOptions = {
    mode: 'light',
    primary: {
        main: COLORS.PRIMARY,
        primary: COLORS.PRIMARY,
        push: COLORS.PUSH,
        secondary: COLORS.SECONDARY,
        secondaryPush: COLORS.SECONDARY_PUSH
    },
    grey: {
        "900": "#101828",
        "800": "#4C525E",
        "700": "#7C8089",
        "600": "#ACAEB5",
        "500": "#D5D6D9",
        "400": "#E6E7E8",
        "300": "#F4F4F5",
        "200": "#F9F9FA",
        "100": "#FFFFFF",
    }
};

