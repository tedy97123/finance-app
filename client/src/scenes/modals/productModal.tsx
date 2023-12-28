import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

interface ModernModalProps {
  open: boolean;
  onClose: () => void;
}

const ModernModal: React.FC<ModernModalProps> = ({ open,onClose }) => (
    
  <Dialog open={open}  onClose={onClose} >
 <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="firstName"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="lastName"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <Button onClick={onClose} >Cancel</Button>
          <Button onClick={onClose} >Submit</Button>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
  </Dialog>
);

export default ModernModal;
