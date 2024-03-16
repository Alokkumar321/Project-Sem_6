import React, { Suspense, lazy } from "react";
import Chats from './Chats'
import { Stack, Box } from "@mui/material";
import Conversation from "../../components/Conversation";
import { useTheme } from "@emotion/react";
// Dynamic import

const GeneralApp = () => {
const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box sx={{ 
        height: "100%", 
        width: "calc(100vw - 420px)", 
        background: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,
        
        }}>
          <Conversation />

      </Box>
    </Stack>
  );
};

export default GeneralApp;
