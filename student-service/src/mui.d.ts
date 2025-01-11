import { ButtonPropsSizeOverrides } from "@mui/material/Button"
import { AvatarPropsVariantOverrides } from "@mui/material/Avatar"
import { ChipPropsSizeOverrides } from "@mui/material/Chip"
import {
  PaletteColor,
  SimplePaletteColorOptions,
  PaletteColorOptions,
} from "@mui/material/styles"

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    l: true
    m: true
    s: true
    xs: true
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    ghost: true
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    xl: React.CSSProperties
    "xl-bold": React.CSSProperties

    l: React.CSSProperties
    "l-bold": React.CSSProperties

    m: React.CSSProperties
    "m-bold": React.CSSProperties

    s: React.CSSProperties
    "s-bold": React.CSSProperties

    xs: React.CSSProperties
    "xs-bold": React.CSSProperties
  }

  interface TypographyVariantsOptions {
    xl?: React.CSSProperties
    "xl-bold"?: React.CSSProperties

    l?: React.CSSProperties
    "l-bold"?: React.CSSProperties

    m?: React.CSSProperties
    "m-bold"?: React.CSSProperties

    s?: React.CSSProperties
    "s-bold"?: React.CSSProperties

    xs?: React.CSSProperties
    "xs-bold"?: React.CSSProperties
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    xl: true
    "xl-bold": true

    l: true
    "l-bold": true

    m: true
    "m-bold": true

    s: true
    "s-bold": true

    xs: true
    "xs-bold": true
  }
}

declare module "@mui/material/Avatar" {
  interface AvatarPropsVariantOverrides {
    "photo-xl": true
    "photo-l": true
    "photo-m": true
    "photo-s": true
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsSizeOverrides {
    s: true
    xs: true
  }
}
