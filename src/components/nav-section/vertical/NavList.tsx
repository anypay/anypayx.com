import { useState } from 'react';
import { useRouter } from 'next/router';
// @mui
import { List, Collapse } from '@mui/material';
// type
import { NavListProps } from '../type';
//
import { NavItemRoot, NavItemSub } from './NavItem';
import { getActive } from '..';

// ----------------------------------------------------------------------

type NavListRootProps = {
  list: NavListProps;
  isCollapse: boolean;
};

export function NavListRoot({ list, isCollapse }: NavListRootProps) {
  const { pathname, asPath } = useRouter();

  const active = getActive(list.path, pathname, asPath);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemRoot
          item={list}
          isCollapse={isCollapse}
          active={active}
          open={open}
          onOpen={() => setOpen(!open)}
        />

        {!isCollapse && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {(list.children || []).map((item) => (
                <NavListSub key={item.title} list={item} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return <NavItemRoot item={list} active={active} isCollapse={isCollapse} />;
}

// ----------------------------------------------------------------------

type NavListSubProps = {
  list: NavListProps;
};

function NavListSub({ list }: NavListSubProps) {
  const { pathname, asPath } = useRouter();

  const active = getActive(list.path, pathname, asPath);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemSub item={list} onOpen={() => setOpen(!open)} open={open} active={active} />

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 3 }}>
            {(list.children || []).map((item) => (
              <NavItemSub
                key={item.title}
                item={item}
                active={getActive(item.path, pathname, asPath)}
              />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return <NavItemSub item={list} active={active} />;
}
