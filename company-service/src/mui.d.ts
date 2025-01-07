import { ButtonPropsSizeOverrides } from '@mui/material/Button';
import { PaletteColor, SimplePaletteColorOptions, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    l: true;
    m: true;
    s: true;
    xs: true;
  }
}

declare module '@mui/material' {
  interface PaletteColor {
    primary?: string;
    push?: string;
    secondary?: string;
    secondaryPush?: string;
  }

  interface SimplePaletteColorOptions {
    primary?: string;
    push?: string;
    secondary?: string;
    secondaryPush?: string;
  }

  interface PaletteColorOptions {
    primary?: string;
    push?: string;
    secondary?: string;
    secondaryPush?: string;
  }
}