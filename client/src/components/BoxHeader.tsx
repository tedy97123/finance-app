import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import FlexBetween from "./FlexBetween";
import { PlusOne } from "@mui/icons-material";
import ModernModal from "@/scenes/modals/productModal";

type Props = {
  title: string;
  sideText: string;
  subtitle?: string;
  icon?: React.ReactNode;
  addIcon?: React.ReactNode;
 };

const BoxHeader = ({ icon, title, subtitle, sideText, addIcon }: Props) => {
  const { palette } = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue =()=>{
    setModalIsOpen(true)
}
const setModalIsOpenToFalse =()=>{
  setModalIsOpen(false)
}
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        <ModernModal open={modalIsOpen} onClose={setModalIsOpenToFalse}/> 
          <IconButton onClick={setModalIsOpenToTrue} >
                {addIcon}
          </IconButton>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
