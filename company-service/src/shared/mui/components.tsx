import { Components, Theme } from '@mui/material/styles';
import { forwardRef } from 'react';
import { LinkProps } from '@mui/material/Link';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Inter from './fonts/Inter-V.ttf';
import { COLORS, palette } from './palette';

const LinkBehavior = forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    const { href, ...other } = props;
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
  },
);

export const components: Components<Omit<Theme, 'components'>> = {
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(${Inter}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: 'contained',
      color: 'primary',
      sx: {
        height: 'fit-content'
      }
    },
    variants: [
      {
        props: {
          size: 'xs',
        },
        style: {
          padding: '9px 16px',
          borderRadius: '8px'
        }
      },
      {
        props: {
          size: 's',
        },
        style: {
          padding: '11px 16px',
          borderRadius: '12px'
        }
      },
      {
        props: {
          size: 'm',
        },
        style: {
          padding: '13px 20px',
          borderRadius: '12px'
        }
      },
      {
        props: {
          size: 'l',
        },
        style: {
          padding: '17px 22px',
          borderRadius: '12px'
        }
      },
      {
        props: {
          color: "primary"
        },
        style: {
          backgroundColor: COLORS.PRIMARY
        }
      },
      {
        props: {
          color: 'secondary'
        },
        style: {
          backgroundColor: COLORS.SECONDARY,
          color: COLORS.PRIMARY,
        }
      }
    ],
  },

  MuiPaper: {
    defaultProps: {
      sx: {
        display: 'flex',
        gap: '12px'
      }
    }
  },
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
  },
  MuiTab: {
    defaultProps: {
      component: LinkBehavior,
    },
  },
  MuiList: {
    defaultProps: {
      disablePadding: true,
    },
  },
  MuiListItem: {
    defaultProps: {
      disablePadding: true,
    },
  },
  MuiDrawer: {
    defaultProps: {
      transitionDuration: 500,
      anchor: 'right',
      sx: {
        zIndex: 111111,
        '& .MuiDrawer-paper': {
          width: '33vw',
        },
      },
    },
  },

  MuiSnackbar: {
    defaultProps: {
      autoHideDuration: 3000,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    },
  },
};
