import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { shallowEqual, useSelector } from 'react-redux';
import { editProduct } from '@/state/redux/actions';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
 
interface ModernTransactionsModal {
  open: boolean;
  onClose: () => void;
  transActionInformation?: React.ReactNode;
  productInformation?: React.ReactNode;
}
 
const TransactionsModal: React.FC<ModernTransactionsModal> = ({ open, onClose, productInformation }) => {
   const [opend, setOpend] = React.useState(open);
  const handleOpen = () => setOpend(true);
  const handleClose = () => setOpend(false);
  const selectProducts = useSelector((state:any) => state.products);   
 
    return (
 <div> 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {productInformation}
            </Typography>
              <Button onClick={onClose}>Cancel</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
    );
  };
  
  export default TransactionsModal;