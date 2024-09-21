import { Components, Theme } from '@mui/material/styles';
import { forwardRef } from 'react';
import  { LinkProps } from '@mui/material/Link';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

const LinkBehavior = forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }>(
  (props, ref) => {
    const { href, ...other } = props;
    return <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />;
  },
);


export const components: Components<Omit<Theme, 'components'>> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      variant: 'contained',
    },
  },
  MuiLink: {
    defaultProps: {
      component: LinkBehavior,
    } as LinkProps,
  },
  MuiTab: {
    defaultProps: {
      component: LinkBehavior
    }
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
