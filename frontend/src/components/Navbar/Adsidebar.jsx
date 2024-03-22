import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsSuggestTwoToneIcon from '@mui/icons-material/SettingsSuggestTwoTone';
import PreviewTwoToneIcon from '@mui/icons-material/PreviewTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../appStore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    backgroundColor: 'white ', 
    color: 'green', 
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: 'white', 
        color: 'green', 
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor: 'white', 
        color: 'green',
      },
    }),
  }),
);

export default function Adsidebar() {
  const theme = useTheme();
  const open = useAppStore((state) => state.dopen);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={20}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton sx={{color:'green'}}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/panel')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green'
                    }}
                  >
                   < CottageTwoToneIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 ,fontFamily:'cursive'}} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/book')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green',
                    }}
                  >
                   <PageviewTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bookings" sx={{ opacity: open ? 1 : 0 ,fontFamily:'cursive' }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/addtype')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green'
                    }}
                  >
                   <AddCircleTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add ScanType" sx={{ opacity: open ? 1 : 0 ,fontFamily:'cursive' }} />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/addscan')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green'
                    }}
                  >
                   <AddCircleTwoToneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Scan" sx={{ opacity: open ? 1 : 0 ,fontFamily:'cursive' }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/viewtype')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green'
                    }}
                  >
                   <PreviewTwoToneIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Scan Types" sx={{ opacity: open ? 1 : 0 ,fontFamily:'cursive' }} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/viewscan')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green'
                    }}
                  >
                   <PreviewTwoToneIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Scans" sx={{ opacity: open ? 1 : 0,fontFamily:'cursive'  }} />
                </ListItemButton>
              </ListItem>


              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/users')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green'
                    }}
                  >
                   <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0,fontFamily:'cursive' }} />
                </ListItemButton>
              </ListItem> 

              <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>{navigate('/adset')}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:'green'
                    }}
                  >
                   <SettingsSuggestTwoToneIcon/>
                  </ListItemIcon>
                  <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0,fontFamily:'cursive' }} />
                </ListItemButton>
              </ListItem>


          </List>
          <Divider />
        </Drawer>
      </Box>
    </Box>
  );
}
