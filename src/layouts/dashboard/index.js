
import { Box, Stack, IconButton, Divider, Avatar, Switch } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 48,
      height: 20,
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));


const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = React.useState(0);

  const { onToggleMode } = useSettings();

  return (
    <Stack direction="row">
      <Box
        p={2} //padding
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100,
        }}>
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent="space-between"
          sx={{ height: "100%" }}
          spacing={3}>

          <Stack alignItems={"center"} spacing={4}>

            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5
            }}>
              <img src={Logo} alt="Chat App Logo" />
            </Box>
            <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
              {Nav_Buttons.map((el) => (
                el.index === selected ?
                  <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <IconButton sx={{ width: "max-content", color: "fff" }}
                      key={el.index}>{el.icon}</IconButton>
                  </Box>
                  : <IconButton onClick={() => {
                    setSelected(el.index)
                  }} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "000" : theme.palette.text.primary  }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
              ))}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ?
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>

                </Box>

                : <IconButton onClick={() => {
                  setSelected(3);
                }}
                  sx={{ width: "max-content", color: theme.palette.mode === "light" ? "000" : theme.palette.text.primary }}
                >
                  <Gear />
                </IconButton>
              }
            </Stack>

          </Stack>


          <Stack spacing={4}>
            <Android12Switch
              onChange={() => {
                onToggleMode();
              }}
              defaultChecked />

            <Avatar src={faker.image.avatar()} />
          </Stack>

        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
