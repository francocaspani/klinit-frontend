import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

export default function Drawer({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inicio", "Contacto"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <a key={text} href={''} className="text-sm font-semibold leading-6 text-black">
                {text}
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Iniciar sesión"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
            <a href="/auth" className="text-sm font-semibold leading-6 text-black">
              Iniciar sesión <span aria-hidden="true">&rarr;</span>
            </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor={"right"}
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      {list}
    </SwipeableDrawer>
  );
}
