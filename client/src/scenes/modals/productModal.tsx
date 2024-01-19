import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
 
 
interface ModernModalProps {
  open: boolean;
  onClose: () => void;
}
 
const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
];

const ModernModal: React.FC<ModernModalProps> = ({ open, onClose }) => {
    // const dispatch = useDispatch();
    // const 
    // { 
    //     productName,
    //     price,
    //     currencyType,
    //     expense 
    // } = useSelector((state: RootState) => state.product);
  
    // const handleSubmit = async () => {
    //   try {
    //     const response = await fetch('your_backend_endpoint', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         id: BigInt(Date.now()),
    //         name: productName,
    //         price: parseFloat(price),
    //         currencyType: currencyType as unknown as symbol,
    //         createdAt: new Date().toISOString(),
    //         updatedAt: new Date().toISOString(),
    //       }),
    //     });
  
    //     if (response.ok) {
    //       dispatch(setProductName('')); // Reset the state after successful submission
    //       dispatch(setPrice(''));
    //       dispatch(setCurrencyType(''));
    //       dispatch(setExpense(''));
    //       onClose(); // Close the modal
    //     } else {
    //       console.error('Failed to submit form');
    //     }
    //   } catch (error) {
    //     console.error('Error during form submission', error);
    //   }
    // };
  
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const { name, value } = e.target;
    //   switch (name) {
    //     case 'productName':
    //       dispatch(setProductName(value));
    //       break;
    //     case 'price':
    //       dispatch(setPrice(value));
    //       break;
    //     case 'currencyType':
    //       dispatch(setCurrencyType(value));
    //       break;
    //     case 'expense':
    //       dispatch(setExpense(value));
    //       break;
    //     default:
    //       break;
    //   }
    //   console.log(name,value)  
    //   };
  
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Add/Update Product Table</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To update or add a new product, fill out this form.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="productName"
            label="Product Name"
            type="text"
            fullWidth
            variant="outlined"
            // value={productName}
            // onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            variant="outlined"
            // value={price}
            // onChange={handleInputChange}
          />
          <TextField
            id="filled-select-currency-native"
            select
            margin="dense"
            label="Currency Type"
            defaultValue="Dollar"
            SelectProps={{
              native: true,
            }}
            helperText="Please select your currency"
            variant="filled"
            // value={currencyType}
            // onChange={handleInputChange}
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            autoFocus
            margin="dense"
            id="expense"
            label="Expense"
            type="number"
            fullWidth
            variant="outlined"
        
          />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default ModernModal;