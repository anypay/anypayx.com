import { useState } from 'react';
import NextLink from 'next/link';
// @mui
import Masonry from '@mui/lab/Masonry';
import { alpha, Theme } from '@mui/material/styles';
import { Link, List, Paper, ListItem, Typography, Divider, Stack } from '@mui/material';
// @types
import { ParentItemProps, MegaMenuItemProps } from './type';
// config
import { NAVBAR } from '../../config';
// components
import Iconify from '../Iconify';
//
import MenuHotProducts from './MenuHotProducts';
import MegaMenuCarousel from './MenuCarousel';

// ----------------------------------------------------------------------

const MENU_PAPER_WIDTH = 800;
const PARENT_ITEM_HEIGHT = 40;

type Props = {
  navConfig: MegaMenuItemProps[];
};

export default function MegaMenuDesktopVertical({ navConfig, ...other }: Props) {
  return (
    <List disablePadding {...other}>
      {navConfig.map((parent) => (
        <MegaMenuItem key={parent.title} parent={parent} />
      ))}
    </List>
  );
}

// ----------------------------------------------------------------------

function MegaMenuItem({ parent }: { parent: MegaMenuItemProps }) {
  const { title, path, more, products, tags, children } = parent;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (children) {
    return (
      <>
        <ParentItem
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          path={path}
          title={title}
          open={open}
          hasSub
        />

        {open && (
          <Paper
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            sx={{
              p: 3,
              top: -62,
              borderRadius: 2,
              position: 'absolute',
              left: NAVBAR.BASE_WIDTH,
              width: MENU_PAPER_WIDTH,
              boxShadow: (theme) => theme.customShadows.z20,
            }}
          >
            <Masonry columns={3} spacing={2}>
              {children.map((list) => (
                <Stack key={list.subheader} spacing={1.25} sx={{ mb: 2.5 }}>
                  <Typography variant="subtitle1" noWrap>
                    {list.subheader}
                  </Typography>
                  {list.items.map((link) => (
                    // @ts-ignore
                    <NextLink key={link.title} href={link.path} passHref>
                      <Link
                        noWrap
                        underline="none"
                        sx={{
                          typography: 'body2',
                          color: 'text.primary',
                          fontSize: 13,
                          // @ts-ignore
                          transition: (theme) => theme.transitions.create('all'),
                          '&:hover': { color: 'primary.main' },
                        }}
                      >
                        {link.title}
                      </Link>
                    </NextLink>
                  ))}
                </Stack>
              ))}
            </Masonry>

            {!!more && !!products && !!tags && (
              <Stack spacing={3}>
                {/* @ts-ignore */}
                <NextLink href={more.path} passHref>
                  <Link sx={{ typography: 'body2', display: 'inline-flex', fontSize: 13 }}>
                    {more.title}
                  </Link>
                </NextLink>

                <Divider />
                <MegaMenuCarousel
                  products={products}
                  numberShow={6}
                  sx={{ '& .controlsArrows': { mt: 5 } }}
                />
                <Divider />

                <MenuHotProducts tags={tags} />
              </Stack>
            )}
          </Paper>
        )}
      </>
    );
  }

  return <ParentItem path={path} title={title} />;
}

// ----------------------------------------------------------------------

function ParentItem({ path = '', title, open, hasSub, ...other }: ParentItemProps) {
  const activeStyle = {
    color: 'primary.main',
    // @ts-ignore
    bgcolor: (theme: Theme) => alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
  };

  return (
    // @ts-ignore
    <NextLink href={path} passHref>
      <ListItem
        sx={{
          pl: 2.5,
          pr: 1.5,
          height: PARENT_ITEM_HEIGHT,
          cursor: 'pointer',
          color: 'text.primary',
          typography: 'subtitle2',
          textTransform: 'capitalize',
          justifyContent: 'space-between',
          // @ts-ignore
          transition: (theme) => theme.transitions.create('all'),
          '&:hover': activeStyle,
          ...(open && activeStyle),
        }}
        {...other}
      >
        {title}
        {hasSub && (
          <Iconify icon={'eva:chevron-right-fill'} sx={{ ml: 1, width: 20, height: 20 }} />
        )}
      </ListItem>
    </NextLink>
  );
}
