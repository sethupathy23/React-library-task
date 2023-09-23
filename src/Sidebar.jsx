import React from 'react'
import { Box,Container,List,Stack } from '@mui/material';


import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box  flex={1} p={2}>
      <Box sx={{position:"fixed" }} >
     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="HomePage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="e-Books" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Tamil" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#market">
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="English" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Bussiness & management" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Computer" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText  primary="Computer and Science" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <DarkModeIcon/>
              </ListItemIcon>
              <FormControlLabel control={<Switch onChange={(e)=>setMode(mode === "light" ? "dark" : "light")} defaultChecked />} label="Label" />
            </ListItemButton>
          </ListItem>
          
          </List>
          </Box>
    </Box>
  )
}

export default Sidebar